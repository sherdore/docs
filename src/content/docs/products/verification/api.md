---
title: Use the API
description: Verify a single address or a batch with your API key.
sidebar:
  order: 2
---

The API lives at `https://verification.sherdore.com/api/v1` and speaks JSON.

## Get an API key

1. Open the Verification dashboard and go to **API keys**.
2. Create a key and copy it.

Treat a key like a password. Put it in your server's environment, never in browser code, and delete it from the dashboard if it leaks.

## Authenticate

Send your key in the `X-API-Key` header on every request.

```bash
curl -X POST https://verification.sherdore.com/api/v1/verify \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "someone@example.com"}'
```

## Verify one address

`POST /verify`

| Field | Type | Notes |
|---|---|---|
| `email` | string, required | The address to check. |
| `smtpCheck` | boolean, optional | Defaults to `true`. Set `false` to skip the live mailbox check. Your plan can also switch this check off. |

A successful response looks like this:

```json
{
  "email": "someone@example.com",
  "valid": true,
  "score": 92,
  "checks": {
    "syntax": true,
    "domainHasMx": true,
    "smtpConnectable": true,
    "mailboxExists": true,
    "isDisposable": false,
    "isRoleBased": false,
    "isCatchAll": false,
    "isFreeProvider": false
  },
  "reason": "...",
  "durationMs": 640,
  "quotaUsed": 128,
  "quotaLimit": 5000
}
```

- `valid` is the overall verdict and `score` is the confidence from 0 to 100.
- A check that couldn't be determined is `null`. For example, `mailboxExists` is `null` on a catch-all domain, or when the mailbox check is switched off.
- `reason` explains the verdict in plain language.
- `quotaUsed` and `quotaLimit` show where you are in this billing cycle.

## Verify a batch

`POST /verify/batch`

```json
{ "emails": ["a@example.com", "b@example.com"], "smtpCheck": true }
```

The response is `{ "results": [ ... ] }`, with one entry per address in the same order. The most addresses in one call is your plan's **batch size** (50, 200 or 500). Each address counts toward your quota and rate limit individually. If you run out part-way through, the remaining addresses come back with an `error` instead of a result, and the earlier ones keep their results.

## Errors

| Status | Meaning |
|---|---|
| `400` | The body is missing `email` (or `emails`), or the batch is bigger than your plan allows. |
| `401` | The `X-API-Key` header is missing or the key isn't valid. |
| `402` | The monthly verification allowance is used up. The response includes `used` and `quota`. |
| `403` | Your organization isn't active, for example it's suspended. |
| `429` | You're over the per-minute limit. The response includes `limitPerMin`. Wait a moment and retry. |

## Good practice

- Verify at the moment of signup, before you create the account or send the first email.
- Treat a `null` mailbox result as "unknown", not "bad". Many large providers accept all mail and won't confirm a mailbox.
- Keep batches within your rate limit by spacing calls out instead of retrying instantly on a `429`.
