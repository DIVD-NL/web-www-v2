---
title: "CASE: APACHE LOG4J2"
date: 2022-04-05T12:15:00+02:00
author: []
tag: ""
intro: Apache heeft een kwetsbaarheid gemeld voor het op afstand uitvoeren van code in Apache Log4j2. De kwetsbaarheid in het Log-framework van Apache maakt het mogelijk om misbruik te maken van de functie Record Log Information. Dit maakt het mogelijk voor een aanvaller om speciale dataverzoekpakketten samen te stellen via deze kwetsbare component, en uiteindelijk code-uitvoering op afstand te veroorzaken.
image: ""
alt: ""
case: null
faq_enabled: false
faq: null
---

De zaak

Op donderdag 9 december schreef Twitter-gebruiker Lunasec (@P0rZ9) een cryptische tweet:

'Apache Log4j2 jndi RCE'.

De tweet suggereerde dat Lunasec de controle kon overnemen over versie 2 van Log4j, de logbibliotheek van Java. Log4j is een open-source Java-bibliotheek en een van de populairste Java logging frameworks. Het is een project van de Apache Software Foundation (ASF), een non-profitorganisatie. Dezelfde dag dat de tweet verscheen, werd een proof of concept van de exploit gepubliceerd op GitHub.

De exploit

De exploit werkt op de volgende manier: een kwetsbare Log4j-server logt een payload die is gemaakt door een aanvaller. Deze actie kan de server activeren om via JNDI (Java Naming and Directory Interface) een server op te vragen die wordt beheerd door de aanvaller, waardoor een extra payload kan worden uitgevoerd. De aanval kan op verschillende manieren worden uitgevoerd, zoals via HTTP verzoeken, SMS berichten, e-mails of zelfs door gebruik te maken van velden die door gebruikers kunnen worden gemanipuleerd - in feite alles wat uiteindelijk wordt gelogd. Met het juiste bericht in het logboek kan een aanvaller een ongeauthenticeerde Remote Code Execution (RCE) uitvoeren.

De impact

Het nieuws veroorzaakte schokgolven in de informatiebeveiligingsgemeenschap. De impact van de kwetsbaarheid en het gemak waarmee deze kon worden uitgebuit, maakten de mogelijke gevolgen enorm. Log4j is alomtegenwoordig en aanwezig in een hele reeks software. In veel gevallen weten de ontwikkelaars niet eens dat ze het gebruiken. Het is als suiker: aanwezig in je maaltijden, zelfs als je het niet wist,” zei DIVD-onderzoeker Frank Breedijk. De kwetsbaarheid heeft de naam Log4Shell gekregen, waaraan Apache CVE-2021-44228 heeft toegekend. Het bleek dat de kwetsbaarheid al op 24 november was ontdekt door het Alibaba cloud security team, dat het meldde aan Apache.

Wat we deden

Vanaf 10 december werkten meerdere onderzoekers van DIVD de klok rond om naar kwetsbare servers te zoeken. De meesten besteedden gemiddeld 16 uur per dag aan methodologieën om het internet te scannen op deze kwetsbaarheid en gebruikers te waarschuwen voor kwetsbare software. De DIVD waarschuwde wereldwijd meer dan 3.500 gebruikers die mogelijk kwetsbaar waren en een e-mail kregen met het advies om te upgraden naar de gepatchte versie 2.16.0. DIVD werkte samen met DTACT bij het bouwen van een scanner en hielp ook het Nederlandse NCSC met het samenstellen van een lijst met software die kwetsbaar is voor log4shell.

Wat je kunt doen

Als je Apache draait met een versie lager dan 2.0 of Apache en/of log4j2 lager dan 2.15.0-rc1 upgrade dan zo snel mogelijk naar versie 2.17.1.
