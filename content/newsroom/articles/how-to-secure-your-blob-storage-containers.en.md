---
title: How to secure your Blob Storage containers
date: 2024-12-10T13:48:00+01:00
author: []
tag: case
intro: Services such as Amazon S3 Buckets and Azure Blob Storage offer the convenience of storing data which is accessible by various users and services simultaneously. However,  misconfiguration of any of these storage services can expose your organization to several risks and consequences.
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

### 3. Disallow Shared Key authorization for a storage account

When you disallow Shared Key authorization for a storage account, Azure Storage rejects all subsequent requests to that account that are authorized with the account access keys. Only secured requests that are authorized with Microsoft Entra ID will succeed. 

- [Prevent Shared Key authorization for an Azure Storage account](https://learn.microsoft.com/en-us/azure/storage/common/shared-key-authorization-prevent?tabs=portal)
- [How to view, manage, and rotate storage account access keys. ](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json&tabs=azure-portal)

{{< callout type="info" >}}
A shared access signature (SAS) provides secure delegated access to resources in your storage account. An account SAS is secured with the storage account key. You can sign a SAS token with a user delegation key or with a storage account key (Shared Key).
{{< /callout >}}

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

## Human error remains the most likely cause of a data breach 

It is recommended to follow the advice in this article, but always keep in mind the standard principles when securing any service or configuration in the cloud, which also include regularly reviewing and auditing (storage) configurations and permissions, using strong encryption (at rest, in transit and when in use), and enable logging and monitoring to detect unauthorized access attempts. 

While cloud services provide convenience and robust security when properly configured, misconfigurations can significantly increase the risk of data exposure. Human error remains a persistent issue, despite continuous technological advancements.

## Join DIVD: Working together for a safer digital world

Because of our notifications, organizations become aware of weaknesses and accidental misconfigurations in their systems, allowing them to address these issues before cybercriminals can exploit them. This approach helps in preventing cyber attacks and contributes to a safer digital world.

Are you interested in joining our diverse team of ethical hackers, researchers, IT professionals, or legal experts, and learning from the best? Become a [volunteer](https://www.divd.nl/contribute/volunteers/)!
