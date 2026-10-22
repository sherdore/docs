---
title: Proxies
description: Rotating proxy pools with a simple REST API, filtered by country and protocol.
sidebar:
  order: 1
---

:::note[Early access]
SherDore Proxies isn't on public sale yet. These pages describe how it works for customers who have been given access.
:::

SherDore Proxies gives you pools of working proxies through a simple REST API. Ask for the proxies you need, filter by country and protocol, and get the best ones first.

Open the portal at [proxies.sherdore.com/portal](https://proxies.sherdore.com/portal), signed in with your SherDore account.

## How it works

1. Subscribe to a plan in your SherDore account.
2. In the portal, [generate your API key](/products/proxies/api/#get-your-api-key).
3. Call the API from your code. See [Use the API](/products/proxies/api/).

## Plans

| Plan | Price | Proxies per request | Requests / minute | Protocols | Pool refresh |
|---|---|---|---|---|---|
| **Basic** (14-day free trial) | $29/month | 50 | 30 | HTTP, HTTPS | every 10 minutes |
| **Pro** | $99/month | 500 | 120 | HTTP, HTTPS, SOCKS5 | every minute |
| **Enterprise** | $499/month | 5,000 | 600 | HTTP, HTTPS, SOCKS4, SOCKS5 | every 5 seconds |

## Next

- [Use the API](/products/proxies/api/)
