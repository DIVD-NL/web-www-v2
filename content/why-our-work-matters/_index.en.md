---
title: DIVD's work is of great importance, here is why
intro: |-
  DIVD aims to make the digital world safer by reporting vulnerabilities we find in digital systems to the people who can fix them. On this page, we explain why our work matters to society, partners, and other organisations. 

  *"What makes DIVD amazing is the fact that we are in between these attackers and defenders. We attempt to take away attackers' weapons as quickly as possible by making people aware of these weapons. That has a lot of impact!"*
opener: What exactly are (zero-day) security vulnerabilities, and why is it so important to find and report them as soon as possible?
leftblock:
  content: |-
    ## **Security Vulnerability**

    According to [NIST](https://csrc.nist.gov/glossary/term/vulnerability#:~:text=Definitions%3A,triggered%20by%20a%20threat%20source.) (National Institute of Standards and Technology), a vulnerability is a “w*eakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source.*”

    Essentially, a security vulnerability is a weakness or flaw in a computer system, network, or software that can be exploited by cybercriminals to gain unauthorized access to systems and/or cause damage. Common examples of vulnerabilities are misconfigurations, unpatched software or firmware, the use of weak or default passwords, and the use of old protocols and standards.

    When cybercriminals discover a vulnerability on a system,  they will try to create a way to *exploit* it, to achieve actions on objectives. An *exploit* is basically a malicious piece of code or script that can be used to take advantage of a system's vulnerability.

    **The Consequences of Unpatched Vulnerabilities**

    When cybercriminals are able to exploit a vulnerability in a system to gain access to critical systems, they can potentially view, modify, delete and/or extract sensitive data. As soon as an intruder gets in, secrets are no longer secret. If an organisation doesn't find and mitigate vulnerabilities in time, the consequences can be severe, ranging from financial losses to irreparable damage to the organisation's reputation.

    Cybercriminals often prefer to create exploits for big, well-known issues because they can use those exploits to create powerful, cheap attacks that work for many years and on many systems.
  image: ""
  Alt tag for image: ""
  learnmore: /dictionary/
  alt: null
rightblock:
  content: |-
    ## **Zero-day Vulnerability**

    A zero-day (0-day) vulnerability is a specific type of security flaw. It defines a vulnerability that is *unknown* to the software developers and the security community at the time it is discovered by hackers. Against popular belief, this does not necessarily make a zero-day vulnerability a 'critical'  or 'highly exploitable' vulnerability. It only means that there is no fix released for it yet.

    DIVD actively searches for vulnerable systems online. A discovered vulnerability is directly reported to the vendor. The vendor or partner agrees with DIVD to keep the software vulnerability a secret, so that the vulnerability can remain secret. This gives the vendor a little time to create and release a security update (a so-called 'patch' or 'hotfix') to fix the vulnerability. Thus, the vendor is aware of the issue and provides a fix.

    However, there are times when DIVD researchers uncover a vulnerability that has *never* been discovered before. For example, this could be a flaw in core components of operating systems (such as Windows, macOS, or Linux) or a vulnerability in a widely used network protocol that has previously gone unnoticed.

    **Patch or Exploit: Who Wins?**

    Since this vulnerability is *unknown*, no one is adequately protected against it. The vendor needs to disclose information about the vulnerability to it's partners, but in doing so, they also unintentionally but unavoidably inform cybercriminals about the occurrence of a weakness in their software. This is when a race against the clock begins. Who works faster, the software vendor crafting and distributing a patch, or the cybercriminals crafting and deploying an exploit? 

    *Eternal Blue is a very infamous zero-day exploit that was originally was developed by the NSA and later leaked by a hacking group. It was used in the [WannaCry ransomware attack](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack), which affected hundreds of thousands of computers worldwide.*
  image: ""
  Alt tag for image: ""
  learnmore: ""
  alt: null
contenttitle: "## Why our work matters"
casehighlight:
  title: "## Without DIVD ..."
  content: |-
    A good example of what the world would look like without DIVD's efforts, is [the SolarMan case](https://csirt.divd.nl/cases/DIVD-2022-00009/). In 2022, a DIVD researcher found a GitHub repository containing the username and password for SolarMan’s Super Admin account. These credentials were visible to anyone who would visit the GitHub page, meaning that anyone in the world with internet access could could have gained unauthorized access to nearly 1,000,000 installations!

    > *The 1,000,000 installations refer to solar power plants (installations) managed through the SolarMan platform. These installations have a total power output of over 10GwP (gigawatts peak). Most of these systems are located in China and Australia, with a significant number of over 40,000 in the Netherlands.* *Reference: [csirt.divd.nl](https://csirt.divd.nl/cases/DIVD-2022-00009/ "csirt.divd.nl").*

    DIVD contacted the company responsible for the repository. Eventually, the exposed password was reset and the repository was deleted. But what if the vulnerability hadn't been discovered and the credentials remained publicly available?* 

    **Cybercriminals could theoretically have been able to gain access to the SolarMan Super Admin account**, 
    potentially controlling nearly 1,000,000 installations. They could theoretically have had the ability to alter system settings, disrupt services, or disable installations, causing widespread operational issues.

    **Sensitive information could potentially have been exposed**, 
    leading to data breaches.

    **Compromised systems could theoretically have been used to deploy malware**,
    resulting in further security incidents and potential damage to connected networks. 

    **And last but not least, the company’s reputation could have been severely damaged**, 
    resulting in a loss of trust from customers and partners.

    **Note that it is very complex to summarize any DIVD case, or make accurate and precise assumptions about which risks were specifically mitigated. If you have any questions, please read about our case on the CSIRT page [contact DIVD](https://www.divd.nl/contact/).*
main:
  title: More text here
---
✨  DIVD focuses on identifying and responsibly disclosing vulnerabilities in software and systems before they can be exploited by cybercriminals. While typical vulnerability scans only inform a victim if they have a system containing a vulnerability, DIVD researchers also check if the vulnerability is actually exploitable (in a passive, non-intrusive manner and in [compliance](https://www.divd.nl/what-we-do/code-of-conduct/) with laws and regulations). When you get a notification email from DIVD, there is less chance of it being a so-called false positive. This is where DIVD goes the extra mile and what makes DIVD stand out above similar organisations. 

✨ DIVD scans for both regular security vulnerabilities *and* zero-day vulnerabilities. DIVD requests [the assignment of new unique identifiers (CVEs)](https://csirt.divd.nl/cna/) when new (previously unknown) vulnerabilities are identified.

✨ DIVD is known for its transparency in reporting vulnerabilities and the steps taken to address them. This openness builds trust within the cybersecurity community and with the public.

✨ Unlike many cybersecurity organizations, DIVD is a non-profit entity.

✨ DIVD actively engages with the cybersecurity community, including researchers, ethical hackers, and other stakeholders, to share knowledge and improve collective security efforts.
