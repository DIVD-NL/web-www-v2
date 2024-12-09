---
title: "CASE: APACHE LOG4J2"
date: 2022-04-05T12:15:00+02:00
author: []
tag: case
intro: Apache reported a remote code execution vulnerability in Apache Log4j2, the vulnerability in the Log framework of Apache makes it possible to misuse the record log information feature. This makes it possible for an attacker to construct special data request packets through this vulnerable component, and ultimately trigger remote code execution.
image: /images/DIVD-Lof4J casefile.png
Alt tag for image: ""
case:
  caseid: DIVD-2021-00038
  closed: true
  link: https://csirt.divd.nl/cases/DIVD-2021-00038/
  lead: Victor Gevers
  leadlink: https://www.divd.nl/who-we-are/team/people/victor-gevers/
  researchers:
    - label: Victor Pasman
      link: https://www.divd.nl/who-we-are/team/people/victor-pasman/
    - label: Wietse Boonstra
      link: https://www.divd.nl/who-we-are/team/people/wietse-boonstra/
    - label: Lennaert Oudshoorn
      link: https://www.divd.nl/who-we-are/team/people/lennaert-oudshoorn/
    - label: Ralph Horn
      link: https://www.divd.nl/who-we-are/team/people/ralph-horn/
    - label: Ruben Uithol
      link: https://www.divd.nl/who-we-are/team/people/ruben-uithol/
    - label: Matthijs Koot
      link: ""
    - label: Frank Breedijk
      link: https://staging.divd.nl/who-we-are/team/people/frank-breedijk/
  researchers_people: []
faq_enabled: false
faq: null
---
Written on 05 Apr 2022 by [Gerard Janssen](https://staging.divd.nl/who-we-are/team/people/gerard-janssen/), and updated on 09 Dec 2024 by [Serena de Pater](https://staging.divd.nl/who-we-are/team/people/serena-de-pater/)

## The case

On Thursday, December 9th, Twitter user Lunasec (@P0rZ9) wrote a cryptic tweet:

_‘Apache Log4j2 jndi RCE’_

The tweet suggested Lunasec could take control of version 2 of Log4j, java’s logging library. [Log4j ](https://logging.apache.org/log4j/2.x/index.html)is an open-source Java Library and one of the most popular Java logging frameworks. It is a project of the Apache Software Foundation (ASF), a non-profit organization. The same day the tweet appeared, a proof of concept of the exploit was published on GitHub.

## The exploit

The exploit functions in the following way: a vulnerable Log4j server logs a payload that an attacker has crafted. This action can trigger the server, through JNDI (Java Naming and Directory Interface), to request a server controlled by the attacker, allowing for the execution of an additional payload. The attack can be carried out in various ways, such as through HTTP requests, SMS messages, emails, or even by using fields that can be manipulated by users—essentially, anything that ends up being logged. With the right message in the log, an attacker could initiate an unauthenticated Remote Code Execution (RCE).

## The impact

The news caused shockwaves in the information security community. The impact of the vulnerability and the ease with which it could be exploited made the possible impact enormous. Log4j is ubiquitous and present in a whole range of software. In a lot of cases, the developers don’t even know they are using it. ‘It is like sugar: present in your meals, even when you didn’t know,’ said DIVD researcher Frank Breedijk. The vulnerability has been dubbed Log4Shell, to which Apache assigned CVE-2021-44228. It turned out that the vulnerability was already discovered on November 24th, by the Alibaba cloud security team which reported it to Apache.

## What we did

Since December 10th 2022, multiple researchers from DIVD have been working around the clock to search for vulnerable servers. Most spent an average of 16 hours per day, working on methodologies to scan the internet for this vulnerability, and warning users of vulnerable software. DIVD notified more than 3,500 users worldwide who were possibly vulnerable and got a notification email with advice to upgrade to patched version 2.16.0. DIVD cooperated with DTACT in building a scanner and also helped the Dutch NCSC with compiling a list of software vulnerable to log4shell. The case was officially closed on the 5th of April, 2022. 

## What you can do

If you run Apache with version less then 2.0 or Apache and/or log4j2 less then 2.15.0-rc1 upgrade to version 2.17.1 as soon as possible.

## More information

- [Lunasec Advisory](https://www.lunasec.io/docs/blog/log4j-zero-day/)
- [Tweet Lunasec](https://web.archive.org/web/20211211082351/https:/twitter.com/P0rZ9/status/1468949890571337731)
- [DIVD article](https://csirt.divd.nl/2021/12/14/Update-Apache-log4j-remote-code-execution/)
- [DIVD-2021-00038](https://csirt.divd.nl/cases/DIVD-2021-00038/)
- [POC Github](https://github.com/tangxiaofeng7/CVE-2021-44228-Apache-Log4j-Rce)
- [DIVD DTACT log4j-scanner](https://github.com/dtact/divd-2021-00038--log4j-scanner)
- [NCSC list of vulnerable applications](https://github.com/NCSC-NL/log4shell)
