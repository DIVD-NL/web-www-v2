---
title: "CASE: LEAKED PHISHING CREDENTIALS (ZOOM)"
date: 2021-07-01T00:01:00+02:00
author: []
tag: case
intro: At the end of November 2020, criminals conducted a phishing campaign that mimicked Zoom message invites and notifications about mail quarantine. On January 1, 2021, email notifications were sent to the victims of this phishing scheme. In total, 370 emails were distributed.
image: /images/DIVD-casefile.png
Alt tag for image: ""
case:
  caseid: DIVD-2020-00013
  closed: true
  link: https://csirt.divd.nl/cases/DIVD-2020-00013/
  lead: Frank Breedijk
  leadlink: https://www.divd.nl/who-we-are/team/people/frank-breedijk/
  researchers:
    - label: Bauke Gehem (external)
      link: external
  researchers_people: []
faq_enabled: false
faq: null
---
Written on **01 Jul 2021** by [Joris van de Vis](https://www.divd.nl/who-we-are/team/people/joris-van-de-vis/), updated on **09 Dec 2024** by [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

## The case

In late November 2020, criminals launched a phishing campaign that mimicked Zoom message invitations and notifications about mail quarantine. This campaign was reported on Twitter by TheAnalyst.

## The impact

During the investigation of this particular phishing campaign, Bauke Gehem from Summa College discovered that the criminals' phishing infrastructure was inadequately secured. This lack of security led to the exposure of captured usernames and passwords through unsecured directories. As a result, DIVD CSIRT, in collaboration with a partner CERT, received the Dutch portion of the harvested credentials to notify potential victims.

## What we did

After an internal discussion, we concluded that the victims of the attack should be informed. We began processing the data internally to prepare for notifying the victims and providing them with additional guidance on how to proceed. Since we received the Dutch portion of the data, we decided to write the emails in both Dutch and English. On January 1, 2021, we sent email notifications to the victims of the phishing campaign. A total of 370 emails were dispatched.

Since there was no new information and the victims had been informed, the case was closed after the emails were sent. The researchers involved deleted their local data, and only the report writing remained to be completed. This process was finalized in June 2021.

## More information

- [DIVD-2020-00013](https://csirt.divd.nl/cases/DIVD-2020-00013/)
- [https://twitter.com/ffforward/status/1331960948245008388](https://twitter.com/ffforward/status/1331960948245008388)
- [https://twitter.com/ffforward/status/1332073057058508800](https://twitter.com/ffforward/status/1332073057058508800)
