---
title: "CASE: AUTHENTICATION BYPASS & REMOTE CODE EXECUTION IN CONNECTWISE SCREENCONNECT"
date: 2023-10-02T15:03:00+02:00
tag: case
intro: A critical security issue was recently identified in ConnectWise ScreenConnect. If abused, the flaw may enable an unauthenticated attacker to bypass the authentication and execute remote code or directly impact confidential data or critical systems.
image: /images/articles/connectwise.webp
Alt tag for image: ""
case:
  caseid: DIVD-2024-00008
  closed: false
  link: https://csirt.divd.nl/cases/DIVD-2024-00008/
  lead: Stan Plasmeijer
  leadlink: https://www.divd.nl/who-we-are/team/people/stan-plasmeijer/
  researchers:
    - label: Jeroen de Baare
      link: https://www.divd.nl/who-we-are/team/people/jeroen-de-baare/
    - label: Barre Dijkstra
      link: https://www.divd.nl/who-we-are/team/people/barre-dijkstra/
faq_enabled: false
---

## SUMMARY

A critical security issue was recently identified in ConnectWise ScreenConnect. If abused, the flaw may enable an unauthenticated attacker to bypass the authentication and execute remote code or directly impact confidential data or critical systems.

## RECOMMENDATIONS

ConnectWise recommends partners update their ScreenConnect to version 23.9.8. ConnectWise will also provide updated versions of releases 22.4 through 23.9.7 for the critical issue but strongly recommends that partners update to ScreenConnect version 23.9.8.

## WHAT WE ARE DOING

DIVD is currently working to identify vulnerable instances and notify the owners of these systems.

## MORE INFORMATION

- [ConnectWise ScreenConnect 23.9.8 security fix](https://www.connectwise.com/company/trust/security-bulletins/connectwise-screenconnect-23.9.8)
- [Detection Guidance for ConnectWise CVE-2024-1709](https://www.huntress.com/blog/detection-guidance-for-connectwise-cwe-288-2)
- [CVE-2024-1708](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-1708)
- [CVE-2024-1709](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-1709)
