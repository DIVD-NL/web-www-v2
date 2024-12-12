---
title: How to secure your Blob Storage container
date: 2024-12-10T13:48:00+01:00
author: []
tag: news
intro: Services such as Azure Blob Storage offer the convenience of storing data which is accessible by various users and services simultaneously. However, misconfiguration of any of these storage services can expose your organization to several risks and consequences.
image: /images/OIG2.jpeg
Alt tag for image: ""
case:
  caseid: ""
  closed: false
  link: ""
  lead: ""
  leadlink: ""
  researchers:
    - label: Jelle Ursem
      link: https://www.divd.nl/who-we-are/team/people/jelle-ursem/
    - label: Serena de Pater
      link: https://www.divd.nl/who-we-are/team/people/serena-de-pater/
  researchers_people: []
faq_enabled: false
faq: null
---
By [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

{{< callout type="warning" >}}

### TL;DR: I got notified, what should I do now?

No time to read the entire article. DIVD notified me, what do I do? (choose all that are applicable)

1. Set the Blob Storage container’s access level to private.
2. Disable anonymous access.
3. Disallow Shared Key authorization for a storage account.
4. Rotate and regenerate your keys.
5. Check what is stored where.
6. Enable logging to monitor future access attempts.
7. Secure your existing logs.
8. Implement strict naming conventions.
9. Contact [G](https://buckets.grayhatwarfare.com/)[rayhatwarfare](https://buckets.grayhatwarfare.com/) for deletion.
10. Enable IP restrictions.

{{< /callout >}}

## The risks and consequences of a misconfigured Blob Storage container

Services such as [Amazon S3 Buckets](https://www.divd.nl/newsroom/articles/buck-et-up-secure-your-aws-s3-buckets-now/) and Azure Blob Storage offer the convenience of storing data which is accessible by various users and services simultaneously. However,  misconfiguration of any of these storage services can expose your organization to several risks and consequences.

> _In October 2022, a [misconfiguration in Microsoft's Azure Blob Storage](https://www.spiceworks.com/it-security/cloud-security/news/microsoft-azure-cloud-misconfiguration/) service exposed the personal data of more than 548,000 users, including product orders/offers, project details and PII (Personally Identifiable Information) data. The breach was due to the misconfiguration of only one server. According to SOCRadar’s assessment, this exposed server stored 2.4 terabytes of data from 65,000 companies based in 111 countries, including 335,000 emails, 133,000 projects, and 548,000 exposed users. SOCRadar described the incident as "the most significant B2B data leak in recent cybersecurity history" due to the scale and amount of data involved. "As long as humans are involved in configuring such data buckets, leaks will continue to occur."_

### Service disruption

Misconfigured delete permissions could lead to accidental or intentional deletion of critical data. Recovery efforts following data loss or malicious exploitation can disrupt services.

### Reputation damage

If the data in your misconfigured Blob Storage container contains sensitive data such as customer personal information, financial data, health records, or intellectual property, your organisation could suffer significant reputational harm. The news of the data breach spreads quickly online, damaging customer trust and potentially leading to loss of business. This is because people generally don’t like to store sensitive data, such as personal health records or credit card numbers, with a company that has previously taken the protection of other people’s data for granted. 

### Intellectual Property theft

Intellectual property is a valuable asset. Accidentally exposing source code, designs, or proprietary processes can enable competitors to steal or replicate innovative solutions, undermining your company’s competitive edge.

### Using property theft to advance the attack ever further

Publicly accessible data can be leveraged in social engineering attacks. Social engineering attacks exploit human psychology rather than technical vulnerabilities. The attacks often involve manipulation, deception, and lying to innocent people. Now imagine that cybercriminals have obtained publicly accessible information about your infrastructure, from a misconfigured Blob Storage (container). The cybercriminals could use the exposed information to craft convincing phishing emails, tricking employees or customers into revealing more sensitive information or credentials.

## How can I secure my Blob Storage container?

A data breach is one of the last things you want to happen in your organisation. So, how can you secure your Blob Storage containers to keep your data safe and out of the hands of cybercriminals? It’s simple! Just follow these steps:

### 1. Set the Blob Storage container’s access level to private

Implement least privilege access by giving users and applications only the permissions they need to perform their task(s). When creating a new container you can choose one of the following options:

- **Private Access**: Only specific users and services are granted permission to access the data, ensuring a high level of security. Access is contingent on credentials or tokens, adding an extra layer of protection.
- **Blob (level) Access**: The public cannot list the contents of the container, but anyone with the exact URL can access the blob. This poses a risk of exposing sensitive data if URLs are leaked or guessed. Blob Access is suitable for non-sensitive content that must be shared with external parties, such as public-facing images or documents.
- **Container (level) Access**: This is the most permissive setting, allowing anyone to list all the contents of the container simply by knowing its name and the associated storage account name. Container Access is suitable for scenarios where data must be widely discoverable without authentication, such as hosting a public dataset.

Needless to say, private access is the most secure option. This configuration ensures that only explicitly authorized users and services can access the data. It provides the highest level of security by enforcing strict access controls.

### 2. Disable anonymous read access 

Azure Storage supports [anonymous read access](https://learn.microsoft.com/en-us/azure/storage/blobs/anonymous-read-access-configure?tabs=portal) for containers and blobs (optional feature, disabled by default). Keep this feature disabled. When anonymous access is enabled at the container level, it allows cybercriminals to enumerate or list all the blobs within that container. If they find a container with anonymous access enabled, they can access the data stored within it, which may include sensitive files, backups, or other critical information. 

There is also a big chance your sensitive files will be indexed by [specialized search engines like Grayhatwarfare](https://buckets.grayhatwarfare.com/) leading to an even greater discovery and attack surface.

### 3. Disallow Shared Key authorization for a storage account

When you disallow Shared Key authorization for a storage account, Azure Storage rejects all subsequent requests to that account that are authorized with the account access keys. Only secured requests that are authorized with Microsoft Entra ID will succeed. 

- [Prevent Shared Key authorization for an Azure Storage account](https://learn.microsoft.com/en-us/azure/storage/common/shared-key-authorization-prevent?tabs=portal)
- [How to view, manage, and rotate storage account access keys. ](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal)

### 4. Regularly rotate and regenerate your keys

It is recommended that you rotate and regenerate your keys regularly. This can be done manually or using the Azure Key Vault.

- [Manually rotate access keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#manually-rotate-access-keys)
- [Use Azure Key Vault to manage your access keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#use-azure-key-vault-to-manage-your-access-keys)

 Keep in mind that storage account access keys provide full access to the storage account data and the ability to generate SAS tokens.

### 5. Check what is stored where

Move business-critical data, PII and other sensitive data to the right container which is adequately protected. Our volunteers often find publicly accessible Blob Storage containers that were once created to only contain publicly known or insensitive information, but now also contain sensitive or private data. Regularly check if your Blob Storage containers only contain the data which the container was originally created for. Store business-critical data in immutable blobs, disallow cross-tenant object replication and configure legal holds and time-based retention policies if necessary. 

### 6. Enable logging to monitor future access attempts

Enable logging (e.g., Azure Monitor and Azure Blob Storage Diagnostics) to monitor future access attempts. It can also help to employ additional layers of security such as Azure’s Advanced Threat Protection to detect anomalous access patterns.

You can use [Azure Storage Explorer](https://learn.microsoft.com/en-us/azure/storage/storage-explorer/vs-azure-tools-storage-explorer-blobs) to check the security configuration of your Azure Blob Storage containers by reviewing things like access levels, permissions, and encryption. In Azure Storage Explorer, you can for example manage (add and remove) access policies for a blob container. When you create a new Blob container right now, the default setting is that every Blob container is set to "No public access".

### 7. Secure your existing logs

By analyzing logs, you can determine how and when the container was misconfigured and whether it resulted from human error, automation scripts, or other factors. Use [Azure's immutable blob storage feature ](https://learn.microsoft.com/en-us/azure/storage/blobs/immutable-storage-overview)to ensure that logs cannot be modified or deleted.

### 8. Implement strict naming conventions

Implement strict naming conventions for Blob Storage containers that do not directly relate to the company or the type of data stored, making them difficult for attackers to predict.

{{< callout type="info" >}}

According to [Wizardcyber](https://wizardcyber.com/azure-blob-storage-navigating-misconfiguration-risks/), cybercriminals often aim to uncover two key pieces of information to exploit Blob Storage: the names of the container and its corresponding storage account. When anonymous access is set to the container level, it becomes possible for an attacker to enumerate, or list, all the blobs within a container.

{{< /callout >}}

### 9. Contact Grayhatwarfare for deletion

Contact [G](https://buckets.grayhatwarfare.com/)[rayhatwarfare](https://buckets.grayhatwarfare.com/) for the deletion of your information. Grayhatwarfare is an online tool and database designed to index publicly exposed cloud storage buckets, including misconfigured Azure Blob Storage containers, Amazon S3 buckets, and Google Cloud Storage. It could be that we've found your misconfigured containers here.

### 10. Enable IP restrictions

Limit access to your storage account to requests that come from specified IP addresses, IP ranges, subnets in an Azure virtual network, or resource instances of some Azure services.

## Human error remains the most likely cause of a data breach 

It is recommended to follow the advice in this article, but always keep in mind the standard principles when securing any service or configuration in the cloud, which also include regularly reviewing and auditing (storage) configurations and permissions, using strong encryption (at rest, in transit and when in use), and enable logging and monitoring to detect unauthorized access attempts. 

While cloud services provide convenience and robust security when properly configured, misconfigurations can significantly increase the risk of data exposure. Human error remains a persistent issue, despite continuous technological advancements.

## Join DIVD: Working together for a safer digital world

Because of our notifications, organizations become aware of weaknesses and accidental misconfigurations in their systems, allowing them to address these issues before cybercriminals can exploit them. This approach helps in preventing cyber attacks and contributes to a safer digital world.

Are you interested in joining our diverse team of ethical hackers, researchers, IT professionals, or legal experts, and learning from the best? Become a [volunteer](https://www.divd.nl/contribute/volunteers/)! Are you happy with the things that DIVD does? [Donate](https://www.divd.nl/contribute/#donate)!

<img alt="" src="data:image/png;base64,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" />
