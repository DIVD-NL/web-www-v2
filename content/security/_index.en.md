---
title: Responsible Disclosure
---

## **General**

At DIVD the security of our systems is a top priority. No matter how much effort we put into system security, there might be vulnerabilities present. If you discover a vulnerability, we would like to know about it so we can take steps to address it. We would like to ask you to help us protect our systems.

## **Please do the following**

Submit your findings by using the following URL: <https://app.zerocopter.com/en/rd/f9afbf32-ce59-48ed-96f2-ac4410595aa4>.

## **What we promise**

We will respond to your report within three business days with our evaluation of the report and an expected resolution date. We will keep you informed of the progress towards resolving the problem.

If you have followed the instructions above, we will not take any legal action against you concerning the report.

We will not pass on your personal details to third parties without your permission unless it is necessary to comply with a legal obligation.

In the public information concerning the reported problem, we will give your name as the discoverer of the problem (unless you desire otherwise). Reporting under a pseudonym or anonymously is possible.

We strive to resolve all problems as quickly as possible, and we would like to play an active role in the ultimate publication of the problem after it is resolved.

This Responsible Disclosure policy is based on an example written by Floor Terra and the Responsible Disclosure Guideline of the NCSC.

## **Do’s**

{{< callout type="success" >}}
Report the vulnerability as quickly as is reasonably possible, to minimize the risk of hostile actors finding it and taking advantage of it.
{{< /callout >}}

{{< callout type="success" >}}
Report in a manner that safeguards the confidentiality of the report so that others do not gain access to the information.
{{< /callout >}}

{{< callout type="success" >}}
Provide sufficient information to reproduce the problem, so we will be able to resolve it. Usually, the IP address or the URL of the affected system and a description of the vulnerability will be sufficient. However complex vulnerabilities may require further explanation.
{{< /callout >}}

## **Don’ts**

{{< callout type="error" >}}
Reveal the vulnerability or problem to others until it is resolved.
{{< /callout >}}

{{< callout type="error" >}}
Build your own backdoor in an information system to then use it to demonstrate the vulnerability, because doing so can cause additional damage and create unnecessary security risks.
{{< /callout >}}

{{< callout type="error" >}}
Utilise a vulnerability further than necessary to establish its existence.
{{< /callout >}}

{{< callout type="error" >}}
Copy, modify, or delete data on the system. An alternative for doing so is making a directory listing of the system.
{{< /callout >}}

{{< callout type="error" >}}
Make changes to the system.
{{< /callout >}}

{{< callout type="error" >}}
Repeatedly gain access to the system or share access with others.
{{< /callout >}}

{{< callout type="error" >}}
Use brute force attacks, attacks on physical security, social engineering, distributed denial of service, spam, or applications of third parties to gain access to the system.
{{< /callout >}}

{{< callout type="error" >}}
Access, or attempt to access, any data or information that does not belong to you.
{{< /callout >}}

{{< callout type="error" >}}
Destroy or corrupt, or attempt to destroy or corrupt, any data or information that does not belong to you.
{{< /callout >}}

## **In Scope**

Our following assets are explicitly in scope, if you find a vulnerability in a system you believe belongs to us but is not listed here we will review this on a case-by-case basis.

-     divd.nl
-     divd.academy
-     as50559.com
-     as50559.nl
-     as50559.org
-     haveyoubeenpwned.nl
-     divd.network
-     divdfonds.nl
-     divd.fund
-     csirt.global
-     divd.charity
-     divd.club
-     divd.space
-     divd.community
-     cyber-wear.nl
-     divd.today
-     divd.global
-     divd.family
-     divd.org
-     divd.observer

## **Out of Scope**

Reports for any vulnerabilities listed here will not be accepted.

- Spam, social engineering, and physical intrusion. This includes phishing attempts.
- DoS/DDoS attacks or brute force attacks.
- Vulnerabilities that only impact non-current browsers (older than 3 versions).
- Attacks requiring the usage of shared computers or man-in-the-middle.
- Usage of already compromised accounts or devices.
- Attacks that require unrealistic amounts of user interaction.
- Reports from automated scanners that involve no testing specific to this program.
- Not following industry standards.
- Missing best practices.
- Recently disclosed zero-day vulnerabilities in products where no patch is available or only a recent patch is available.

## **Nonqualifying vulnerabilities**

Reports for any vulnerabilities listed here will not be accepted.

- Self-XSS that cannot be used to exploit other users
- Verbose messages/files/directory listings without disclosing any sensitive information
- CORS misconfiguration on non-sensitive endpoints
- Missing cookie flags
- Missing security headers
- Cross-site Request Forgery with no or low impact
- Presence of autocomplete attribute on web forms
- Reverse tabnabbing
- Bypassing rate limits or the non-existence of rate limits.
- Best practices violations (password complexity, expiration, re-use, etc.)
- Clickjacking on pages with no sensitive actions
- CSV Injection
- Host Header Injection
- Sessions not being invalidated (logout, password reset, ..)
- Session cookie is not invalidated after logout or password reset
- Older browser sessions stay active after password change
- Hyperlink injection/takeovers
- Mixed content type issues
- Cross-domain referer leakage
- Anything related to email spoofing, SPF, DMARC or DKIM
- Content injection
- Username/email enumeration
- E-mail bombing
- HTTP Request smuggling without any proven impact
- Homograph attacks
- XMLRPC enabled
- Banner grabbing / Version disclosure
- Open ports without demonstrating a vulnerability
- Weak SSL configurations and SSL/TLS scan reports
- Not stripping metadata of images
- Disclosing API keys without proven impact
- Same-site scripting
- Subdomain takeover without taking over the subdomain
- Arbitrary file upload without proof of the existence of the uploaded file
- Known vulnerabilities in techniques used without a working Proof of Concept.

{{< callout type="info" >}}
What to do if you find a vulnerability at one of our suppliers or cooperation partners?

Vulnerabilities are best reported to those who can also resolve them. If you encounter any problems, we are, of course, willing to help you.
{{< /callout >}}
