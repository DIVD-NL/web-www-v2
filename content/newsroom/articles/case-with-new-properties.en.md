---
title: "CASE: EXPOSED BACNET DEVICES"
date: 2023-12-19T13:42:20.205Z
author: []
tag: case
intro: During the Log4J crisis, researchers uncovered BACnet devices with open
  ports. Upon further investigation, more devices have been found running the
  BACnet protocol.
image: /images/articles/bacnet-exposed-devies-divd.png
Alt tag for image: ""
case:
  caseid: 2022-00005
  link: https://csirt.divd.nl/cases/DIVD-2022-00005/
  lead: Ruben Uithol
  leadlink: ""
  researchers:
    - label: Arthur Miron
      link: ""
    - label: Patrick Hulshof
  closed: true
---

BACnet, or Building Automation and Control Networks, is a widely adopted communication protocol designed for building automation and control systems. Established as an international standard by the American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE), BACnet facilitates communication and interoperability between devices and systems used in areas such as heating, ventilation, air-conditioning (HVAC), lighting, access, and fire detection. It is employed worldwide in commercial, industrial, and residential buildings to ensure effective and efficient building management.

These systems might be at risk of unauthorized access or manipulation by threat actors. Communication can be unencrypted and without proper authentication mechanisms, making it potentially vulnerable to interception or tampering. An exposed BACnet port also increases the attack surface of the Siemens systems, potentially allowing attackers to gain access to other parts of the network and causing further damage.

The unintended exposure of BACnet ports poses potential security threats and may open the door to unauthorized access to essential building infrastructure. In our initial investigation, we used Shodan to explore BACnet-port 47808. The search revealed a total of 29,736 systems were exposed. Following this, we conducted a scan and found 12,572 vulnerable BACnet systems. The respective owners of these systems were promptly notified and provided with strategic advice to restrict access to their BACnet controllers.
