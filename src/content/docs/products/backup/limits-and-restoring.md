---
title: Limits and restoring
description: What gets backed up, how big a site can be, and how to restore.
sidebar:
  order: 4
---

## What is backed up

- **All of the site's files**, as one compressed archive.
- **The database, for WordPress sites.** For any other kind of site the backup contains files only.

## How big a site can be

The agent runs on your own hosting, so it's limited by your host's time limits. In this first version it works best for sites under roughly **1 to 2 GB**. A larger site may stop part-way through. If a backup shows **Failed**, a very large site is the first thing to suspect.

## Where backups are stored

In cloud storage that is separate from your website's server, so a failed server doesn't take your backups with it. Your sites and backups are private to your organization.

## Restoring

SherDore Backup stores your backups and lets you download them. It doesn't restore them for you. To restore, download the archives and put them back yourself or ask your host:

1. Download the **Files** archive and extract it over your site's folder.
2. For WordPress, download the **Database** dump and import it with your host's database tool.

## What isn't included yet

- Scheduled, automatic backups
- One-click restore
