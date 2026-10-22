---
title: Security score and monitoring
description: How Shield scores a site, and the checks that run without an agent.
sidebar:
  order: 3
---

## The security score

Each site shows a **security score out of 100** with a letter grade. Grades A and B show green, C shows yellow, and anything lower shows red. Open the score to see every **deduction** and how many points it cost, so you know exactly what to fix first. A score with no deductions means everything checked is in good shape.

## Uptime

Every site is checked **every 5 minutes**. Each check records the HTTP status and the response time. The site card shows whether it's up or down and when it was last checked, and **View full history** lists every check.

## SSL certificate

Shield tracks the certificate's expiry date and shows its status as **valid**, **expiring** or a problem, so you hear about it before your visitors do.

## Domain expiry

The domain's renewal date is watched the same way, so a forgotten renewal doesn't take you offline by surprise.

## Site Scan

Site Scan runs **35 outside-in checks** against the live site, with no agent needed. They fall into four groups:

| Category | Looks for |
|---|---|
| **Exposure** | Files and folders that shouldn't be public. |
| **Disclosure** | Information that leaks details about your setup. |
| **Hardening** | Missing protections you could switch on. |
| **Configuration** | Weak or risky settings. |

The checks are tuned to your platform. You can run a scan on demand from the portal.

## Vulnerabilities

Shield compares your site's core, plugins and themes against a database of known vulnerabilities. See [Findings](/products/shield/findings/).
