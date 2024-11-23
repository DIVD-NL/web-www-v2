---
title: "CASE: KASEYA"
date: 2024-02-14T09:28:00+01:00
author:
  - /who-we-are/team/people/victor-gevers
  - /who-we-are/team/people/joost-hendricksen
tag: case
intro: One of the biggest (ransomware) cases in history, a case with a huge impact worldwide.
case:
  caseid: DIVD-2021-00002
  closed: true
  link: https://csirt.divd.nl/cases/DIVD-2021-00002/
  lead: Lenneart
  leadlink: ""
  researchers:
    - label: Victor Gevers
      link: ""
    - label: Joost Hendricksen
      link: ""
    - label: Wietse Boonstra
      link: ""
    - label: Lennaert Oudshoorn
      link: ""
faq_enabled: false
---

On March 23, DIVD researcher [Wietse Boonstra](https://www.divd.nl/who-we-are/team/people/wietse-boonstra/) found six zero-day vulnerabilities in IT management software from Kaseya, a Miami-based company. Kaseya VSA (Virtual Systems Administrator) is a remote software management tool that can be used to perform just about any system administration task like installing software, applying patches, adding users, or creating backups. It is a tool – mostly – Managed Service Providers (MSPs) use to control the systems of their customers. By outsourcing the system administration, smaller organizations can save costs and focus on growing their business. In theory, MSPs also reduce security risk. But if this kind of software is compromised, many clients are at risk.

### Writing a detailed writeup

After realizing the possible impact of the vulnerabilities, DIVD-CSIRT manager [Frank Breedijk](https://www.divd.nl/who-we-are/team/people/frank-breedijk/) wrote a detailed writeup, including the Proof of Concept codes of Wietse Boonstra and a Nmap script. DIVD chairman [Victor Gevers](https://www.divd.nl/who-we-are/team/people/victor-gevers-1/) used his contacts to initiate a Coordinated Vulnerability Disclosure process with Kaseya. After the first scan of Kaseya VSA portals on the internet, DIVD found a total of 2,000+ MSPs, each with many customers under their management. In total, we were dealing with potentially millions of victims.

### Kaseya responded

Kaseya responded promptly and cooperatively. After DIVD contacted Kaseya, CTO Dan Timpson worked with his team to fix the issues. Most of the vulnerabilities were fixed, and patches were sent to the MSPs. The last one, {CVE-2021-30116}, a vulnerability consisting of the leaking of credentials, took more time to fix.

### Ransomware gang Revil

July 2 – at the start of the 4th of July weekend – ransomware gang [Revil](https://en.wikipedia.org/wiki/REvil) attacked many Kaseya VSA instances. That attack also exploited this same vulnerability, leaking credentials, and gaining authenticated access to a part of the Kaseya customer portal. Kaseya immediately contacted Wietse Boonstra and Victor Gevers to help out and scan and warn all potential victims. [Lennaert Oudshoorn](https://www.divd.nl/who-we-are/team/people/lennaert/), Joost Hendrickx, and Frank Breedijk soon joined in scanning all IP addresses for the presence of Kaseya VSA repeatedly and sending messages to the MSPs to turn off Kaseya VSA immediately. We also shared this list with Kaseya, who did their share in notifying their customers. Because our fingerprint contained a customer ID, Kaseya was able to link the instances to the customer and provided them with concrete information: turn off the Kaseya VSA instance on this IP address. In the first 48 hours, the instances that were reachable from the internet dropped from 2.000+ to 140. By working closely with trusted partners and national CERTs, the number of servers in The Netherlands dropped to zero that Sunday afternoon.
