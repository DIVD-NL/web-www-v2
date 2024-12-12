---
title: How to secure your AWS S3 buckets
date: 2024-07-31T16:43:00+02:00
tag: news
intro: 1.5 million files are stored unprotected on the public internet, does this still happen? Unfortunately, yes, it still happens. Despite our familiarity with security policies, controls, and best practices. In this article, you can read how you can secure your AWS S3 buckets and why it is important to do it.
image: /images/6583bce8-b9bb-4182-b966-d80ab032b14e.jpg
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
faq:
  title: faq
  opener: ""
  intro: ""
  url: ""
---
By [Serena de Pater](https://www.divd.nl/who-we-are/team/people/serena-de-pater/)

{{< callout type="warning" >}}

### TL;DR: I got notified, what should I do now?

No time to read the entire article. DIVD notified me, what do I do? (choose all that are applicable)

1. Disable public access to your S3 buckets if it's not strictly necessary.
2. Control ownership of objects and disable ACLs for your bucket.
3. Enable logging and monitoring.
4. Encrypt your data at rest and in transit.
5. Conduct regular security audits of your AWS environment.
6. Proactively search for vulnerabilities or vulnerable systems.

{{< /callout >}}

## Risks and consequences of misconfigured buckets

An AWS S3 bucket is essentially a container in the cloud where you can store and manage data, such as photos, videos, documents, backups, and more. AWS Stands for Amazon Web Services and S3 stands for Simple Storage Service.

Each S3 bucket can hold a virtually unlimited number of objects. You probably would not like everyone to be able to view, modify, copy, or delete your data, so you create access policies and controls to secure it. Without access policies, an AWS S3 bucket is considered "publicly accessible". This means that its permissions allow any user on the internet to view and download its contents.

When an S3 bucket is visible to everyone on the public internet when it shouldn’t be, it’s called a misconfiguration. Such misconfigurations can turn a private repository of sensitive data into a goldmine for cybercriminals. So, what happens if you accidentally forget to secure your AWS S3 bucket?

> _In 2022, a group of security researchers discovered a misconfigured Amazon S3 bucket exposing 3TB of data. We are not talking about random bits and bytes, but among those [1.5 million unprotected files](https://www.skyhighsecurity.com/about/resources/intelligence-digest/unsecured-servers-can-put-lives-at-stake.html?eid=evpxmdrt&smcid=lnp&utm_source=linkedin&utm_medium=paidsocial&utm_campaign=skyhighsecuritybrandlaunch_jp&utm_content=plane&utm_term=q4_2022) were airport employee records, ID card photos, and personally identifiable information (PII) including names, photos, occupations, and national ID numbers dating back to [at least 2018](https://www.safetydetectives.com/news/securitas-leak-report/). Other information that could be extracted was in the form of Android mobile apps that are used by security personnel to help with various tasks, such as incident reporting. According to [SafetyDetectives](https://www.safetydetectives.com/news/securitas-leak-report/), the Amazon S3 bucket was left open and accessible, without any authentication procedures in place._

If an S3 bucket is left publicly accessible, anyone can access the data inside. When cybercriminals gain access to confidential or sensitive information, it results in a data breach. This is one of the most severe and likely consequences of an exposed S3 bucket. Depending on the data stored, a data breach can lead to reputational damage, regulatory penalties, and intellectual property theft. In the worst cases, it can also result in identity theft, financial loss, and competitive disadvantages. Cybercriminals can also use the stolen data to threaten to release this data unless a ransom is paid. Getting blackmailed can be perceived as humiliating, and is harmful to the victim’s reputation and trust relationships.

### Reputation damage

If the data in your misconfigured S3 bucket contained sensitive data such as customer personal information, financial data, health records, or intellectual property, your organisation could suffer significant reputational harm. The news of the data breach spreads quickly online, damaging customer trust and potentially leading to loss of business. This is because people generally don’t like to store sensitive data, such as personal health records or credit card numbers, with a company that has previously taken the protection of other people’s data for granted. In a world where data privacy is crucial, failing to secure an S3 bucket can have long-lasting effects on a company’s reputation.

### Regulatory penalties

In addition to reputational damage, failing to comply with laws and regulations can have serious consequences. Many regions, such as Europe with the GDPR and California with the CCPA, have stringent data protection regulations. Exposing sensitive data can lead to hefty fines and legal actions, adding a financial burden to the already significant repercussions of a data breach.

### Intellectual Property theft

For organisations, especially those in tech and creative industries, intellectual property is a valuable asset. Accidentally exposing source code, designs, or proprietary processes can enable competitors to steal or replicate innovative solutions, undermining your company’s competitive edge.

### Using property theft to advance the attack ever further

Publicly accessible data can be leveraged in social engineering attacks. Social engineering attacks exploit human psychology rather than technical vulnerabilities. They often involve manipulation, deception, and lying to innocent people. Now imagine that cybercriminals have obtained publicly accessible information about your infrastructure, from a misconfigured S3 bucket. The cybercriminals could use the exposed information to craft convincing phishing emails, tricking employees or customers into revealing more sensitive information or credentials.

## How can I secure my AWS buckets?

A data breach is one of the last things you want to happen in your organisation. So, how can you secure your S3 buckets to keep your data safe and out of the hands of cybercriminals? It’s simple! Just follow these steps:

### 1. Disable public access to your S3 buckets if it's not strictly necessary

Implement least privilege access by giving users and applications only the permissions they need to perform their task(s). Regularly review and adjust permissions to avoid over-privileged access and remove permissions when the user or application no longer needs it. Disable public access to your S3 buckets if it is not strictly necessary.

### 2. Control ownership of objects and disable ACLs for your bucket 

Use [AWS IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) for granular permission management, and clearly define who can access the data and what actions they can perform. Avoid public-read or public-write permissions unless absolutely necessary. If public access is necessary, limit it to the minimum and monitor it closely. Keep access control lists (ACLs) disabled by applying the "[Bucket owner enforced](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html)" setting and using your bucket policy to share data with external users as needed.

### 3. Enable logging and monitoring

Activate logging and monitoring features like AWS CloudTrail and Amazon S3 server access logging. These tools help you track access and changes to your S3 buckets, allowing you to detect and respond to suspicious activities quickly. Review both options here:

- [Logging requests with server access logging](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html)
- [Logging Amazon S3 API calls using AWS CloudTrail](https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudtrail-logging.html)

### 4. Encrypt your data at rest and in transit

Use server-side encryption (SSE) or client-side encryption to protect your data at rest. Ensure data in transit is encrypted using HTTPS to prevent interception.

### 5. Conduct regular security audits of your AWS environment

Regular security audits can be used to identify and remediate potential vulnerabilities. To simplify compliance auditing and security analysis, you can enable [AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/gs-console.html), which helps you to assess, audit, and evaluate the configurations of your AWS resources.

### 6. Proactively search for vulnerabilities or vulnerable systems

Proactively detect the presence of sensitive data with [Amazon Macie](https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html). Amazon Macie uses machine learning and pattern matching to provide visibility into data security risks and enables automated protection against those risks.

By following these steps, you can significantly enhance the security of your S3 buckets and protect your data from unauthorised access and potential breaches. If you happen to forget to secure your S3 bucket, let’s hope & pray that one of DIVD’s finest finds the misconfiguration and reports it to your organisation as soon as it’s discovered!

## Join DIVD: Working together for a safer digital world

Because of our notifications, organizations become aware of weaknesses and accidental misconfigurations in their systems, allowing them to address these issues before cybercriminals can exploit them. This approach helps in preventing cyber attacks and contributes to a safer digital world.

Are you interested in joining our diverse team of ethical hackers, researchers, IT professionals, or legal experts, and learning from the best? Become a [volunteer](https://www.divd.nl/contribute/volunteers/)! Are you happy with the things that DIVD does? [Donate](https://www.divd.nl/contribute/#donate)!
