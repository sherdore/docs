---
title: Deep scan agent
description: Install the one-file agent for malware scanning, file integrity, Security Check and backups.
sidebar:
  order: 4
---

Some checks need to look at the files on your server. For those, Shield uses an **agent**, a single PHP file you add to your site. No SSH, no plugin and no server changes are needed.

## Set it up

1. Open a site and choose **Set up scanner** (it reads **Finish setup** if you've started).
2. **Download** the agent.
3. Upload it to your site.
4. Run the scan from Shield. Results appear on the site's scanner page.

## What the agent does

### Malware scanning

Every file is scanned for injected code, backdoors and known-bad signatures. The scanner page shows the number of files scanned and keeps a full history for each site. Findings have a severity of **critical**, **high**, **medium** or **low**.

### File integrity monitoring

Shield fingerprints your files and flags anything **added, changed or removed** between scans, so an unexpected change stands out.

### Security Check

The agent audits your PHP configuration and hardening across five categories and shows what to tighten.

### Backups

Create a backup of the site's files and database through the agent, then download it from the portal. Open **Backup** in the portal to see and download them.

## Findings

Everything the agent finds lands in the portal's finding lists. See [Findings](/products/shield/findings/).
