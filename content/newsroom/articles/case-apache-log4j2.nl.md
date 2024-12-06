---
title: "CASE: APACHE LOG4J2"
date: ""
author: []
tag: ""
intro: Apache reported a remote code execution vulnerability in Apache Log4j2, the vulnerability in the Log framework of Apache makes it possible to misuse the record log information feature. This makes it possible for an attacker to construct special data request packets through this vulnerable component, and ultimately trigger remote code execution.
image: ""
Alt tag for image: ""
case: null
faq_enabled: false
faq: null
---
## The case

On Thursday, December 9th, Twitter user Lunasec (@P0rZ9) wrote a cryptic tweet:

_‘Apache Log4j2 jndi RCE’_

The tweet suggested Lunasec could take control of version 2 of Log4j, java’s logging library. Log4j is an open-source Java Library and one of the most popular Java logging frameworks. It is a project of the Apache Software Foundation (ASF), a non-profit organization. The same day that the tweet appeared, a proof of concept of the exploit was published on Github.

## The exploit

The exploit works as follows. A vulnerable Log4j server will log a payload, constructed by an attacker. This can trigger the server, via JNDI (Java Naming and Directory Interface), to make a request to a server controlled by the attacker, to execute another payload. The attack could be executed in many different ways, such as HTTP requests, SMS messages, emails, and by using user-controlled fields, basically anything that ends up in a log. With the right message in the log, an attacker could trigger an unauthenticated Remote Code Execution (RCE).

## The impact

The news caused shockwaves in the information security community. The impact of the vulnerability and the ease with which it could be exploited made the possible impact enormous. Log4j is ubiquitous and present in a whole range of software. In a lot of cases, the developers don’t even know they are using it. ‘It is like sugar: present in your meals, even when you didn’t know,’ said DIVD researcher Frank Breedijk. The vulnerability has been dubbed Log4Shell, to which Apache assigned CVE-2021-44228. It turned out to the vulnerability was already discovered on November 24th, by the Alibaba cloud security team which reported it to Apache.

## What we did

From December 10th, multiple researchers from DIVD worked around the clock to search for vulnerable servers. Most spent an average of 16 hours per day, working on methodologies to scan the internet for this vulnerability, and warning users of vulnerable software. The DIVD notified more than 3,500 users worldwide that were possibly vulnerable and got a notification email with advice to upgrade to patched version 2.16.0. DIVD cooperated with DTACT in building a scanner, and also helped the Dutch NCSC with compiling a list of software vulnerable to log4shell.

## What you can do

If you run Apache with version less then 2.0 or Apache and/or log4j2 less then 2.15.0-rc1 upgrade to version 2.17.1 as soon as possible.

## More information

- [Lunasec Advisory](https://www.lunasec.io/docs/blog/log4j-zero-day/)
- [DIVD article](https://csirt.divd.nl/2021/12/14/Update-Apache-log4j-remote-code-execution/)
