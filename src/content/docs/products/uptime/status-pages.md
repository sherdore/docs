---
title: Status pages
description: Publish one or more public status pages for your customers.
sidebar:
  order: 3
---

A status page shows your customers the current state of your sites without giving them access to your dashboard. You can have **several** status pages, for example one per product or per client.

## What it shows

Each site appears with one of four statuses:

| Status | Meaning |
|---|---|
| **Operational** | Checks are passing. |
| **Degraded** | The site is responding but not healthy. |
| **Down** | Checks are failing. |
| **Scheduled maintenance** | A maintenance window is active. |

You can also post your own updates about an incident. See [Post an incident](/products/uptime/posted-incidents/).

## Set one up

1. Open Uptime and go to **Status pages**, then create a page with a **title**.
2. Choose which of your sites to show on it. You can put sites into named **groups** and set their order.
3. Set its **address** (slug), an optional **description**, and an **accent color**.
4. Add a **logo** if you like (PNG, JPG or WebP, up to 1 MB).
5. Switch the page **on**.

You can switch a page off again at any time. Everything else about your account stays private, and only the status page you publish is visible to the public.

## Your own domain

If custom domains are switched on for your account, you can serve a status page from your own address, such as `status.yourcompany.com`. Add the domain on the page's settings, create the DNS record shown, and the page serves from it once the domain is verified.

## Subscribers

Turn on **subscriptions** and visitors can subscribe to updates, so they hear about incidents without checking back. Download your subscribers as a CSV from the page's settings.
