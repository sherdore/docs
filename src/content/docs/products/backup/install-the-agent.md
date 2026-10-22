---
title: Install the agent
description: Add a website and put the single backup file on it.
sidebar:
  order: 2
---

The agent is one PHP file. It runs on your own hosting, packs up your site, and uploads the archives to SherDore's storage. If you can upload a file to your site, you can install it.

## 1. Add your website

1. Open Backup and go to **Websites**.
2. Add the site with a name and its domain.

You can add as many sites as your [plan](/products/backup/#plans) allows.

## 2. Download the agent

Open the site and choose **Download backup agent**. The file is made for that specific site, so don't reuse one site's agent on another.

## 3. Upload it

Upload the file to your site's **document root**, the folder your website's home page lives in, using your host's file manager or FTP.

## 4. Open it in your browser

Visit the agent file's address in your browser and choose **Run backup**. See [Run a backup and download it](/products/backup/run-and-download/).

## Remove it when you're done

Delete the file from your site after the backup finishes and nothing is left running. Download a fresh copy from your dashboard whenever you want to back up again.
