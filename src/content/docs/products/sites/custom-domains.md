---
title: Use your own domain
description: Point your own domain, like www.yourbusiness.com, at your website.
sidebar:
  order: 5
---

:::caution
Custom domain mapping is still being switched on. Ask us before you rely on it for a live business site.
:::

Besides its free `yoursite.sites.sherdore.com` address, a website can also answer on your own domain, such as `www.yourbusiness.com`. A website can have more than one, for example the bare domain and the `www` version.

## How a domain moves along

Adding a domain starts a check. Its status shows how far along it is:

| Status | Meaning |
|---|---|
| **Pending** | Added, not started. |
| **Verifying** | We're waiting for your DNS to point at us and for the secure certificate to be issued. |
| **Active** | Live. Visitors can reach your site on this domain over HTTPS. |
| **Failed** | Something went wrong. Check your DNS records and try again. |

Statuses are checked automatically every few minutes, so you don't need to do anything once your DNS is right.

## Set it up

1. Open your website and add the domain.
2. Create the DNS records shown there at your domain registrar.
3. Wait for the status to become **Active**.

The certificate for your domain is handled for you and renews itself.

## Requirements

- Your plan must include custom domains. Pro does.
- The website must be **published**, or visitors to your domain see "not found".
