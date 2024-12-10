---
title: How to secure your Blob storage containers
date: 2024-12-10T13:48:00+01:00
author: []
tag: case
intro: Services such as Amazon S3 Buckets and Azure Blob Storage offer the convenience of storing data which is accessible by various users and services simultaneously. However,  misconfiguration of any of these storage services can expose your organization to several risks and consequences.
image: /images/OIG2.jpeg
Alt tag for image: ""
case: null
faq_enabled: false
faq: null
---
By [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

> In October 2022, a [misconfiguration in Microsoft's Azure Blob Storage](https://www.spiceworks.com/it-security/cloud-security/news/microsoft-azure-cloud-misconfiguration/) service exposed the personal data of more than 548,000 users, including product orders/offers, project details and PII (Personally Identifiable Information) data. The breach was due to the misconfuguration of only one misconfigured server. According to SOCRadar’s assessment, this exposed server stored 2.4 terabytes of data from 65,000 companies based in 111 countries, including 335,000 emails, 133,000 projects, and 548,000 exposed users. SOCRadar described the incident as "the most significant B2B data leak in recent cybersecurity history" due to the scale and amount of data involved. "As long as humans are involved in configuring such data buckets, leaks will continue to occur."

### About Azure Blob Storage

Azure Blob Storage is Microsoft's cloud-based object storage solution, designed to manage large volumes of unstructured data. Unstructured data refers to information that does not have a defined data model or format, such as text or binary content. Blob Storage is specifically tailored for various use cases, including delivering images and documents directly to web browsers, logging and storing log files, and streaming multimedia content like videos and audio.

## Risks and consequences of misconfigured Blob Storage

 Services such as [Amazon S3 Buckets](https://www.divd.nl/newsroom/articles/buck-et-up-secure-your-aws-s3-buckets-now/) and Azure Blob Storage offer the convenience of storing data which is accessible by various users and services simultaneously. However,  misconfiguration of any of these storage services can expose your organization to several risks and consequences.

### ☢️ Service disruption

Misconfigured delete permissions could lead to accidental or intentional deletion of critical data. Recovery efforts following data loss or malicious exploitation can disrupt services.

### ☢️ Reputation damage

If the data in your misconfigured Blob Storage container contains sensitive data such as customer personal information, financial data, health records, or intellectual property, your organisation could suffer significant reputational harm. The news of the data breach spreads quickly online, damaging customer trust and potentially leading to loss of business. This is because people generally don’t like to store sensitive data, such as personal health records or credit card numbers, with a company that has previously taken the protection of other people’s data for granted. 

### ☢️ Intellectual Property theft

Intellectual property is a valuable asset. Accidentally exposing source code, designs, or proprietary processes can enable competitors to steal or replicate innovative solutions, undermining your company’s competitive edge.

### ☢️ Using property theft to advance the attack ever further

Publicly accessible data can be leveraged in social engineering attacks. Social engineering attacks exploit human psychology rather than technical vulnerabilities. The attacks often involve manipulation, deception, and lying to innocent people. Now imagine that cybercriminals have obtained publicly accessible information about your infrastructure, from a misconfigured Blob Storage (container). The cybercriminals could use the exposed information to craft convincing phishing emails, tricking employees or customers into revealing more sensitive information or credentials.

## How can I secure my Blob Storage container?

A data breach is one of the last things you want to happen in your organisation. So, how can you secure your Blob Storage containers to keep your data safe and out of the hands of cybercriminals? It’s simple! Just follow these steps:

### ✅ Implement least privilege access

Implement least privilege access by giving users and applications only the permissions they need to perform their task(s). When configuring and maintaining Blob Storage containers, regularly review the configuration settings where the access level is defined. When creating a new container you can choose one of the following options:

- **Private Access**: Only specific users and services are granted permission to access the data, ensuring a high level of security. 
- **Blob (level) Access**: The public cannot list the contents of the container, but anyone with the exact URL can access the blob. This poses a risk of exposing sensitive data if URLs are leaked or guessed.
- **Container (level) Access**: This is the most permissive setting, allowing anyone to list all the contents of the container simply by knowing its name and the associated storage account name.

### ✅ Disable anonymous read access for containers and blobs

Azure Storage supports [anonymous read access](https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure?tabs=portal) for containers and blobs (optional feature, disabled by default). Keep this feature disabled.

When anonymous access is enabled at the container level, it allows cybercriminals to enumerate or list all the blobs within that container. They typically start by discovering the storage account name, which can often be guessed based on company naming conventions or identified through subdomain enumeration. Once cybercriminals have the storage account name, they can try to list the containers and their contents. If they find a container with anonymous access enabled, they can access the data stored within it, which may include sensitive files, backups, or other critical information.

### ✅ Use Microsoft Entra ID to authorize access to blob data & prevent Shared Key Authorization

By default, requests can be authorized with either Microsoft Entra credentials, or by using the account access key for Shared Key authorization. Of these two types of authorization, Microsoft Entra ID provides superior security and ease of use over Shared Key, and is recommended by Microsoft. When you disallow Shared Key authorization for a storage account, Azure Storage rejects all subsequent requests to that account that are authorized with the account access keys. Only secured requests that are authorized with Microsoft Entra ID will succeed. 

Need guidance to set this up? 

- [Authorize access to Azure Storage data with Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/storage/blobs/authorize-access-azure-active-directory)
- [Prevent Shared Key authorization for an Azure Storage account](https://learn.microsoft.com/en-us/azure/storage/common/shared-key-authorization-prevent?tabs=portal)

### ✅ Implement strict naming conventions

Implement strict naming conventions for Blob Storage containers that do not directly relate to the company or the type of data stored, making them difficult for attackers to predict.

According to [Wizardcyber](https://wizardcyber.com/azure-blob-storage-navigating-misconfiguration-risks/), cybercriminals often aim to uncover two key pieces of information to exploit Blob Storage: the names of the container and its corresponding storage account. When anonymous access is set to the container level, it becomes possible for an attacker to enumerate, or list, all the blobs within a container.

### ✅ Enable Microsoft Defender for all of your storage accounts

Microsoft Defender for Storage adds an extra layer of security intelligence by detecting unusual and potentially harmful attempts to access or exploit storage accounts. When anomalies in activity are detected, security alerts are triggered in Microsoft Defender for Cloud. These alerts are also sent via email to subscription administrators, providing details about the suspicious activity along with recommendations for investigation and remediation of potential threats. For more information, see [Configure Microsoft Defender for Storage](https://learn.microsoft.com/en-us/azure/storage/common/azure-defender-storage-configure).

It can also help to employ additional layers of security such as Azure’s Advanced Threat Protection to detect anomalous access patterns.

### Human error remains the most likely cause of a data breach 

It is recommended to follow the advice in this article, but always keep in mind the standard principles when securing any service or configuration in the cloud, which also include regularly reviewing and auditing (storage) configurations and permissions, using strong encryption (at rest, in transit and when in use), and enable logging and monitoring to detect unauthorized access attempts. 

While cloud services provide convenience and robust security when properly configured, misconfigurations can significantly increase the risk of data exposure. Human error remains a persistent issue, despite continuous technological advancements.

## More information

- [A Timeline of Microsoft Data Breaches in the Past 36 Months](https://www.virtru.com/blog/industry-updates/microsoft-data-breaches-2024)
- [Misconfigured Azure Blob Storage Exposed the Data of 65K Companies and 548K Users](https://www.spiceworks.com/it-security/cloud-security/news/microsoft-azure-cloud-misconfiguration/)
- [Sensitive Data of 65,000+ Entities in 111 Countries Leaked due to a Single Misconfigured Data Bucket](https://socradar.io/sensitive-data-of-65000-entities-in-111-countries-leaked-due-to-a-single-misconfigured-data-bucket/)
- [Azure Blob Storage: Navigating Misconfiguration Risks](https://wizardcyber.com/azure-blob-storage-navigating-misconfiguration-risks/)
