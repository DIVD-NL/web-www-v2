---
title: 'CASE: GLOBAL VMWARE ESXI RANSOMWARE ATTACKS'
date: 2023-10-21T23:24:00+02:00
tag: case
intro: In cooperation with DIVD, NCSC-NL and several EU govcerts, 14,986 global vulnerable hosts were found and notified.
image: /images/articles/divd-2023-00007-global-vmware-esxi-ransomware-attack.png
alt: ''
case:
  caseid: DIVD-2023-00007
  closed: true
  link:
    label: DIVD-2023-00007
    url: https://csirt.divd.nl/cases/DIVD-2023-00007/
    invertedColors: false
    external: true
  lead: Ralph Horn
  leadlink: https://www.divd.nl/who-we-are/team/people/ralph-horn/
  researchers:
    - label: Julian Roseboom
      link: https://www.divd.nl/who-we-are/team/people/julian-roseboom/
    - label: Ralph Horn
      link: https://www.divd.nl/who-we-are/team/people/ralph-horn/
    - label: Max van der Horst
      link: https://www.divd.nl/who-we-are/team/people/max-van-der-horst/
sections:
  - type: faq
    faq_enabled: false
    title: faq
    opener: ''
    intro: ''
    leftButton: null
    rightButton: null
    faqgroups: []
image_alt: Picture of the entrance to a mine
faq_enabled: false
---
Written on **25 May 2023** by [Gerard Janssen](https://www.divd.nl/who-we-are/team/people/gerard-janssen/)

## The case

CVE-2021-21974 is a vulnerability in OpenSSL as used in ESXi. OpenSSL is an open standard network protocol that enables dynamic discovery and communication with network services in LANs and WANs. The vulnerability in the protocol is a heap overflow vulnerability. A malicious actor who resides within the same network segment as ESXi and has access to TDP or UDP port 427, may be able to trigger the heap-overflow vulnerability in the OpenSLP service, which could result in remote code execution. The versions of ESXi that are vulnerable to this issue are 7.0 before ESXi70U1c-17325551, 6.7 before ESXi670-202102401-SG, and 6.5 before ESXi650-202102101-SG.

> VMware ESXi is a type 1 hypervisor that is part of VMware’s larger vSphere suite. It provides a platform for virtualizing servers and allows for the running of multiple operating systems on a single physical server. As a bare-metal hypervisor, ESXi is directly installed on the server hardware, providing an efficient way to manage and partition hardware resources like CPU, memory, storage, and networking among multiple virtual machines (VMs). ESXi includes features such as VMotion, which enables live migration of running VMs from one physical server to another with no downtime, and High Availability, which allows for automatic VM restart on other available servers in case of hardware failure. ESXi also provides security features, including VM encryption, and secure boot.

February 3rd CERT-FR communicated about ransomware attacks, related to CVE-2021-21974. The attackers used the vulnerability to launch ransomware attacks. 

## What we did

On February 3rd, DIVD became aware of a global ransomware attack that targeted vulnerable VMware ESXi servers, specifically those susceptible to **CVE-2021-21974.** In response, DIVD conducted a scan of ESXi servers accessible via the internet and notified users, urging them to patch their systems to prevent potential exploitation. 

On February 4th DIVD started scanning. An initial scan revealed the presence of **14,986 vulnerable hosts globally**, with 269 of them located in the Netherlands. The researchers at DIVD notified the owners. Additionally, DIVD also informed the Dutch NCSC, as well as governments in Austria, Finland, France, and Italy.

## More information

- [CVE-2021-21974](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-21974)
- [Bleeping Computer blog](https://www.bleepingcomputer.com/news/security/massive-esxiargs-ransomware-attack-targets-vmware-esxi-servers-worldwide/)
- [OVHcloud blog](https://blog.ovhcloud.com/ransomware-targeting-vmware-esxi/)
- [VMware Build Numbers for ESXi](https://kb.vmware.com/s/article/2143832)
- [Known Indicators of Compromise](https://github.com/fastfire/IoC_Attack_ESXi_Feb_2023)
