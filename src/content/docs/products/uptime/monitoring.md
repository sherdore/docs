---
title: Monitor a website
description: Add a site, understand checks, and read incidents.
sidebar:
  order: 2
---

## Add a website

1. Open Uptime and go to **Websites**.
2. Choose **Add website**, then enter a name and the domain, for example `example.com`.
3. The first check runs within a few minutes, and the site appears with its current status.

You can add as many websites as your [plan](/products/uptime/#plans) allows.

## What a check records

Every 5 minutes Uptime requests the site and records:

- the HTTP status code
- the response time
- the reason, if the response wasn't healthy

A check that doesn't get a healthy response is logged as **down** and opens an incident.

SSL certificates and domain expiry are checked **once a day**, separately from uptime checks.

## Uptime history

Every check is logged, so when something goes wrong you can see exactly when it started and how long it lasted.

## Incidents

An incident opens automatically when:

- a site is down
- a certificate is about to expire
- a domain is about to expire

It closes by itself when the problem clears. To work on one by hand, open it, add notes to its timeline, and resolve it when it's fixed.

## Maintenance windows

For planned work, create a maintenance window on the site with a title, description and start and end times. While a window is active, the site shows as **scheduled maintenance** on your status page instead of down.
