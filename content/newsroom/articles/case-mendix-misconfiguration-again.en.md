---
title: 'CASE: MENDIX MISCONFIGURATION (again)'
date: 2026-03-01T13:37:00+01:00
author: []
url: /mendix.html
aliases:
- /newsroom/articles/case-mendix-misconfiguration-again/
tag: case
intro: DIVD warns of common configuration mistakes in Mendix applications. No vulnerability in Mendix itself. Organizations should immediately review the authorization settings of their own applications.
image: /images/articles/DIVD - Mendix Misconfiguration.jpg
alt_tag_for_image: ''
case: null
faq_enabled: true
faq: null
---

**More than 2,000 publicly reachable systems have been identified worldwide so far. Mendix confirms that this concerns both internal (on-premise) and external applications. We urge every organisation to audit each of their Mendix applications to prevent data leaks.**

This is not a vulnerability in Mendix itself. It concerns the authorization settings of individual Mendix applications, which organisations and development teams are responsible for configuring. We are seeing organisations worldwide that have set this up incorrectly, allowing unauthorised parties to access (highly) sensitive data, in some cases without logging in at all.

So don't only check whether anonymous visitors can access data, but also what becomes visible once someone is logged in. We come across situations where you can register and activate an account, after which almost the entire database is exposed in one go.

The kind of data that can be accessed varies per application. Affected applications have so far been found at governments and municipalities, banks, healthcare institutions, universities of applied sciences, e-learning platforms, car dealerships, and internal platforms worldwide.

In one non-Dutch application, for example, 650,000 identity documents were accessible. In other cases, financial data could be viewed and modified, and personal data, contract information or even medical records were exposed. On one platform handling significant financial transactions, we were able to change the recipient's bank account number to DIVD's own, without anyone noticing in the short term. We would never actually do that, but the possibility is there.

### **Tip of the iceberg**

The investigation is still ongoing, and we expect to identify many more systems in the coming period. Given the potential impact and the number of systems involved, we have decided to publish now so that organisations can start checking and mitigating immediately. When we find an affected system at an organisation, we notify them directly through a CVD procedure and security.txt where available.

We are also working with the NCSC and other (gov)CERTs to reach affected organizations as quickly as possible and limit the damage. To illustrate the scale, Odido was a single organization. This investigation involves more than 2,000 systems.

### **Urgent advice: check your configuration and logging**

Every organisation using Mendix is strongly advised to review the configuration of both internal and external Mendix applications as soon as possible, with particular attention to authorization. For detailed mitigation measures, refer to the advisory Mendix has published based on our research. Organisations can also easily check their own infrastructure using Menscan.io and MendixHunter.

Make sure your organisation has an up-to-date security.txt file on its website, so we can reach you if needed. Finally, adjusting the authorization settings alone is not enough. Also review your logging for unauthorised access.

More information about this case can be found here: https://csirt.divd.nl/cases/DIVD-2026-00003/
