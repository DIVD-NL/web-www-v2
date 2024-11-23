---
title: DIVD responsibly discloses six new zero-day vulnerabilities to vendor
date: 2024-08-12T05:54:00+02:00
author: []
tag: case
intro: DIVD researchers have discovered and, in collaboration with the vendor, disclosed six new zero-day vulnerabilities in Enphase IQ Gateway devices.
image: /images/image (1).png
Alt tag for image: ""
case:
  caseid: DIVD-2024-00011
  closed: false
  link: https://csirt.divd.nl/cases/DIVD-2024-00011/
  lead: Frank Breedijk
  leadlink: https://www.divd.nl/who-we-are/team/people/frank-breedijk/
  researchers:
    - label: Wietse Boonstra
      link: https://www.divd.nl/who-we-are/team/people/wietse-boonstra/
    - label: Hidde Smit
      link: https://www.divd.nl/who-we-are/team/people/hidde-smit/
    - label: Max van der Horst
      link: https://www.divd.nl/who-we-are/team/people/max-van-der-horst/
    - label: Frank Breedijk
      link: https://www.divd.nl/who-we-are/team/people/frank-breedijk/
  researchers_people: []
faq_enabled: false
faq: null
---

**The Hague, Netherlands – Aug 12, 2024**
by [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/) and [Marieke Smits](https://www.divd.nl/who-we-are/team/people/marieke-smits/)

## About the case

DIVD researchers have discovered and, in collaboration with the vendor, disclosed **six new zero-day vulnerabilities** in [Enphase IQ Gateway devices](https://enphase.com/cybersecurity/advisories/ensa-2024-6?_gl=1*ut63dx*_up*MQ..*_ga*MTU3MzcwMTgxMC4xNzIzMzY5ODY2*_ga_0L7F5QSJ7V*MTcyMzM2OTg2NS4xLjAuMTcyMzM2OTg2NS4wLjAuMA..). This investigation was conducted by [Wietse Boonstra](https://www.divd.nl/who-we-are/team/people/wietse-boonstra/) and [Hidde Smit](https://www.divd.nl/who-we-are/team/people/hidde-smit/), both researchers at DIVD, under case [DIVD-2024-00011](https://csirt.divd.nl/DIVD-2024-00011).

Additionally, DIVD has independently assigned CVE IDs (Common Vulnerabilities and Exposure IDs). This highlights DIVD's role as a CVE Numbering Authority (CNA), which distinguishes it from other similar organisations.

The six vulnerabilities were reported to Enphase by the DIVD team, and Enphase has addressed them in their next release, which they are currently rolling out to their customers. DIVD is working with Enphase to identify vulnerable and exposed Envoy IQ Gateways globally to assist with the patching process.

## Impact 

Combining the first three of the six vulnerabilities enables unauthenticated attackers to take full control of the Enphase IQ Gateway and the connected devices. A device is only vulnerable if your Enphase equipment is exposed to an untrusted network, such as the public internet or a home guest network. The manufacturer, Enphase, states that it has about four million systems deployed in more than 150 countries.

## Potential new trends influencing the energy sector

The energy sector is crucial to our daily lives, yet we're seeing a concerning rise in vulnerabilities, especially with the rapid energy transition. As new technologies like smart grids and IoT devices are integrated, the sector's exposure to risks increases. This surge in vulnerabilities likely stems from the fast-paced innovation that often outstrips security measures. Given the sector's importance, it's vital to prioritize cybersecurity to safeguard against these growing threats.

In 2022, DIVD researcher [Jelle Ursem](https://www.divd.nl/who-we-are/team/people/jelle-ursem/) found a GitHub repository that contained [SolarMan's Super Admin account login details](https://csirt.divd.nl/cases/DIVD-2022-00009/). These were visible to anyone who visited the page and could have allowed cybercriminals to manage around 1 million solar panel inverters globally, which thankfully did not happen due to responsible disclosure.

> _“At DIVD, we sincerely hope that preventive actions are taken to address vulnerabilities and weaknesses before any disaster occurs. We already found multiple vulnerabilities at charge points and their backends, which we reported. And according to [a research on the impact of a hack on the charging infrastructure by Berenschot](https://www.agendalaadinfrastructuur.nl/ondersteuning+gemeenten/documenten+en+links/documenten+in+bibliotheek/handlerdownloadfiles.ashx?idnv=2135552) a blackout would cost us at least multiple billions of euros each day in the Netherlands”.  - [Harm van den Brink](https://www.divd.nl/who-we-are/team/people/harm-van-den-brink/) (Researcher Energy)_

On Monday, August 12, 2024, the Dutch Enterprise Agency (Rijksdienst voor Ondernemend Nederland) published a [report](https://topsectorenergie.nl/kennisbank/maatregelen-cyberveiligheid-zonpv/) about an investigation into vulnerabilities in Dutch Solar Power systems, performed by [Secura](https://www.secura.com/) on behalf of the Netherlands Enterprise Agency, at the request of and in collaboration with the Top Sector Energy.

Lastly, on Wednesday, August 7th, another report was published by Bitdefender listing vulnerabilities in solar farms in the U.S.

> _“[Hypponen's law](https://blog.f-secure.com/nl/de-wet-van-hypponen-als-het-smart-het-kwetsbaar/) also seems to apply to the energy transition: If it is "smart" it is vulnerable. So far, every solar power or charging station system that was investigated by DIVD contains some kind of serious vulnerability. DIVD is actively seeking publicity with these cases because in addition to a technical problem, a public concern is now emerging.“_ _-[ Frank Breedijk](https://www.divd.nl/who-we-are/team/people/frank-breedijk/) (CSIRT Manager)._

If you would like to contribute to DIVD’s mission, your donations are more than welcome. You can also [sign up](https://www.divd.nl/contribute/volunteers/) as a volunteer and offer your time and skills here.

Make sure to [follow](https://www.linkedin.com/company/divd-nl/?) us on LinkedIn and [X](https://x.com/DIVDnl) (formerly known as Twitter) and take notice of every important update.

## **Additional sources & links:**

- [Casefile DIVD-2024-00011](https://csirt.divd.nl/DIVD-2024-00011)
- [Security advisory from Enphase](https://enphase.com/cybersecurity/advisories/ensa-2024-6?_gl=1*ut63dx*_up*MQ..*_ga*MTU3MzcwMTgxMC4xNzIzMzY5ODY2*_ga_0L7F5QSJ7V*MTcyMzM2OTg2NS4xLjAuMTcyMzM2OTg2NS4wLjAuMA..)
- [Secura; Scenario’s en maatregelen voor cyberweerbare zonnestroominstallaties](https://topsectorenergie.nl/nl/kennisbank/maatregelen-cyberveiligheid-zonpv/)
  (NL)
- [Bitdefender report](https://www.bitdefender.com/blog/labs/60-hurts-per-second-how-we-got-access-to-enough-solar-power-to-run-the-united-states/)
- [Follow the Money](https://www.ftm.nl/artikelen/hacker-kan-stekker-uit-zonnepanelen-trekken-en-stroomnet-platleggen);[ Nederlandse hacker kon 4 miljoen zonnepaneelsystemen in 150 landen overnemen](https://www.ftm.nl/artikelen/hacker-kan-stekker-uit-zonnepanelen-trekken-en-stroomnet-platleggen)
- [EenVandaag](https://eenvandaag.avrotros.nl/): Demonstration of the vulnerabilities in action, episode is released on the 13th of August at 18:15 CET.
