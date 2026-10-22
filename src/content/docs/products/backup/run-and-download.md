---
title: Run a backup and download it
description: Start a backup, watch its status and download your archives.
sidebar:
  order: 3
---

## Start a backup

Backups are started by hand. Open the agent file on your site in your browser and choose **Run backup**. The agent archives your files, dumps the WordPress database if there is one, and uploads both.

Backups don't run on a schedule yet.

## Backup history

Open a site in SherDore Backup to see its **Backup history**. Each backup shows:

| Column | Meaning |
|---|---|
| **Started** | When the backup began. |
| **Status** | **Complete** when it finished, **Failed** if something went wrong, or its current state while it runs. |
| **Files** | A link to download the files archive. |
| **Database** | A link to download the database dump, for WordPress sites. A dash means there isn't one. |

## Download

Choose **Download** next to the archive you want. Files and database are separate downloads, so you can fetch just the part you need.

## How many are kept

The five most recent completed backups of each site are kept. When a new backup completes, anything older is removed automatically, so download any archive you want to keep for longer.
