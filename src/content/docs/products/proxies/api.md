---
title: Use the API
description: Get your API key and request proxies.
sidebar:
  order: 2
---

The API lives at `https://proxies.sherdore.com` and returns JSON.

## Get your API key

1. Open the [portal](https://proxies.sherdore.com/portal) and sign in.
2. Choose **Generate API key**.
3. **Copy it straight away.** The full key is shown **once** and never again, because only a scrambled copy is stored.

Generating a new key **revokes the old one**, so update anything still using it. You need an active Proxies subscription to generate a key.

## Authenticate

Send your key in the `X-API-Key` header.

## Request proxies

`GET /v1/proxies`

| Parameter | Notes |
|---|---|
| `country` | Optional. A two-letter country code, such as `US`. |
| `protocol` | Optional. One protocol your plan allows. Leave it out to get every protocol your plan allows. |

```bash
curl "https://proxies.sherdore.com/v1/proxies?country=US&protocol=https" \
  -H "X-API-Key: YOUR_API_KEY"
```

An example response (the values here are illustrative):

```json
{
  "tier": "basic",
  "count": 50,
  "proxies": [
    {
      "ip": "203.0.113.10",
      "port": 8080,
      "protocol": "https",
      "country": "US",
      "anonymity": "elite",
      "latency_ms": 180,
      "uptime_pct": 99.2
    }
  ]
}
```

Only proxies that are currently **alive** are returned, best first: highest uptime, then lowest latency. You get at most as many as your plan allows per request.

## Limits and errors

| Case | Result |
|---|---|
| Missing or wrong key | `401` with "Invalid or revoked API key". |
| Too many requests in a minute | `429` "Rate limit exceeded for your tier". Your limit is the requests per minute for your plan. |
| A protocol your plan doesn't include | A response with an `error` and the `allowed_protocols` list. |

Check `/portal` any time to see your recent requests and total usage. There is also a plain `GET /health` that returns `{"status": "ok"}`.
