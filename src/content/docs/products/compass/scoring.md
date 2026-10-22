---
title: How scoring works
description: The five dimensions, what each one measures and how they combine.
sidebar:
  order: 3
---

Every domain gets a score from **0 to 100** on each dimension. The scores are combined into one **overall score** with fixed weights, so you can see at a glance who is ahead.

| Dimension | Weight | What it measures |
|---|---|---|
| **Performance** | 30% | Core Web Vitals and Lighthouse, with real-user data from CrUX where Google has it. |
| **SEO** | 30% | Titles, metadata, canonicals, sitemap, structured data and blog cadence. |
| **Security** | 20% | HTTPS, HSTS, CSP, security headers and TLS certificate health. |
| **Content** | 15% | Homepage depth, total pages and blog volume. |
| **Google Business Profile** | 5% | Rating, reviews, categories, hours, photos and name, address and phone consistency. |

## When something can't be measured

If a dimension can't be measured for a site, for example a competitor with no Google Business Profile, the remaining weights are rescaled so the overall score stays fair.

## Where the data comes from

- **SEO, security, content and technology:** Compass crawls each site directly.
- **Performance:** Google PageSpeed Insights.
- **Google Business Profile:** the Google Places API.
