---
title: "CASE: SMARTERMAIL"
date: 2024-01-09T21:29:00+01:00
author: []
tag: case
intro: A DIVD researcher discovered multiple vulnerabilities in SmarterMail. Both vulnerabilities were found within the webmail frontend of SmarterMail.
image: /images/articles/smartermail-vulnerability-divd.png
alt: ""
case:
  caseid: DIVD-2021-00006
  closed: true
  link:
    label: DIVD-2021-00006
    url: https://csirt.divd.nl/cases/DIVD-2021-00006/
    invertedColors: false
    external: true
  lead: Lennaert Oudshoorn
  leadlink: https://www.divd.nl/people/Lennaert%20Oudshoorn/
  researchers:
    - label: Lennaert Oudshoorn
      link: https://www.divd.nl/people/Lennaert%20Oudshoorn/
    - label: Victor Pasman
      link: https://www.divd.nl/who-we-are/team/people/victor-pasman/
    - label: Wietse Boonstra
      link: https://www.divd.nl/who-we-are/team/people/wietse-boonstra/
faq_enabled: false
---

DIVD notified SmarterTools Inc. of the following vulnerabilities:

- [CVE-2021-43977](https://csirt.divd.nl/cves/CVE-2021-43977) - SmarterTools SmarterMail before 100.0.7803 (May 13, 2021) and 16.x allows XSS.
- [CVE-2021-32233](https://csirt.divd.nl/cves/CVE-2021-32233) - SmarterTools SmarterMail before 100.0.7803 (May 13, 2021) and 16.x allows XSS.
- [CVE-2021-32234](https://csirt.divd.nl/cves/CVE-2021-32234) - SmarterTools SmarterMail before 100.0.7803 (May 13, 2021) and 16.x allows Remote Code Execution.

The DIVD warned users with a version of SmarterMail before 100.0.7803 (May 13, 2021) or 16.x, and advised them to upgrade to the latest version as soon as possible.
