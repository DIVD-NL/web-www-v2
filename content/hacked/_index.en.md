---
title: We got hacked, here’s everything we know
type: hacked
caseId: DIVD-2026-00014
caseUrl: https://csirt.divd.nl/cases/DIVD-2026-00014/
status: Investigation ongoing
updated: 2026-10-09T20:01:00+02:00

hero:
  intro: On 21 September 2026 an attacker got into our data center through two zero-days in Zammad. We said we'd be open, transparent and honest, even if it sucks. This page collects every update, the CSIRT case data and our reports.

numbers:
  - value: '19'
    unit: min
    label: time to detect
  - value: '9'
    unit: hrs
    label: time to contain
  - value: '19'
    unit: hrs
    label: time to respond

overview:
  title: What happened
  intro: An attacker abused two zero-days in Zammad, our helpdesk software, to get into servers in our data center. We detected it within 19 minutes and blocked access to all systems. We treat this as a worst case until we can prove otherwise.
  cards:
    - title: What do we know?
      text: The attacker got in through two zero-days in Zammad and used AI agents along the way. Part of our data was exfiltrated. The investigation is still running.
    - title: What are we doing?
      text: All data center systems were shut down and rebuilt. We reported the zero-days to Zammad, filed a police report and keep publishing what we find.
    - title: What should you do?
      checklist:
        - Running Zammad? Update to version 7
        - Emailed our CSIRT? Assume the attackers have that correspondence
        - Volunteer? Watch out for social engineering

timeline:
  title: From first access to open case
  intro: The highlights only. The full timeline is on the CSIRT case page.
  # Newest first. `update` links the step to an update number below (optional).
  items:
    - date: 9 Oct 2026
      title: Data overview updated
      text: The data investigation is still running. We update the overview as we learn more.
      update: 7
    - date: 5–7 Oct 2026
      title: Police report and sharing lessons
      text: Police report filed (at 13:37, obviously). First lessons shared with the community.
      update: 6
    - date: 29 Sep – 1 Oct 2026
      title: Case file and data overview public
      text: Partners and those affected informed about the data breach. Case DIVD-2026-00014 published.
      update: 5
    - date: 24–26 Sep 2026
      title: Zero-days reported to Zammad
      text: 'First public statement: we got hacked. Follow-up case DIVD-2026-00015 scans for vulnerable Zammad instances.'
      update: 1
    - date: 22 Sep 2026
      title: Detected and shut down
      text: Malicious activity detected within 19 minutes. Access to all systems in the data center blocked.
    - date: 21 Sep 2026
      title: First access
      text: First access by a malicious actor on DIVD systems, through two unknown vulnerabilities in Zammad.

# Newest first. The first item is shown as the highlighted update.
# url: optional link to the full article in the newsroom
# body: optional markdown, shown in the update pop-up
updates:
  - number: 7
    date: 2026-10-09
    label: (Hopefully) last update
    title: '(Hopefully) last update: collateral damage and a big thank you'
    teaser: Our next planned update is the report, but you never know.
    image: /images/hacked/update-7.jpg
    imageAlt: '(Hopefully) last update: collateral damage and a big thank you for all the support'
    body: |-
      Let’s talk about collateral damage... While the attackers were in our systems, they tried to see if they could get into some of our providers. One of them is BIT B.V. ([bit.nl](https://www.bit.nl)), who host the mailbox we use for our ticketing system. The attackers snooped around in that mailbox, but thankfully BIT was not impacted any further and did not experience any other issues. Big thanks to BIT B.V. ([bit.nl](https://www.bit.nl)) for dropping everything when we called and helping us out, their fast response was really helpful in the first days of our investigation.

      One other provider was affected. What happened on their side is theirs to tell, whenever they’re ready and in their own way. We support them wherever we can.

      Our next planned update is the report, but you never know. The agentic deep dive and the lessons learned follow when they’re ready. All updates so far and the status of the data investigation can be found in our [casefile](https://csirt.divd.nl/cases/DIVD-2026-00014/).

      Thanks to everyone for the overwhelming amount of support, positivity and trust. We hope that our approach and your responses show other organisations that being open about being hacked does not make it worse at all. #nocybershame
  - number: 6
    date: 2026-10-02
    title: Hooray, we can declare ourselves contained!
    body: |-
      Hooray, we are contained! When we shut down our infrastructure on Tuesday 22nd, we hoped that would do the trick. Now we know for sure it did, so we've officially declared ourselves contained.
      That means we can take the pressure off a bit and focus fully on the investigation, figuring out all the details and writing the reports you've all been asking for.

      We're also doing a spontaneous talk at the ONE Conference next Wednesday. You might notice it's a no publicity talk, which might look weird since we've been so transparent about this. We do this on purpose, so we can be even more transparent during the talk. We'll speak to the press afterwards.

      Now we're going to catch up on the 4289658 hours of missed sleep, if the 5788 liters of Club-Mate lets us.

      Next public update is still planned for Friday October 9, or sooner if we have more to share. For questions and press, please reach out to Marieke R. or [communications@divd.nl](mailto:communications@divd.nl).
      Full details in our [casefile](https://csirt.divd.nl/cases/DIVD-2026-00014/).
  - number: 5
    date: 2026-10-01
    title: 'Open and honest, even if it sucks: the data breach'
    body: |-
      This is probably the most painful and awkward part of being hacked, sharing which data got out. But waiting until you have all the details does not make the world, and digital society, any safer. If it was your ass on the line, you'd want to know, right? We said we would be open, transparent and honest even if it sucks. So here we go.

      Through the two zero-days in Zammad, the attackers got in and were able to read and exfiltrate data from other services. We know for sure that user data of our volunteers got out, such as DIVD email addresses and possibly contact details. Whose data and exactly which data is still being investigated, but it does mean it's now easier for someone to pose as a DIVD volunteer.

      The full overview of what is compromised and what is not lives in our [casefile](https://csirt.divd.nl/cases/DIVD-2026-00014/) and we update that page whenever we know more.

      If you get an email or contact request from someone at DIVD that feels slightly off, check with us first at [communications@divd.nl](mailto:communications@divd.nl).
      Our volunteers are our favourite humans in the world and they would never ask you for anything unethical, rude, personal or anything that could harm you. Please be excellent to each other, it has been a tough week for them.

      Our next public update follows on Friday 9 October, or sooner if we have more to share.

      For questions and press please reach out to Marieke R. or [communications@divd.nl](mailto:communications@divd.nl). She is the spokesperson for this incident.
  - number: 4
    date: 2026-09-30
    title: We got hacked through zero-days in Zammad. Update now
    body: |-
      When hackers get hacked, we deal with it in hacker style. While trying to figure out how the attackers got into our own systems, **we found two zero-day vulnerabilities in Zammad.**
      Used together, they allowed the attackers to hijack sessions, run code remotely and escalate privileges from the Zammad user to root, in seconds, due to the agentic part of this hack. From there they were able to access other services and read and exfiltrate data. We urge everyone using any version of Zammad to update to version 7 or take it offline as soon as possible.

      Thanks to proper network segmentation and the actions of our IT and Incident Response Team after detection, we were able to stop the attackers from going deeper into our systems and network. Unfortunately some of the damage was already done. We've found signs of compromise that we're still looking into, and until we can prove otherwise we assume breach. Still, stopping the attackers is a win and in a situation like this you take every win you can get.

      Together with Merlon Security we found two zero-days in Zammad. On their own they are already significant and combined really nasty. We issued CVE-2026-102489 and CVE-2026-102490, are in touch with Zammad and in the meantime we have started notifying owners of vulnerable instances.

      We’re still in full investigation mode, and our next public statement will be on October 1st. For more information about the CVEs and a script to check your logs for abuse, check our [case file](https://csirt.divd.nl/cases/DIVD-2026-00015/).

      TLDR: If you run any version of Zammad, update to version 7 or take it offline as soon as possible.

      For questions and press please reach out to Marieke Rijken or [communications@divd.nl](mailto:communications@divd.nl). She is the spokesperson for this incident.
    meta: CVE-2026-102489 · CVE-2026-102490 · Affects Zammad < 7.2.2
    action:
      label: What you need to do
      text: Running Zammad? Update to version 7 today.
      button: Case DIVD-2026-00015
      url: https://csirt.divd.nl/cases/DIVD-2026-00015/
  - number: 3
    date: 2026-09-28
    title: 'Worst case until proven otherwise: what we know so far'
    body: |-
      In every crisis you work with whatever you can find in the first moments, which is a lot and not much at all. It is easy to assume things in the heat of the moment, while collecting evidence and facts takes time, and if you act on assumptions, confirmation bias kicks in and before you know it things escalate.
      At DIVD we like to think big, but that's not helpful in, let's say, a situation where you got hacked.

      In the past few days we noticed how hard it is to keep signals we've seen apart from facts we can prove. So here's what we know, what we think, and what we don't know yet.

      Previously we stated that we handle this situation as a worst case scenario until we can prove otherwise, and that we would be open, transparent and honest, even if it sucks. That's why we think it is only fair to share some of the scenarios we keep in mind. Our worst case scenario is that a still unknown actor targeted DIVD directly and tried to get a hold of our crown jewels.

      Another scenario is smash and grab, where an attacker just kicks in the door and takes what they can. Thankfully we have no facts so far that point us to our worst case scenario, which unfortunately doesn't mean we can rule it out yet. We can also state that we see no link to any known public threat actors or involvement by a former volunteer.

      By now we have a pretty good idea of how they got in, by exploiting a technical vulnerability. Unfortunately we’re not able to share any details, because it could interfere with the ongoing investigation or cause more victims.
      But what we can say for sure is that it was not Citrix Netscaler. As soon as we can share more, we will scan for & notify other possible victims, like we always do.

      The attack itself was loud and very very messy. We could see the agent working automated, because after every action it decided the next step itself, at the speed of light and sloppy logic or pattern. It also looks like the agent skipped a few steps on its learning curve, because it has done some pretty dumb things, like polluting its own MITM attack with password spraying. More on that later. But what makes this attack pretty cool is that the agent is so overexplaining in its comments that it makes our job in reverse engineering a lot easier.

      This is everything we can share for now. Thanks to our partners, volunteers and the community for their support, kind messages and confidence. And thanks to Nationaal Cyber Security Centrum (NCSC-NL), Merlon Security, NVISO Security for the support.

      Our next public update follows on Thursday October 1st, or sooner if we have more to share.

      For questions and press please reach out to Marieke R. or [communications@divd.nl](mailto:communications@divd.nl). She is the spokesperson for this incident.
  - number: 2
    date: 2026-09-26
    title: How the attacker used AI agents
    body: |-
      Wie jarig is, trakteert! Today is our birthday, and if it's your birthday you bring the treats. So here are two (redacted) screenshots from the logs we found during the investigation of our hack.

      As we stated earlier, the modus operandi points to an agentic AI powered attack. Because what human attacker leaves notes to themself in their scripts, explaining why what they're doing is okay and really not phishing?
      The AI just got a task and keeps justifying its own actions in the code as comments, a human wouldn’t care less. Who has time for that anyway?

      Unfortunately this is all we can share for now without getting in the way of the investigation, but the lessons learned from this attack will follow as soon as we responsibly can. Let's all learn from this one people.

      Next update follows on Monday 28 September, or sooner if we have more to share.

      For questions and press please reach out to Marieke R. or [communications@divd.nl](mailto:communications@divd.nl). She is the spokesperson for this incident.

      *PS. And since when do hackers sleep at night?*
  - number: 1
    date: 2026-09-24
    title: 'When, not if: we are the hackers that got hacked'
    url: /newsroom/articles/when-no-if/
    body: |-
      Security people always say it's not a matter of if, but when you get hacked. It took us (almost) seven years but we can now say that we're the hackers that got hacked. We noticed suspicious activity, investigated, and came to the inevitable conclusion that damn, we got hacked.

      So what do hackers do when they get hacked? Handle it the way we think it should be handled. That is open, transparent and honest, even if it sucks. So far, we’ve been in full incident response mode, blocked access to our infrastructure and started a forensics investigation with the assistance of a third party incident response team.

      This is an attack we have not seen before. Not because it’s our first, but because the modus operandi indicates that this is an agentic AI powered attack. Careful investigation takes time and our investigation is still ongoing. At this moment we can’t rule anything out yet, so we handle this situation as a worst-case-scenario and assume breach until proven otherwise.

      Today we have informed the directly involved parties, reported the incident to the Autoriteit Persoonsgegevens and the National Cyber Security Centre and discussed our options with the police.

      Our priorities at this point are keeping our infrastructure isolated and secure, focusing on the forensics and looking after our volunteers who have worked for a safe digital society for the past years and in the meantime we learn a lot from this type of attack.

      Our next public update follows on Monday 28 September, or sooner if we have more to share.

      For questions and press please reach out to Marieke R. or [communications@divd.nl](mailto:communications@divd.nl). She is the spokesperson for this incident.

zammad:
  title: We got hacked through zero-days in Zammad
  text: The attacker used two previously unknown vulnerabilities in Zammad, the helpdesk software behind our CSIRT. We reported them to Zammad, who fixed them in 7.2 and 7.2.2. Running Zammad? Update as soon as possible.
  button:
    label: Case DIVD-2026-00015
    url: https://csirt.divd.nl/cases/DIVD-2026-00015/
  cves:
    - id: CVE-2026-102489
      text: Session hijack leading to remote code execution, fixed in version 7.2
      url: https://www.cve.org/CVERecord?id=CVE-2026-102489
    - id: CVE-2026-102490
      text: Local privilege escalation to root (DEB/RPM installs), fixed in version 7.2.2
      url: https://www.cve.org/CVERecord?id=CVE-2026-102490

data:
  title: What was in the leaked data?
  text: We are still finding out exactly what the attacker took. Below is the short version per category. The full, up-to-date overview lives on the CSIRT case page.
  note: The CVE/CNA environment runs separately. There is no indication it was accessed.
  button:
    label: Full data overview
    url: https://csirt.divd.nl/DIVD-2026-00014/overview_data_investigation/
  image: /images/hacked/csirt-data.png
  # status: leak | investigating | none
  categories:
    - title: Volunteer data
      subtitle: Office, helpdesk and community tools
      items:
        - { name: Office suite (GSuite), status: leak }
        - { name: IT support & helpdesk, status: leak }
        - { name: Jira & Confluence, status: leak }
        - { name: System data, status: leak }
        - { name: HR, status: none }
        - { name: Source code, status: none }
        - { name: Slack, status: none }
    - title: Core business data
      subtitle: Our CSIRT work and research
      items:
        - { name: CSIRT ticket system, status: leak }
        - { name: Private researcher email, status: leak }
        - { name: Zammad data, status: investigating }
        - { name: Vulnerable system lists & fingerprints, status: investigating }
        - { name: Proofs of concept, status: investigating }
        - { name: Leaked credential dumps, status: investigating }
    - title: Administration & finance
      subtitle: Running the foundation
      items:
        - { name: GSuite administration, status: investigating }
        - { name: Accounting, status: none }
        - { name: Bank, status: none }

reports:
  title: Reports & downloads
  intro: We publish everything we know. The final report follows once the investigation is done.
  # Leave `url` empty for reports that are not published yet ("Expected").
  items:
    - title: Overview of compromised data
      type: Web
      meta: Overview · 9 Oct 2026
      url: https://csirt.divd.nl/DIVD-2026-00014/overview_data_investigation/
    - title: Final report
    - title: Agentic deep dive
    - title: Case study

contact:
  label: Questions, press & media inquiries
  name: Marieke Rijken
  role: Spokesperson DIVD Hack
  image: /images/hacked/spokesperson.jpg
  text: |-
    All questions can be sent to [communications@divd.nl](mailto:communications@divd.nl).
    All data related questions, please send an email to our Data Protection Officer [dpo@divd.nl](mailto:dpo@divd.nl).

faq:
  title: Frequently asked questions
  items:
    - title: Has my data been leaked?
      description: We are still investigating. The data overview on the CSIRT case page shows what we know per data category.
    - title: I run Zammad. What should I do?
      description: Update to Zammad version 7 as soon as possible, or take your instance offline.
    - title: How could this happen to a security organisation?
      description: Security people always say it's not a matter of if, but when you get hacked. It took us (almost) seven years, but we can now say that we're the hackers that got hacked. The attackers got in through two zero-days, previously unknown vulnerabilities, in Zammad, the ticketing system our CSIRT team uses. Proper network segmentation and the actions of our IT and Incident Response Team stopped them from going deeper into our systems and network. We handle it the way we promised to, open, transparent and honest, even if it sucks.
    - title: What do AI agents have to do with it?
      description: The modus operandi indicates an agentic AI powered attack, something we had not seen before. On our birthday we shared two redacted screenshots from the logs. The attacker's scripts contain notes where the agent justifies its own actions, explaining why what it's doing is okay and really not phishing. A human attacker wouldn't bother with that. The agent worked automated and decided each next step itself, at speed. We will share more in an agentic deep dive once it's ready.
    - title: Has a police report been filed?
      description: Yes. We filed a police report (at 13:37, obviously). See the timeline above.
---
