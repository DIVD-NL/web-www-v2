---
title: Have you tried turning the grid off and on again?!
date: 2026-06-06T12:27:00+02:00
author: []
tag: updates
intro: The Dutch energy sector has quietly drifted into cloud dependence. What started as a push for efficiency has become a question of sovereignty.
image: /images/articles/have you tried to turn the power grid off and on again-1.jpg
alt_tag_for_image: ''
case: null
faq_enabled: true
faq: null
---

**The Dutch energy sector has quietly drifted into cloud dependence. What started as a push for efficiency has become a question of sovereignty. A 2026** [**report**](https://energy-innovation.nl/documents/1783/KSD_TopsectorEnergie_Rapport_DigitaleAutonomie_vDEF_digitaal.pdf) **by Energy Innovation NL on digital autonomy in the energy intensive industry confirms the pattern. Core OT systems are, for now, not dependent on non-European cloud infrastructure. But supporting systems such as sensors and monitoring are increasingly based on American cloud infrastructure and the logistics and supply chain supporting OT systems are already completely dependent on it.**

All of this raises the question, particularly in the current time of geopolitical uncertainty: to what degree is this dependence on international cloud infrastructure acceptable? At the same time, it is becoming increasingly difficult to find alternatives. As the report also states, for many systems, on-premise solutions are simply not available anymore, or much more expensive and complicated. One of the key recommendations in the report is therefore collective action. Individual organizations have limited influence, but coordinated demand from an entire sector could push suppliers toward more sovereign and independent solutions.

### The shared single point of failure

Aside from concerns over sovereignty, cloud-dependence also brings concerns with respect to availability with it. While major cloud providers provide high reliability, large outages do occur. Examples include [Microsoft in January 2023](https://www.thousandeyes.com/blog/microsoft-outage-analysis-january-25-2023),[ ](https://blog.cloudflare.com/cloudflare-outage-on-june-21-2022/)[Cloudflare in november 2025](https://www.thousandeyes.com/blog/cloudflare-outage-analysis-november-18-2025) and [AWS in October 2025. ](https://www.thousandeyes.com/blog/aws-outage-analysis-october-20-2025)When many organisations depend on the same platforms, a single outage affects a large portion of the industry, and a wide range of services. In the context of energy intensive systems, this is not just an economic and societal concern.

If energy intensive OT infrastructure becomes dependent on these systems, an outage could also impact the stability of the electrical grid itself. Simultaneous shutdown of these energy intensive processes could cause imbalance in energy consumption and production. In the worst case, this could lead to a cascading shutdown of the grid due to voltage or frequency protection mechanisms.

These concerns are already tangible in the renewable energy sector. Industrial renewable energy production installations are often monitored and controlled remotely through central cloud platforms. Aside from the concerns outlined above, this connectivity also introduces a larger attack surface, increasing the risk of cyber attacks. Centralized control systems create attractive targets for attackers targeting the power grid, potentially even affecting nationwide grid stability. The[ ](https://hub.dragos.com/report/electrum-targeting-polands-electric-sector)[coordinated cyberattack on Poland's electric system on December 29, 2025](https://hub.dragos.com/report/electrum-targeting-polands-electric-sector) shows that it is not a theoretical risk anymore. \*\*This attack showed that distributed energy resources are actively being targeted. \*\*Although this particular attack did ultimately not lead to major disruptions of the power grid, it does show how such an attack will evolve in the future.

### The attack surface starts at home

Energy intensive devices are increasingly moving into residential environments, in the form of solar panels and inverters, heat pumps, home batteries and EV charging stations, as well as central Home Energy Management Systems (HEMS) controlling these devices. Unlike industrial operators collaborating to enforce change in the industry, individual consumers have little leverage over vendors and will often prioritise cost and convenience. As a result, many of these devices rely on vendor managed cloud platforms, frequently hosted on American or Chinese cloud infrastructure.

Our research has repeatedly shown weaknesses in these ecosystems. We have already published s[everal cases](https://csirt.divd.nl/cases/), resulting in 80+ CVEs, a few of which could have been used to take over and shutdown all devices of a manufacturer. This shows that these types of vulnerabilities are not just theoretical, but actually a concern in practice. Thankfully some manufactures are very proactive in resolving cybersecurity issues in their systems, but unfortunately not all manufacturers take their responsibility.

So, what can be done? We will continue investigating the security of devices in the energy sector and disclosing vulnerabilities in collaboration with our partners that are active in this sector such as [ElaadNL](https://elaad.nl/en/), [ENCS](https://encs.eu/) and[ Bureau Veritas.](https://benelux.bureauveritas.com/) \*\*But that is not enough. \*\*

### The safety of the power grid should not rely on volunteers

We believe that a broader shift in awareness and decisionmaking is needed. Both organisations and consumers should consider cloud dependency as a relevant factor when selecting devices and systems. Where feasible, local or on-premise solutions should be preferred. When cloud connectivity is necessary, the choice of provider and architecture should be made deliberately, with attention to resilience, security and digital sovereignty.

The question is not whether cloud technologies should be used in the energy sector, but how they are used and under whose control. Although the industry is trending towards cloud dependence, the risks with this dependence are often not fully understood or addressed. Reducing that risk will require a combination of technical improvements, market pressure, and informed choices at every level, from large industrial operators to individual households.

The grid we depend on is increasingly running on infrastructure we don't control. That is a choice. Not making it deliberately is also a choice.

More information about our energy sector research can be found on: https://www.divd.nl/energie/
