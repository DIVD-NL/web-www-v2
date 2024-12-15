---
title: "CASE: SOLARWINDS ORION"
date: 2022-01-28T00:01:00+01:00
author: []
tag: case
intro: On December 8, 2020, FireEye announced that the company had fallen victim to a hack. DIVD scanned for Supernova and found around 700 vulnerable Solarwinds Orion systems facing the internet, worldwide, including systems of foreign defense units and satellite communication. Eight of these systems used IP addresses from the Netherlands.
image: ""
Alt tag for image: ""
case:
  caseid: DIVD-2020-00014
  closed: true
  link: https://csirt.divd.nl/cases/DIVD-2020-00014/
  lead: Barry van Kampen
  leadlink: https://www.divd.nl/who-we-are/team/people/barry-van-kampen/
  researchers:
    - label: Matthijs Koot
      link: Matthijs Koot
    - label: Lennaert Oudshoorn
      link: https://www.divd.nl/who-we-are/team/people/lennaert-oudshoorn/
  researchers_people: []
faq_enabled: false
faq: null
---
Written on **28 Jan 2022** by [Gerard Janssen](https://vintage.divd.nl/people/Gerard%20Janssen), and updated on **13 Dec 2024** by [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

## The case

On December 8, 2020, FireEye announced that the company had fallen victim to a hack. FireEye is a privately held cybersecurity company headquartered in Milpitas, California. The company provides hardware, software, and services to investigate cybersecurity attacks, protect against malicious software, and analyze IT security risks.

## The exploit

The attackers took advantage of a backdoor in Orion, a software package from the company Solarwinds. SolarWinds’ Orion system provides centralized monitoring across an organization’s entire IT stack.

## The Impact

A few days later, it turned out that not only FireEye had been hit by the attack. The attack had been going on for months and had hit many other major companies, including Microsoft, Cisco, Intel, Nvidia, VMware, Deloitte, Malwarebytes, and various US government agencies.

According to a statement by SolarWinds, the hackers already gained access to SolarWinds’ software development system in October 2019. They inserted a vulnerability in Orion software updates, dubbed SUNBURST, which was installed by customers in the spring of 2020. SolarWinds said it notified 33,000 customers, among them US government agencies, major private corporations, and Fortune 500 businesses.

By analyzing the attack, security researchers from Symantec, Palo Alto Networks and Guidepoint found another backdoor, likely coming from a different threat actor ([CVE-2020-10148](https://nvd.nist.gov/vuln/detail/CVE-2020-10148)), this vulnerability was also used by attackers to deliver malware and was called 'Supernova'.

## What we did

DIVD scanned for Supernova and found around 700 vulnerable Solarwinds Orion systems facing the internet, worldwide, including systems of foreign defence units and satellite communication. Eight of these systems used IP addresses from the Netherlands. DIVD sent out the first notifications on the 30th of December 2020. 

## What you can do

Deploy the hotfix that is available for your Orion version. Don’t expose the management interface to the public internet.

## More information

- [DIVD-2020-00014 - SolarWinds Orion](https://csirt.divd.nl/cases/DIVD-2020-00014/)
- [Security Week 28-12-2020](https://www.securityweek.com/new-zero-day-malware-indicate-second-group-may-have-targeted-solarwinds)
- [Solarwinds: Security Advisory](https://www.solarwinds.com/sa-overview/securityadvisory)
- [FireEye blog](https://www.fireeye.com/blog/products-and-services/2020/12/fireeye-shares-details-of-recent-cyber-attack-actions-to-protect-community.html)
- [Symantec blog](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/sunburst-supply-chain-attack-solarwinds)
- [CVE-2020-10148](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-10148)
