---
title: OPERATION ENDGAME PART 3
date: 2025-11-13T11:13:00+01:00
author: []
tag: case
intro: We are notifying victims of the Rhadamanthys infostealer. Since the datasets contain information on a very large number of individuals, we will not be sending individual notifications. Instead, we enable CERTs, CSIRTs and security teams.
image: /images/articles/Operation Endgame DIVD-2025-00041 - PART 3.jpg
Alt tag for image: ''
case:
  caseid: DIVD-2025-00041
  closed: false
  link:
    label: Frank Breedijk
    url: https://csirt.divd.nl/cases/DIVD-2025-00041/
  lead: Frank Breedijk
  leadlink: ''
  researchers:
    - label: Stan Plasmeijer
      link: ''
    - label: Marieke Rijken
      link: ''
  researchers_people: []
faq_enabled: true
faq:
  title: Operation Endgame 2.0
  opener: ''
  intro: ''
  url: ''
  faqgroups:
    - heading: FAQ Endgame
      faqs:
        - title: Is this scam?
          description: 'It’s great that you’re skeptical. However, this is legit and definitely not a scam. This operation is a collaboration between the Dutch National Police, Europol, Digital Trust Center, NCSC and others. We, Dutch Institute of Vulnerability Disclosure (DIVD), are mentioned in the press releases from the Dutch Police and Europol. The ‘Check je Hack. (translation: Check your Hack) FAQ also mentiones DIVD and shares a link back to this casefile.'
        - title: You are processing my personal data without my consent, is that legal?
          description: Yes it is. Under Dutch law and European privacy regulations, we can process this data based on a so-called "legitimate interest." DIVD is a private foundation that operates under a strict [code of conduct](https://www.divd.nl/code), with the aim to make the digital world safer.
        - title: Are you going to go after the criminals who stole my information?
          description: "No, we are not. That is a matter for law enforcement. As per [article 9 of our code of conduct](https://www.divd.nl/code): \\`We analyze online threats, not threat actors. We are researchers and don't serve the needs of governments or law enforcement.\\`"
        - title: If you "don't serve the needs of governments or law enforcement", why are you cooperating with the Dutch National Police on this case?
          description: |-
            Acting on this data set is directly in line with article 3 of our [code of conduct](https://www.divd.nl/code): \`Analyze databases with leaked credentials and report to the organizations or people who are compromised to take appropriate measures.\`

            We analyze every database we receive, including those from law enforcement. However, we do this independently, without any obligation or intention to share any specific information in return.
alt: ''
url: /operation-endgame-3
---
On November 13th 2025, The Dutch National Police, in cooperation with EuropPol and Eurojust announced they took down botnets in a another episode of [Operation Endgame](https://operation-endgame.com/), the biggest continued anti-botnet operation to date. During this takedown, stolen data has been seized.

As part of this operation, stealer logs containing information on many victims of the targeted malware platforms have been shared with: [DIVD](https://wwww.divd.nl/), [Have I Been Pwned](https://haveibeenpwned.com/), [Spamhaus](https://www.spamhaus.org/resource-hub/malware/operation-endgame-botnets-disrupted-after-international-action/), [Project No More Leaks](https://www.politie.nl/onderwerpen/no-more-leaks.html), [Project Check je Hack](https://www.politie.nl/informatie/checkjehack.html), the (Dutch) [NCSC](https://ncsc.nl/), [CSIRT-DSP](https://csirtdsp.nl/), and [Digital Trust Center](https://www.digitaltrustcenter.nl/).

NCSC, DTC and DIVD are working together to notify victims in the datasets. To support this process, the data has been shared with parties such as [Check Je Hack](https://www.politie.nl/informatie/checkjehack.html), [Have I Been Pwned](https://haveibeenpwned.com/), [No More Leaks](https://www.politie.nl/onderwerpen/no-more-leaks.html), the (Dutch) [NCSC](https://ncsc.nl), [CSIRT-DSP](https://csirtdsp.nl/) and Digital Trust Center.

The datasets we received consist of usernames, (redacted) passwords, and the dates these passwords were last used. It is likely that this information was taken from the built-in password managers of popular web browsers.

### Recommendation

If you received a notification from us, you, members of your organization or your customers had their password stolen or system infected by the [Rhadamanthys](https://malpedia.caad.fkie.fraunhofer.de/details/win.rhadamanthys)  infostealer. Detailed recommendations can be found in our CSIRT Casefile: [https://csirt.divd.nl/cases/DIVD-2025-00041/](https://csirt.divd.nl/cases/DIVD-2025-00041/)

### What you should do

Since the datasets contain data of too many individuals, we will not be sending out individual notifications. Instead we are enabling certs, csirts and security teams to check of data of their users is present in the datasets we received and, if present, to request the details. We have outlined the [full precedure on our credentials page](https://github.com/DIVD-NL/web-csirt-hidden/blob/endgame-2025q4/credentials).

If you want to find out if your organisation was impacted, you can find out as follows:

- Download the Endgame 2025q4 datasets: [Batch 1: Rhadamanthys - 13-11-2025](https://github.com/DIVD-NL/web-csirt-hidden/blob/endgame-2025q4/downloads/DIVD-2025-00041/DIVD-2025-00041-batch1-apexes.tgz)
- Open the files (watch out Excel truncates them due to their size) and look for domains you are responsible for.
- If your domains appear in the dataset, email [**divd-2025-00041@csirt.divd.nl**](mailto:divd-2025-00041@csirt.divd.nl) to request the corresponding data.

**Please note: we will validate your claim and only send you data if your country has a sufficiently high score on the huan rights index.**

### What we are doing

As we receive more information, we will analyse them and publish more apex sets. Make sure you keep an eye on this space and our [CSIRT blog](https://github.com/DIVD-NL/web-csirt-hidden/blob/endgame-2025q4/blog) or [RSS feed](https://csirt.divd.nl/feed.xml).

#### Press releases

[Press release Europol](https://www.europol.europa.eu/media-press/newsroom/news/end-of-game-for-cybercrime-infrastructure-1025-servers-taken-down)
[Press release Dutch Police](https://www.politie.nl/nieuws/2025/november/12/11-opnieuw-criminele-infrastructuur-ontmanteld-in-internationale-ransomware-operatie.html)
