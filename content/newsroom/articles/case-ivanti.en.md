---
title: 'CASE: Attackers exploit zero day vulnerabilities in Ivanti software, and hack the Norwegian governement'
date: 2024-07-03T21:27:00+02:00
tag: case
intro: 'An unknown attacker exploited several zero-day vulnerabilities in two Ivanti services: Ivanti EPMM and Avanti Sentry. The DIVD helped notify users of Ivanti software.'
image: /images/articles/Product%20Warning%20-%20SicommNet%20BASEC%20-%20DIVD.png
alt: ''
case:
  caseid: DIVD-2023-00031
  closed: false
  link:
    label: DIVD-2023-00031
    url: https://csirt.divd.nl/cases/DIVD-2023-00031/
    invertedColors: false
    external: true
  lead: Lennaert Oudshoorn
  leadlink: https://www.divd.nl/who-we-are/team/people/lennaert/
  researchers:
    - label: Alwin Warringa
      link: https://www.divd.nl/who-we-are/team/people/alwin-warringa/
  researchers_people: []
faq_enabled: false
faq:
  title: faq
  opener: ''
  intro: ''
  url: ''
---
On Monday, July 24, 2023, it became clear that the Norwegian government had fallen victim to a cyberattack. The Norwegian Government Security and Service Organisation (DSS) and the Norwegian National Security Authority (NSM) reported that they had been targeted in an attack on an ICT platform used by twelve ministries. And they were not the only victims, as revealed by the story of Tor Bjørsted and Erlend Leiknes, two researchers from the company Memnonic (1).

### Zero-days

Bjørsted and Leiknes could not share the names of other affected entities.

The Norwegian government contacted Memnonic's incident response team. Researchers from Memnonic discovered that an unknown attacker had exploited several zero-day vulnerabilities in two Ivanti services: Ivanti EPMM and Avanti Sentry.

Ivanti is a software company that provides IT management products, including device management, application management, and security tools.

Ivanti Endpoint Manager Mobile (Ivanti EPMM) is a software engine for managing mobile devices that enables IT to set policies for mobile devices, applications, and content. With EPMM, an organization can maintain control over mobile devices and their applications within the organization.

Ivanti Sentry is a gateway that manages and encrypts traffic between a company's mobile devices and backend systems.

Members of the Memnonic incident response team managed to find two vulnerabilities in Ivanti EPMM and notified Ivanti.

On July 23 Ivanti published a patch for the first vulnerability ([CVE 2023-35078](https://nvd.nist.gov/vuln/detail/cve-2023-35078)) and on July 28 a patch for the second vulnerability ([CVE 2023-35081](https://nvd.nist.gov/vuln/detail/CVE-2023-35081)).

CVE-2023-35078 allows an unauthenticated attacker to access the API remotely and, if exploited, enables an unauthorized, remotely accessible (via the internet) actor to potentially access personally identifiable information of users.

CVE-2023-35081 is a path traversal vulnerability, which, when combined with CVE-2023-35078, allows code execution on the EPMM server. It appeared that the attacker used the vulnerabilities in conjunction with a third vulnerability in Ivanti Sentry. It took a bit longer to find this third vulnerability (CVE-2023-38035). Eventually, Bjørsted and Leiknes succeeded, and the entire chain was revealed.

### High-value target

To avoid suspicion, the attacker first hacked a router belonging to ordinary Norwegian citizens, from there, they contacted the vulnerable EPMM server, which was used as a pivot to gain access to the Sentry server, which gives access to, for example, the Microsoft Exchange server. The attacker first hacked routers belonging to ordinary Norwegians, so the attack did not come from a suspicious IP address. The attacker used the first vulnerability to gather information from the Ivanti server and the path traversal vulnerability (CVE-35081) to run code on the EPMM server, allowing the attacker through CVE-38035 to access Ivanti Sentry. The Sentry server is a high-value target for a threat actor. It is the system that, in the case of the Norwegian government, was used to gain access to the Microsoft Exchange server. On August 21, 2023, Ivanti warned its customers that a critical Sentry API bypass vulnerability was being exploited in the wild.

### Vulnerable devices in the Netherlands

On July 25th, DIVD initiated a scan for CVE-2023-35078. An initial query on Shodan revealed 2,900 devices worldwide as vulnerable. A subsequent scan on July 26th identified 1209 vulnerable devices, including some in the Netherlands. The DIVD has notified the owners of these vulnerable systems and is communicating with trusted information-sharing partners for targeted notifications. By July 28th, the number of vulnerable devices had decreased to 933.

On August 26th, DIVD began scanning for CVE-2023-38035 and discovered 3825 Sentry vulnerable devices in 35 countries. The list for the Netherlands was shared with the NCSC-NL. DIVD notified the device owners and various CERTs of these findings. By September 26th, the count of vulnerable devices had been reduced to 500, and the case was closed.
