---
title: Alerts
description: Get notified by email, Slack or webhook when something needs attention.
sidebar:
  order: 5
---

Alerts tell you about a problem without you having to watch the dashboard.

## Channels

| Channel | What you enter |
|---|---|
| **Email** | An email address |
| **Slack** | A Slack incoming-webhook URL |
| **Webhook** | A webhook URL that receives the alert |

## Events

An alert can be sent when:

| Event | When |
|---|---|
| **Down** | A site stops responding. |
| **Recovered** | A site that was down comes back. |
| **SSL expiring** | A certificate is close to expiring. |
| **SSL renewed** | A certificate was renewed. |
| **Domain expiring** | A domain is close to expiring. |
| **Domain renewed** | A domain was renewed. |

## Set one up

1. Open Uptime and go to **Alerts**.
2. Add a channel, choose its type, and enter the address or URL.
3. Save. The channel is used from then on.

Each alert that's sent is recorded, so you can see whether it was delivered.
