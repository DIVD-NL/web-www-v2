#!/usr/bin/env bash
# Timed publication. Unpacks embargo/content.tar.enc over the working tree.
#   apply         decrypt and unpack now
#   apply-if-due  same, but only once the embargo has passed
#   wait <s>      sleep until <s> seconds before the embargo, at most MAX_WAIT seconds
# Needs EMBARGO_KEY in the environment for apply. Never prints content.
set -euo pipefail

FILE=embargo/content.tar.enc
EMBARGO_EPOCH=1795610220 # 25 Nov 2026 13:37:00 CET

case "${1:-}" in
  apply)
    : "${EMBARGO_KEY:?EMBARGO_KEY is not set}"
    tmp=$(mktemp "${RUNNER_TEMP:-${TMPDIR:-/tmp}}/embargo.XXXXXX")
    trap 'rm -f "$tmp"' EXIT
    openssl enc -d -aes-256-cbc -pbkdf2 -iter 600000 -md sha256 \
      -in "$FILE" -out "$tmp" -pass env:EMBARGO_KEY
    tar -xzf "$tmp"
    echo "Package unpacked."
    ;;
  apply-if-due)
    if [ ! -f "$FILE" ]; then
      echo "No package."
    elif [ "$(date +%s)" -lt "$EMBARGO_EPOCH" ]; then
      echo "Package not due yet."
    else
      "$0" apply
    fi
    ;;
  wait)
    target=$((EMBARGO_EPOCH - ${2:-0}))
    max=${MAX_WAIT:-19800}
    left=$((target - $(date +%s)))
    if [ "$left" -gt "$max" ]; then left=$max; fi
    if [ "$left" -gt 0 ]; then sleep "$left"; fi
    date
    if [ -n "${MUST_REACH:-}" ] && [ "$(date +%s)" -lt "$target" ]; then
      echo "Target not reached, stopping instead of publishing early." >&2
      exit 1
    fi
    ;;
  *)
    echo "usage: $0 apply | apply-if-due | wait <seconds before embargo>" >&2
    exit 2
    ;;
esac
