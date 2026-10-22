---
title: Deliverability and suppressions
description: Check your sending domain's setup and keep bad addresses off your lists.
sidebar:
  order: 9
---

## Domain health

Open **Deliverability** to check your sending domain's email setup. Enter your **DKIM selector** if you use one, and choose **check**. Outreach looks up your domain's records and shows what is missing or wrong, so your email reaches the inbox instead of spam.

## Suppressions

An address on the suppression list is never sent to, whatever list it's on. Addresses are added automatically when:

| Reason | When |
|---|---|
| **Hard bounce** | The address doesn't exist. |
| **Complaint** | The recipient marked a message as spam. |
| **Manual** | You added it yourself. |

Open **Suppressions** to see the list.

## Tips

- Warm up a new sending domain slowly instead of mailing a large list on day one.
- Remove addresses that bounce, and keep complaint rates low.
- Only send to people who agreed to hear from you.
