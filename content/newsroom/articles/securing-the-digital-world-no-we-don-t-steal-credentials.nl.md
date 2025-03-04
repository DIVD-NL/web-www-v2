---
title: "Securing the Digital World: No, We Don’t Steal Credentials"
date: ""
author: []
tag: ""
intro: On our website, you might have found a page called ‘how we deal with leaked credentials’ or spotted the case ‘DIVD-2020-00013 Leaked phishing credentials’. Does this mean that our volunteers send out phishing emails and leak the obtained credentials of innocent victims? Of course not!
image: ""
Alt tag for image: ""
case: null
faq_enabled: false
faq: null
---
## Are leaked credentials a security vulnerability?

Yes, leaked credentials can be considered an example of a cybersecurity vulnerability. Both leaked credentials and vulnerabilities (CVE’s) can be exploited by cybercriminals. A leaked credential set often leads to security breaches or attacks, just as an unpatched vulnerability can be exploited to gain unauthorized access or cause damage.

## Do we steal credentials?

No, we don’t steal credentials. Our goal is to make the digital world safer by reporting vulnerabilities we discover in digital systems to those who can address them. We do this by identifying new zero-day vulnerabilities, scanning for known CVEs, and, thanks to our extensive network and strong connections in the cybersecurity community, acting on tips from our peers when necessary. Occasionally, we receive tips about so-called leaked credentials. One example of such a case is [DIVD-2020-00013](https://csirt.divd.nl/cases/DIVD-2020-00013/). 

## Our first case of leaked credentials

At the end of November 2021, cybercriminals were involved in a phishing campaign where they impersonated the videoconferencing platform Zoom. If a victim fell for this scam and entered their personal credentials, those credentials got stolen by criminals. 

While researching this phishing campaign, a researcher from a partner organisation discovered that the phishing infrastructure accidentally leaked the illegally captured usernames and passwords, because they were stored in improperly secured directories. This way, not only the cybercriminals had access to the stolen credentials, but they were accessible to the public as well. The leaked credentials were downloaded from the internet. After connecting and collaborating with our partners, our CSIRT received the Dutch part (386 credentials) of the harvested credentials, so that we could inform potential victims. 

## What do we do with stolen and leaked credentials?

When a breach involves a relatively small number of accounts (approximately fewer than two million email addresses), we inform the affected individuals [directly](https://www.divd.nl/warningemail/). For larger breaches, we create two types of data summaries or ‘extracts’.

- Email Domain Summary – Lists main email domains (like "example.com") and the count of unique email/password combinations for each.
- URL Domain Summary – Lists main domains from URLs tied to passwords and the count of unique email addresses for each. Only if the breach data includes website addresses (URLs) tied to the passwords.

We then share these summaries with relevant organizations, such as national CERTs (Computer Emergency Response Teams), CSIRTs (Computer Security Incident Response Teams), and security teams. These organizations can identify the domains relevant to them and request specific data for those domains, enabling them to inform the affected victims.

Needless to say, we don’t send leaked passwords in plain text to our partners. All traffic is encrypted, and the passwords are masked before sending. For example, for passwords that contain 10 characters or more, we only send the first two and last two characters and replace all other characters with an asterisk. To address ethical concerns about sharing PII with governments from countries with poor human rights records, we will only provide data to government organizations in countries that score above 4 on the most recent [Human Rights Index](https://ourworldindata.org/grapher/human-rights-index-vdem).

## Why our work matters

The problem of leaked credentials is rapidly increasing. Usernames and passwords are often stolen through methods such as malware, phishing, or hacking. Once obtained, these stolen credentials are sold, traded, and exchanged on a large scale. Cybercriminals who acquire a set of usernames and passwords no longer need advanced technical skills to infiltrate a company or an individual's account. Stolen credentials can be compared to an envelope with an address on it, inside of which is a key to the front door. And unlike physical keys, passwords often work on multiple doors because people have the habit of reusing username and password combinations. If multi-factor authentication (MFA) is not enabled during the login process, this is all the criminals need to access your home, your company, and your sensitive data.

As volunteers, we have taken it upon ourselves to inform victims of cybercrime—not only those with vulnerable systems but also those whose credentials have been leaked online. Would you like to read more about how we deal with leaked credentials? Please visit our [CSIRT Page](https://csirt.divd.nl/credentials/). 

## Cases involving stolen credentials

- [DIVD-2024-00022 - Millions of credentials scraped from Telegram](https://csirt.divd.nl/cases/DIVD-2024-00022/)
- [DIVD-2024-00019 - Victim Notification Operation Endgame](https://csirt.divd.nl/cases/DIVD-2024-00019/)
- [DIVD-2021-00015 - Telegram OD](https://csirt.divd.nl/cases/DIVD-2021-00015/)
- [DIVD-2021-00012 - Warehouse Botnet](https://csirt.divd.nl/cases/DIVD-2021-00012/)
- [DIVD-2021-00004 - Gelekte phishing gegevens / Leaked phishing credentials](https://csirt.divd.nl/cases/DIVD-2021-00004/)
- [DIVD-2020-00013 - Gelekte phishing wachtwoorden / Leaked phishing credentials](https://csirt.divd.nl/cases/DIVD-2020-00013/)
