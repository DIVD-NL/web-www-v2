---
title: Our work is of great importance, here is why
intro: |-
  This page explains why our work matters to society, partners, and other organisations. 

  *"What makes DIVD amazing is the fact that we are in between these attackers and defenders. We attempt to take away attackers' weapons as quickly as possible by making people aware of these weapons. That has a lot of impact!" -  Max van der Horst (Researcher CSIRT)*
opener: "## What exactly are (zero-day) security vulnerabilities?"
leftblock:
  content: |-
    ## **Security Vulnerability**

    According to [NIST](https://csrc.nist.gov/glossary/term/vulnerability#:~:text=Definitions%3A,triggered%20by%20a%20threat%20source.) (National Institute of Standards and Technology), a vulnerability is a “w*eakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source.*”

    Essentially, a security vulnerability is a weakness or flaw in a computer system, network, or software that can be exploited by cybercriminals to gain unauthorized access to systems and/or cause damage. Common examples of vulnerabilities are misconfigurations, unpatched software or firmware, the use of weak or default passwords, and the use of old protocols and standards.

    When cybercriminals discover a vulnerability in a system,  they will try to create a way to exploit it, to achieve actions on objectives. An *[exploit](https://www.divd.nl/dictionary/)* is a malicious piece of code or script that can be used to take advantage of a system's vulnerability.

    When cybercriminals can exploit a vulnerability in a system to gain access to critical systems, they can potentially view, modify, delete, and/or extract sensitive data. As soon as an intruder gets in, secrets are no longer secret. If an organisation doesn't find and mitigate vulnerabilities in time, the consequences can be severe, ranging from financial losses to irreparable damage to the organisation's reputation.

    Cybercriminals often prefer to create exploits for big, well-known issues because they can use those exploits to create powerful, cheap attacks that have worked for many years and on many systems.
  image: ""
  Alt tag for image: ""
  learnmore: /dictionary/
  alt: null
rightblock:
  content: |-
    ## **Zero-day Vulnerability**

    A zero-day (0-day) vulnerability is a specific type of security flaw. It defines a vulnerability that is *unknown* to the software developers and the security community at the time it is discovered by hackers. Against popular belief, this does not necessarily make a zero-day vulnerability a 'critical'  or 'highly exploitable' vulnerability. It only means that there is no fix released for it yet.

    DIVD actively searches for vulnerable systems online. A discovered vulnerability is directly reported to the vendor. The vendor or partner agrees with DIVD to keep the software vulnerability a secret so that the vulnerability can remain secret. This gives the vendor a little time to create and release a security update (a so-called 'patch' or 'hotfix') to fix the vulnerability. Thus, the vendor is aware of the issue and provides a fix.

    However, there are times when DIVD researchers uncover a vulnerability that has *never* been discovered before. For example, this could be a flaw in core components of operating systems (such as Windows, macOS, or Linux) or a vulnerability in a widely used network protocol that has previously gone unnoticed.

    Since this vulnerability is *unknown*, no one is adequately protected against it. The vendor needs to disclose information about the vulnerability to its partners, but in doing so, they also unintentionally but unavoidably inform cybercriminals about the occurrence of a weakness in their software. This is when a race against the clock begins. Who works faster, the software vendor crafting and distributing a patch, or the cybercriminals crafting and deploying an exploit?
  image: ""
  Alt tag for image: ""
  learnmore: ""
  alt: null
contenttitle: "## Why our work matters"
casehighlight:
  title: "# Without DIVD …"
  content: |-
    A good example of what the world would look like without DIVD's efforts is[ the SolarMan case](https://csirt.divd.nl/cases/DIVD-2022-00009/). In 2022, a DIVD researcher found a GitHub repository containing the username and password for SolarMan’s Super Admin account. These credentials were visible to anyone who would visit the GitHub page, meaning that anyone in the world with internet access could have gained unauthorized access to nearly 1,000,000 installations!

    > *The 1,000,000 installations refer to solar power plants (installations) managed through the SolarMan platform. These installations have a total power output of over 10GwP (gigawatts peak). Most of these systems are located in China and Australia, with a significant number of over 40,000 in the Netherlands.* *Reference: [csirt.divd.nl](https://csirt.divd.nl/cases/DIVD-2022-00009/).*

    DIVD contacted the company responsible for the repository. Eventually, the exposed password was reset and the repository was deleted. But what if the vulnerability hadn't been discovered and the credentials remained publicly available?*

    **Cybercriminals could theoretically have been able to gain access to the SolarMan Super Admin account**, potentially controlling nearly 1,000,000 installations. They could theoretically have had the ability to alter system settings, disrupt services, or disable installations, causing widespread operational issues.

    **Sensitive information could potentially have been exposed**, leading to data breaches.

    **Compromised systems could theoretically have been used to deploy malware**, resulting in further security incidents and potential damage to connected networks.

    **The company’s reputation could have been severely damaged**, resulting in a loss of trust from customers and partners.

    **Want to know more?**

    - [Video recording of the presentation at Hackers Camp MCH 2022](https://media.ccc.de/v/mch2022-350-iot-international-outage-technology-disclosure-of-divd-2022-00009-)
    - [Official question of Dutch representatives Queeny Rajkowski and Silvio Erkens to ministers Yesilgöz-Zegeriu and Jetten](https://www.tweedekamer.nl/kamerstukken/kamervragen/detail?id=2022D33896&did=2022D33896)
    - [Official answers of ministers Yesilgöz-Zegeriu and Jetten to the question of Dutch representatives Queeny Rajkowski and Silvio Erkens](https://www.tweedekamer.nl/kamerstukken/kamervragen/detail?id=2022Z15333&did=2022D31877)

    **Note that it is very complex to summarize any DIVD case, or make accurate and precise assumptions about which risks were specifically mitigated. If you have any questions, please read about our case on the CSIRT page and [contact DIVD](https://www.divd.nl/contact/).*
main:
  title: More text here
sections:
  - title: asdf
    intro: asdf
    type: intro
  - title: asdf2
    intro: asdf2
    type: intro
  - title: asdf3
    intro: asdf3
    type: intro
---
**DIVD scans the entire internet.** 

Traditional methods, like penetration tests, often focus on a specific scope, usually limited to an organization's IP addresses or URLs.  In contrast, DIVD seeks to identify all systems with a particular vulnerability, often discovering issues in systems that organizations were unaware they had.

**DIVD can take this a step further.** 

Because we work for the common good and adhere to guidelines for ethical hacking, we can extend our reach beyond the limits imposed on governments or commercial security companies. This allows us to determine with greater certainty whether a system is vulnerable. An email notification from DIVD almost always indicates a vulnerability that needs immediate attention.

**DIVD scans for both regular security vulnerabilities *and* zero-day vulnerabilities.** 

DIVD independently [assigns new unique identifiers (CVEs)](https://csirt.divd.nl/cna/) when new (previously unknown) vulnerabilities are identified by its researchers.

**DIVD is known for its transparency & collaboration.**

DIVD is recognized for its transparent approach in reporting vulnerabilities and the actions taken to resolve them. This level of openness fosters trust within both the cybersecurity community and the general public. We promote ethical hacking and responsible disclosure while striving to tackle broader cybersecurity challenges. Unlike many cybersecurity organizations, DIVD is a non-profit entity, run by volunteers.

DIVD actively engages with the cybersecurity community, including researchers, ethical hackers, and other stakeholders, to share knowledge and improve collective security efforts.

