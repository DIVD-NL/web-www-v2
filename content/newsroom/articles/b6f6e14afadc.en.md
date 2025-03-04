---
title: 'CASE: CITRIX (CVE-2019-19781)'
date: 2020-03-13T00:01:00+01:00
author: []
tag: case
intro: On 17 December 2019 Citrix announced the presence of a critical vulnerability in all versions of their Application Delivery Controller (ADC) product, also known as NetScaler ADC, Citrix Gateway and Netscaler Gateway. Observing these events unfold, our researchers were triggered to take action and not just scan the internet for vulnerabilities, but also warn potential victims. Various media caught up on the activities carried out by DIVD. Both Frank and Matthijs were quoted in national newspapers, magazines, news sites and radio programs.
image: ''
alt: ''
case:
  caseid: DIVD-2020-00001
  closed: true
  link:
    label: DIVD-2020-00001
    url: https://csirt.divd.nl/cases/DIVD-2020-00001/
    invertedColors: false
    external: false
  lead: Frank Breedijk
  leadlink: https://csirt.divd.nl/cases/DIVD-2020-00001/
  researchers:
    - label: Lennaert Oudshoorn
      link: https://www.divd.nl/who-we-are/team/people/lennaert-oudshoorn/
    - label: Victor Gevers
      link: https://www.divd.nl/who-we-are/team/people/victor-gevers-1/
    - label: Matthijs Koot
      link: ''
  researchers_people: []
sections:
  - type: faq
    faq_enabled: false
    title: faq
    opener: ''
    intro: ''
    leftButton: null
    rightButton: null
    faqgroups: []
---
Written on **13 Mar 2020** by [Chris van 't Hof](https://www.divd.nl/who-we-are/team/people/chris-van-t-hof/)

## The case

On 17 December 2019, Citrix [announced](https://support.citrix.com/article/CTX267027) the presence of a critical vulnerability in all versions of their Application Delivery Controller (ADC) product, also known as NetScaler ADC, Citrix Gateway and Netscaler Gateway. These products are commonly used by organisations to allow employees to work remotely. An attacker could remotely exploit the vulnerability to execute arbitrary commands on these servers. Depending on the circumstances, this access could be abused to gain access to data and applications of users and attack the internal network. Cases are known where this vulnerability has been exploited to infect organisations with ransomware.

The vulnerability was discovered by Mikhail Klyuchnikov, Web Application Penetration Tester at Positive Technologies and published in the MITRE list of Common Vulnerabilities and Exposures as CVE-2019-19781. Interestingly enough, Citrix disclosed this vulnerability, while they could not jet deliver a patch. The only thing victims could do is take some [mitigation steps](https://support.citrix.com/article/CTX267679), but these proved to be unsuccessful. Still, a vulnerability does not necessarily mean an attack on the system will succeed. You need an exploit, which wasn’t available yet.

## The impact

Positive Technologies scanned the global internet for vulnerable servers and published a report on 23 December stating that 80,000 companies in 158 countries are at risk. A [world map](https://www.ptsecurity.com/ww-en/about/news/citrix-vulnerability-allows-criminals-to-hack-networks-of-80000-companies/) was also provided showing the number of vulnerable servers for each country. DIVD Chairman Victor Gevers performed a global Nmap scan on 16 December and estimated the number of vulnerable servers to be 128,777. To monitor the expected decrease in vulnerable servers, he performed a fingerprint scan on 28 December. On 9 and 10 January, Matthijs Koot focussed on scanning Dutch-allocated IP ranges validated the findings and made a list of some 600 vulnerable systems.

At that time, CERTs all over the world published warnings about the vulnerability. The National Institute of Standards and Technology set the [impact score](https://nvd.nist.gov/vuln/detail/CVE-2019-19781) on 9.8 out of 10. It became clear that attackers were actively probing for vulnerable servers. Bad Packets, for example, [reported](https://badpackets.net/over-25000-citrix-netscaler-endpoints-vulnerable-to-cve-2019-19781/) “opportunistic mass scanning for vulnerable servers”.

On 11 January both [Project Zero India](https://github.com/projectzeroindia/CVE-2019-19781) and [Trusted Sec](https://github.com/trustedsec/cve-2019-19781) published code on GitHub to demonstrate that exploiting the vulnerability is trivial. To make things worse: once an attacker used the exploit and generated an account on the vulnerable server, the acquired access was sustained even after patching. The only thing left to do for the victims was to monitor and block attacks, or just take the server offline. That is, if one reads the news, performs a scan and knows already one is vulnerable. Governmental CERTs were published but are not allowed or even capable to scan and report as we do.

## What we did

Observing these events unfold, our researchers were triggered to take action and not just scan the internet for vulnerabilities, but also warn potential victims. On 13 January Frank Breedijk announced a Security Hotline that would actively approach all Dutch IP addresses hosting a vulnerable Citrix server. We couldn’t save the whole world, but we could at least do our best in our own country, knowing the Dutch have more experience with helpful hackers. First, Frank wrote a script to automatically send an email to info@, abuse@ and security@, reporting they are vulnerable and what to do.

He also chopped up the list of AS numbers and forwarded the IP addresses to the owners of the network. (A network within the internet is known as an Autonomous System and broadcasts through the Border Gateway Protocol which IP address it contains.) KPN, the largest Dutch telco and owner of many IP addresses, took a large part to the IP list to forward warnings. Through the [NBIP](https://www.nbip.nl/en/), Supporting Services for Internet Providers, smaller providers followed suit.

Various media caught up on the activities carried out by DIVD. Both Frank and Matthijs were quoted in national newspapers, magazines, news sites and radio programs. This triggered Z-CERT, the Computer Emergency Response Team for the Dutch healthcare sector to contact us on 14 January. Frank could immediately identify any hospital or other healthcare institution on the list and forward their IP addresses to Z-CERT so that they could inform the constituents.

On 19 January Citrix started [releasing](https://www.citrix.com/blogs/2020/01/19/vulnerability-update-first-permanent-fixes-available-timeline-accelerated/) the first patches for versions 11.1 and 12.0 of ADC and Gateway and on 24 January those for versions 12.1, 10.5 and 13.0 and their SD-WAN WANOP. Still, that did not immediately solve the problem, as the systems could already be compromised before the patch and remain vulnerable. Our Security Meldpunt, therefore, published some advice on our [blog](https://csirt.divd.nl/2020/01/15/How-to-check-your-Citrix-gateway/) to either do forensic analysis or to just reinstall the system from scratch using a clean image.

In continuing our scans, we could see the number of vulnerable systems steadily decline. (see table) It is difficult to estimate whether this decline is due to our reporting, or that of others. By 5 February we identified that mitigations were still missing on 70 of the systems we initially identified as vulnerable. Assuming these systems would be certainly compromised, we sent them a warning, again. By the beginning of March, only five were left. Some of the new volunteers joining DIVD took the task of calling these organizations. Four were happy we informed them and took immediate action, while just one call ended with an unwilling receptionist…

Meanwhile, analyzing our scanning data more carefully, we encountered yet another problem with the Citrix servers: 450 of the 700 systems that we identified as vulnerable, turned out to use wildcard certificates. Theft of these certificates and their keys is not just a risk for the Citrix environment, but it allows an attacker to intercept TLS-secured connections to any subdomain of the organization without the user being notified. This resulted in a second case for the Security Hotline of DIVD.

24 Jan 2020: Citrix deploys the final patches for [all versions](https://www.citrix.com/blogs/2020/01/24/citrix-releases-final-fixes-for-cve-2019-19781/). Also, an Indicator of Compromise Scanning tool has been released to [test possible exploitation](https://www.citrix.com/blogs/2020/01/22/citrix-and-fireeye-mandiant-share-forensic-tool-for-cve-2019-19781/). On 09 March 2020, the case was closed.

## More information

- [DIVD-2020-00001](https://csirt.divd.nl/cases/DIVD-2020-00001/)
- [Project Zero India](https://github.com/projectzeroindia/CVE-2019-19781)
- [Trusted Sec](https://github.com/trustedsec/cve-2019-19781)
