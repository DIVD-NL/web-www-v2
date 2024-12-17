---
title: "CASE: ATLASSIAN CONFLUENCE"
date: 2023-12-18T22:00:00+01:00
tag: case
intro: After Veloxity identified a zero-day vulnerability, DIVD, DTC, and NSM cooperated to reach out to notify 18.469 vulnerable ISPs.
image: /images/articles/what-do-you-need-to-know-about-atlassian-confluence-rce-vulnerability-1200x675.webp
alt: ""
case:
  caseid: 2022-00033
  closed: true
  link:
    label: DIVD-2021-00033
    url: https://csirt.divd.nl/cases/DIVD-2022-00033/
    invertedColors: true
    external: false
  lead: Frank Breedijk
  leadlink: https://www.divd.nl/who-we-are/team/people/frank-breedijk/
  researchers:
    - label: Victor Pasman
      link: ""
    - label: Pepijn van der Stap
      link: ""
    - label: Victor Gevers
      link: ""
faq_enabled: false
---

On May 30th – Memorial Day 2022 – researchers of the Washington DC-based cybersecurity firm [Volexity ](https://www.volexity.com/)started an investigation after one of the customers detected suspicious activity on two internet-facing web servers, that were running Atlassian Confluence Server software.

As the Volexity researchers delved deeper into their investigations, they discovered web shells being written to the disk, and upon further analysis, they were able to recreate the exploit and so identified a zero-day vulnerability in the current versions of the Confluence Server and Data Center. This software, used by governments, banks, and critical infrastructure, was under attack. Volexity acted quickly, contacting Atlassian on May 31, 2022, to report the relevant details of their findings. At the time of discovery, this exploit was only used in a very targeted way.

On June 2nd, researchers at the American security company Volexity announced the vulnerability **CVE-2022-26134**. Attackers could use it to access an organization’s infrastructure, create admin users, and steal all internal data from the Confluence instance. Atlassian recommended removing installations from the internet ‘immediately’.

On June 3rd, patches became available. Soon after that, a proof of concept became available, resulting in the spread of malware. Attackers have placed crypto miners, Mirai botnet agents, and web shells on servers. Greynoise.io found 350 unique IP addresses that were scanning for this vulnerability. 349 were marked ‘malicious’, the only benign one was DIVD’s IP address. DIVD volunteers found ‘high-level targets’ like banks, transport companies, telcos, military software companies, and data centers. It was a race against time, again.

On June 4th, the DIVD sent 18.469 notification emails to Internet Service Providers or server owners. Most servers were found in the US and Germany (see pie chart). The Dutch part of the data was shared with NSM (Het Nederlands Security Meldpunt) and the Dutch Digital Trust Center (DTC), which informed affected Dutch companies.

![](https://www.divd.nl/uploads/confluence_graph.png)
