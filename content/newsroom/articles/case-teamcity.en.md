---
title: "CASE : AUTHENTICATION BYPASS IN JETBRAINS TEAMCITY"
date: 2023-10-05T21:18:00+02:00
tag: case
intro: A critical security issue was recently identified in TeamCity On-Premises. If abused, the flaw may enable an unauthenticated attacker with HTTP(S) access to a TeamCity server to perform bypass authentication checks and gain administrative control of that TeamCity server.
image: /images/articles/divd-2024-00009-authentication-bypass-in-jetbrains-teamcity.png
alt: ""
case:
  caseid: DIVD-2024-00009
  link:
    label: DIVD-2024-00009
    url: https://csirt.divd.nl/cases/DIVD-2024-00009/
    invertedColors: false
    external: true
  lead: Alwin Warringa
  leadlink: https://www.divd.nl/people/Alwin%20Warringa/
  researchers:
    - label: Alwin Warringa
      link: https://www.divd.nl/people/Alwin%20Warringa/
    - label: Gerben van der Wel
image_alt: Picture of a bug (insect)
---
## SUMMARY

A critical security issue was recently identified in TeamCity On-Premises. If abused, the flaw may enable an unauthenticated attacker with HTTP(S) access to a TeamCity server to perform bypass authentication checks and gain administrative control of that TeamCity server.

## RECOMMENDATIONS

JetBrains advises On-Prem users to upgrade to the latest available version as soon as possible or install the security patch. See the references for the download links. If you are compromised, DIVD advises you start your incident response process immediately.

## WHAT WE ARE DOING

DIVD is currently working to identify vulnerable instances and notify the owners of these systems.

## MORE INFORMATION

- [JetBrains Advisory](https://blog.jetbrains.com/teamcity/2024/03/additional-critical-security-issues-affecting-teamcity-on-premises-cve-2024-27198-and-cve-2024-27199-update-to-2023-11-4-now/)
- [CVE-2024-27198](https://nvd.nist.gov/vuln/detail/CVE-2024-27198)
- [CVE-2024-27199](https://nvd.nist.gov/vuln/detail/CVE-2024-27199)
