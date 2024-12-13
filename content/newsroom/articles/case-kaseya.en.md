---
title: "CASE: KASEYA"
date: 2024-02-14T09:28:00+01:00
author:
  - /who-we-are/team/people/victor-gevers
  - /who-we-are/team/people/joost-hendricksen
tag: case
intro: One of the biggest (ransomware) cases in history, a case with a huge impact worldwide.
Alt tag for image: ""
case:
  caseid: DIVD-2021-00002
  closed: true
  link: https://csirt.divd.nl/cases/DIVD-2021-00002/
  lead: Frank Breedijk
  leadlink: https://www.divd.nl/who-we-are/team/people/frank-breedijk/
  researchers:
    - label: Victor Gevers
      link: https://www.divd.nl/who-we-are/team/people/victor-gevers-1/
    - label: Joost Hendricksen
      link: https://www.divd.nl/who-we-are/team/people/joost-hendricksen/
    - label: Wietse Boonstra
      link: https://www.divd.nl/who-we-are/team/people/wietse-boonstra/
    - label: Lennaert Oudshoorn
      link: https://www.divd.nl/who-we-are/team/people/lennaert/
    - label: Frank Breedijk
      link: https://www.divd.nl/who-we-are/team/people/frank-breedijk/
faq_enabled: false
---
Written on **02 Dec 2021** by [Gerard Janssen](https://www.divd.nl/who-we-are/team/people/gerard-janssen/), updated on **13 Dec 2024** by [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

## The case

On March 23, DIVD volunteer [Wietse Boonstra](https://www.divd.nl/who-we-are/team/people/wietse-boonstra/) found six zero-day vulnerabilities in IT management software from Kaseya, a Miami-based company. Kaseya VSA (Virtual Systems Administrator) is a remote software management tool that can perform just about any system administration task like installing software, applying patches, adding users, or creating backups. It is a tool mostly used by managed service providers (MSPs) to control the systems of their customers. By outsourcing the system administration, smaller organizations can save costs and focus on growing their business. In theory, MSPs also reduce security risk. But if this kind of software is compromised, many clients are at risk.

## The Impact

On 02-04-2021, the CVE IDs of the vulnerabilities Wietse Boonstra found were requested, without publishing any technical details:

- **CVE-2021-30116**: Unauthenticated credentials leak via client download page, CVSS score 10.
- **CVE-2021-30117**: Semi-authenticated SQL Injection, CVSS score 9.9.
- **CVE-2021-30118**: Unauthenticated Arbitrary File upload with web server rights, leading to arbitrary code execution, CVSS score 9.8.
- **CVE-2021-30119**: Authenticated Reflective XSS possibilities, CVSS score 5.4.
- **CVE-2021-30120**: Two-factor Authentication bypass, CVSS score 9.9.
- **CVE-2021-30121**: Local file inclusion, CVSS score 6.5
- **CVE-2021-30201**: An XML-External Entity Vulnerability, CVSS score 5.4 (this one was found on April 2nd 2021).

## What we did

When Wietse discovered the vulnerabilities on the 2nd day of April, DIVD immediately took action. After realizing the possible impact of the vulnerabilities, DIVD-CSIRT manager Frank Breedijk wrote a detailed writeup, including the Proof of Concept codes of Wietse Boonstra, and a [Nmap](https://nmap.org/) script. The script was then used to immediately start scanning the internet to find vulnerable Kaseya systems open to the internet. 

On the 4th of April, DIVD started identifying possible victims with internet-facing systems. 

On the 6th of April, the first contact was made with Kaseya. DIVD chairman [Victor Gevers](https://www.divd.nl/who-we-are/team/people/victor-gevers-1/) used his contacts to initiate a Coordinated Vulnerability Disclosure process with Kaseya. The same day DIVD sent an email to its trusted information sharing partners. One day later, on the 7th of April, the first Kaseya-DIVD video conference took place.

After the first scan of Kaseya VSA portals on the internet, DIVD found a total of 2,000+ MSPs, each with many customers under their management. In total, we were dealing with potentially millions of victims.

On the 8th of April, a new scan was performed. 1.799 vulnerable systems were found.

On the 14th of April 2021, the CVEs found by Wietse were approved by MITRE. One day later, Kaseya sent a notification that the programmers patched its cloud service for the first set of vulnerabilities.

## Collaboration with Kaseya

Throughout the entire process, Kaseya responded promptly and cooperatively. After DIVD contacted Kaseya, CTO Dan Timpson worked with his team to fix the issues. All vulnerabilities were fixed, and patches were sent to the MSPs: 

- **08-05-2021**: CVE-2021-30117, CVE-2021-30121, and CVE-2021-30201 were patched by Kaseya. 
- **18-05-2021**: Kaseya released version VSA 9.5.5, resolving CVE-2021-30118.
- **26-06-2021**: Kaseya released version ‘9.5.7 on Saas’, resolving CVE-2021-30116 and CVE-2021-30119.

## Ransomware gang Revil 

On July 2nd 2021 – at the start of the 4th of July weekend – ransomware gang [Revil](https://en.wikipedia.org/wiki/REvil) attacked many Kaseya VSA instances. This attack exploited the vulnerabilities, leaking credentials, and gaining authenticated access to a part of the Kaseya customer portal. Kaseya immediately contacted Wietse and Victor to help out and scan and warn all potential victims. Lennaert Oudshoorn, Joost Hendrickx, and Frank Breedijk soon joined in scanning all IP addresses for the presence of Kaseya VSA repeatedly and sending messages to the MSPs to turn off Kaseya VSA immediately. We also shared this list with Kaseya, who did their share in notifying their customers. Because our [fingerprint](https://www.divd.nl/warningemail/) contained a customer ID, Kaseya was able to link the instances to the customer and provided them with concrete information: turn off the Kaseya VSA instance on this IP address. In the first 48 hours, the instances that were reachable from the internet dropped from 2.000+ to 140. By working closely with trusted partners and national CERTs, the number of servers in The Netherlands dropped to zero that Sunday afternoon, the 4th of July. The [CSIRT case](https://csirt.divd.nl/cases/DIVD-2021-00002/) was closed on the 9th of July 2021.

## More information

- [DIVD-2021-00002 - Kaseya VSA](https://csirt.divd.nl/cases/DIVD-2021-00002/)
- [Kaseya: Important Notice August 4th, 2021](https://csirt.divd.nl/cases/DIVD-2021-00002/)
- [CISA-FBI Guidance for MSPs and their Customers Affected by the Kaseya VSA Supply-Chain Ransomware Attack](https://us-cert.cisa.gov/ncas/current-activity/2021/07/04/cisa-fbi-guidance-msps-and-their-customers-affected-kaseya-vsa)
- [Nieuwsuur: Hackers eisen 70 miljoen](https://www.npostart.nl/nieuwsuur/05-07-2021/VPWON_1324266)
- [Vrij Nederland: Nederlandse hackers probeerden aanval met gijzelsoftware te voorkomen](https://www.vn.nl/divd/)
- [NOS: ‘Nederlandse ethische hackers probeerden ransomware-aanval te voorkomen’](https://nos.nl/artikel/2387973-nederlandse-ethische-hackers-probeerden-ransomware-aanval-te-voorkomen)
- [Wired: How REvil Ransomware Took Out Thousands of Business at Once](https://www.wired.com/story/revil-ransomware-supply-chain-technique)
- [Gigazine: Large-scale ransomware attack targeting IT management service “Kaseya” has indirect impact on many companies](https://gigazine.net/news/20210705-revil-ransomeware-gang-msp-supply-chain-attack/)
- [Wall Street Journal: Software Firm at Center of Ransomware Attack Was Warned of Cyber Flaw in April](https://www.wsj.com/articles/software-firm-at-center-of-ransomware-attack-was-warned-of-cyber-flaw-in-april-11625673291?mod=hp_lead_pos4)
- [The Record: Kaseya zero-day involved in ransomware attack, patches coming](https://therecord.media/kaseya-zero-day-involved-in-ransomware-attack-patches-coming/)
