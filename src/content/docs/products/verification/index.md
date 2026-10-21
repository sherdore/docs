---
title: Verification
description: A real-time email verification API, with a dashboard for keys and usage.
sidebar:
  order: 1
---

SherDore Verification checks whether an email address is real before you send to it or let it sign up. One API call runs a syntax check, looks up the domain's mail servers, and can ask the mail server whether the mailbox exists.

Open it at [verification.sherdore.com](https://verification.sherdore.com), signed in with your SherDore account.

## What it checks

- **Syntax.** Is the address correctly formed?
- **MX records.** Does the domain actually receive email?
- **Mailbox check.** A live SMTP handshake with the receiving server, to see if the mailbox exists.
- **Disposable addresses.** Throwaway inboxes.
- **Role-based addresses.** Shared inboxes such as `info@` or `admin@`.
- **Catch-all domains and free providers.** Flagged so you can treat them with care.

Every result carries a 0 to 100 confidence **score** and the result of each individual check.

## Plans

| Plan | Price | Verifications / month | Requests / minute | Batch size |
|---|---|---|---|---|
| **Starter** (14-day free trial) | $9/month | 5,000 | 30 | 50 |
| **Pro** | $29/month | 50,000 | 100 | 200 |
| **Business** | $79/month | 500,000 | 500 | 500 |

The monthly allowance resets on a rolling cycle that starts on your billing date, not on the 1st of the month.

## Next

- [Use the API](/products/verification/api/)
