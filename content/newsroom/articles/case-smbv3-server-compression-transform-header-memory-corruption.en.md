---
title: "CASE: SMBv3 SERVER COMPRESSION TRANSFORM HEADER MEMORY CORRUPTION"
date: 2021-04-08T00:01:00+02:00
author: []
tag: case
intro: On March 10, 2020, Microsoft published information about a serious vulnerability in Microsoft’s Server Block Protocol version 3. The vulnerability (CVE-2020-0796) is a remote code execution vulnerability that exists in the way that the Microsoft Server Message Block 3.1.1 (SMBv3) protocol handles certain requests.
image: ""
Alt tag for image: ""
case:
  caseid: DIVD-2020-00006
  closed: true
  link: https://csirt.divd.nl/cases/DIVD-2020-00006/
  lead: Sander Spierenburg
  leadlink: ""
  researchers:
    - label: Sander Spierenburg
      link: ""
  researchers_people: []
faq_enabled: false
faq: null
---
Written on **08 Apr 2021** by [Jeroen van de Weerd](https://www.divd.nl/who-we-are/team/people/jeroen-van-de-weerd/), updated on the **12th of Dec 2024** by [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

## The case

On March 10, 2020, Microsoft published information about a serious vulnerability in Microsoft’s Server Block Protocol version 3. The vulnerability ([CVE-2020-0796](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-0796)) is a remote code execution vulnerability that exists in the way that the Microsoft Server Message Block 3.1.1 (SMBv3) protocol handles certain requests. A remote, unauthenticated attacker can exploit this to execute arbitrary code within the context of the application.

## The exploit

To exploit the vulnerability against a server, an unauthenticated attacker could send a specially crafted packet to a targeted SMBv3 server. To exploit the vulnerability against a client, an unauthenticated attacker would need to configure a malicious SMBv3 server and convince a user to connect to it.

## The impact

There were similarities with both Wannacry and NotPetya who both used SMBv1 to spread quickly around the world. SMB allows different users to use common folders, a fertile breeding ground, in terms of lateral movement and client-to-client infection, similar to previous SMB exploits. However, this was no Wannacry 2.0. _‘It was a critical vulnerability but there was a patch for it pretty soon,’_ said DIVD’s case lead Sander Spierenburg.

DIVD volunteers warned that there was a serious threat to office networks using Windows 10. For client systems, it was not possible to disable compression in SMBv3. Opening a link to a rogue SMBv3 server could've been enough to execute unauthorized code on the client. A workaround was disabling compression or blocking TCP port 445.

## What we did

On March 10, the first scan was done on only **Dutch** IP addresses. There were about 200 IP addresses with SMBv3.1.1. running with compression enabled. Notifications were sent by DIVD's partner CleanNetworks.

On March 11, a **worldwide** scan by DIVD showed there were 62.000 IP addresses with SMBv3.1.1. running with compression enabled. The next day there were 32.000 vulnerable IP addresses. It was not clear why. Maybe some big ISPs had already closed port 445 as a temporary workaround.

On March 12, Sophos Labs Offensive Security Team seemed to show a working exploit on the same day Microsoft published a patch. After the patch was released, it was not possible anymore to find vulnerable systems only by scanning, so no additional scans were performed. December 3 2020 this case was closed.

## What you can do

- Close ports that are not necessary to be open to the internet. 
- Use the latest version of SMB. 
- Install all patches from Microsoft as soon as possible. 
- Workaround for servers: Block port 445 or disable compression.

Update 12-3-2020: Microsoft has published an out-of-band patch for this vulnerability. We advise everyone to patch as soon as possible. Information about the patch is available here: [https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-0796](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-0796)

## More information

- [DIVD-2020-00006](https://csirt.divd.nl/cases/DIVD-2020-00006/)
- [CVE-2020-0796](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-0796)
- [Microsoft update guide for CVE-2020-0796](https://msrc.microsoft.com/update-guide/en-US/advisory/CVE-2020-0796)
