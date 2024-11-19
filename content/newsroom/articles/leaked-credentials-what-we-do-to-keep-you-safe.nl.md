---
title: "Leaked credentials: What we do to keep you safe"
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
**Nov 19, 2024** by [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

### What are leaked credentials?

Leaked credentials refer to compromised usernames and passwords that are inadvertently or maliciously exposed to unauthorized individuals. These credentials are typically obtained through methods such as malware, phishing, or hacking. Once compromised, they are sold, traded, or exchanged on a large scale, making them readily available to cybercriminals.

The problem of leaked credentials is rapidly increasing. These compromised combinations allow cybercriminals to bypass advanced technical defenses. Leaked credentials can be compared to an envelope with an address on it, containing a key to the front door. Since many people reuse their username and password combinations across different accounts, this can lead to widespread breaches. Without multi-factor authentication (MFA) during login processes, a single leaked credential set may grant cybercriminals access to your home, business, or sensitive data.

### Do we leak credentials?

No, of course not! Our mission is to make the digital world safer by reporting vulnerabilities we discover in digital systems to those who can address them. We do this by identifying new zero-day vulnerabilities, scanning for known CVEs, and, thanks to our extensive network and strong connections in the cybersecurity community, acting on tips from our peers when necessary. Occasionally, we receive tips about so-called leaked credentials. One example of such a case is [DIVD-2020-00013](https://csirt.divd.nl/cases/DIVD-2020-00013/), which involved a phishing campaign impersonating the videoconferencing platform Zoom.

{{< callout type="info" >}}

### Our first case of leaked credentials

At the end of November 2021, cybercriminals engaged in a phishing campaign posing as Zoom. If a victim fell for this scam and entered their personal credentials, those credentials got compromised.

While investigating this phishing campaign, a partner organization discovered that the compromised usernames and passwords were stored in improperly secured directories, unintentionally exposing them to public access. This meant that not only the criminals but anyone could access the credentials. The leaked credentials were downloaded from the internet. After connecting and collaborating with our partners, our CSIRT received the Dutch part (386 accounts) of the harvested credentials, so that we could inform potential victims. 

{{< /callout >}}

### How do we get leaked credentials?

Leaked credentials come into our possession through trusted sources, such as tips from partners in the cybersecurity community, or as part of investigations into specific incidents. For example, in phishing campaigns, the infrastructure used by cybercriminals may inadvertently expose compromised credentials, allowing researchers to recover them.

### What do we do with leaked credentials?

Our priority is to ensure the data is handled responsibly, minimizing harm while protecting individual privacy. When a breach involves a small number of accounts (fewer than two million), we [directly inform affected individuals](https://www.divd.nl/warningemail/). 

For larger breaches, we create two types of summaries:

- **Email Domain Summary** – Lists main email domains (like "example.com") and the count of unique email/password combinations for each.
- **URL Domain Summary** – Lists main domains from URLs tied to passwords and the count of unique email addresses for each. Only if the breach data includes website addresses (URLs) tied to the passwords.

We share these summaries with relevant organizations like national CERTs, CSIRTs, or corporate security teams. These teams can identify affected domains and request specific data to inform victims.

To protect privacy, we never send plain-text passwords. All traffic is encrypted, and the passwords are masked before sending. For example, for passwords that contain 10 characters or more, we only send the first two and last two characters and replace all other characters with an asterisk.  To address ethical concerns about sharing PII with governments from countries with poor human rights records, we will only provide data to government organizations in countries that score above 4 on the most recent [Human Rights Index](https://ourworldindata.org/grapher/human-rights-index-vdem).

### How do we keep sharing of leaked credentials safe?

We strictly follow ethical and privacy guidelines to ensure that the sharing of leaked credentials is conducted safely. By encrypting all communications, masking sensitive data, and limiting access to trustworthy organizations, we protect victims’ information while enabling them to take action. If you want to read our Code of Ethics, click [here](https://www.divd.nl/what-we-do/code-of-ethics/).

We are also mindful of human rights concerns. When working with government entities, we ensure that only those in countries with strong human rights records receive access to sensitive data. If you want to read our Code of Conduct, click [here](https://www.divd.nl/what-we-do/code-of-conduct/).

### Are leaked credentials a security vulnerability?

Yes, leaked credentials represent a significant cybersecurity vulnerability. Like unpatched software vulnerabilities (CVEs), leaked credentials can be exploited by criminals. These breaches often lead to unauthorized access, data theft, or other forms of cyberattacks.

As volunteers, we have taken it upon ourselves to inform victims of cybercrime—not only those with vulnerable systems but also those whose credentials have been leaked online. Would you like to read more about how we deal with leaked credentials? Please visit our [CSIRT Page](https://csirt.divd.nl/credentials/). 

### Cases involving leaked credentials

- [DIVD-2024-00022 - Millions of credentials scraped from Telegram](https://csirt.divd.nl/cases/DIVD-2024-00022/)
- [DIVD-2024-00019 - Victim Notification Operation Endgame](https://csirt.divd.nl/cases/DIVD-2024-00019/)
- [DIVD-2021-00015 - Telegram OD](https://csirt.divd.nl/cases/DIVD-2021-00015/)
- [DIVD-2021-00012 - Warehouse Botnet](https://csirt.divd.nl/cases/DIVD-2021-00012/)
- [DIVD-2021-00004 - Gelekte phishing gegevens / Leaked phishing credentials](https://csirt.divd.nl/cases/DIVD-2021-00004/)
- [DIVD-2020-00013 - Gelekte phishing wachtwoorden / Leaked phishing credentials](https://csirt.divd.nl/cases/DIVD-2020-00013/)
