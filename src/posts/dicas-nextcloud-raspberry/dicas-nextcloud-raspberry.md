---
title: "Dicas Nextcloud no Raspberry Pi 4"
date: 2020-11-24T11:07:34.575Z
draft: false
feature_image: wallhaven-nzd21y_2560x1440.png
featured: true
published_at: 2020-11-24T11:07:34.575Z
updated_at: 2020-11-24T11:07:34.575Z
created_at: 2020-11-24T11:07:34.575Z
weight: 2
page: false
tags:
    - setup
slug: "dicas-nextcloud-raspberry"
author: "william"
comment: true
meta_description: ""
id: "dicas-nextcloud-raspberry"
---

# Criar novo certificado e atualizar

he snap actually makes some pretty bad assumptions if you want to change the domain and get a new cert, so I'm going to leave this issue open to track the fix for that. Until I fix it, I suggest you toast the cert that's currently there and get a new one. Specifically:

First of all, disable HTTPS (this just removes a symlink, it doesn’t remove any certs):

```
$ sudo nextcloud.disable-https
```

Then blow away any certs that are there (this includes self-signed certs, Let’s Encrypt certs, everything). Make sure you get this command right, you don’t want to delete anything else in the current/ dir:

```
$ sudo rm -rf /var/snap/nextcloud/current/certs
```

Then pretend you’re enabling HTTPS for the first time, using only the domains you want:

```
$ sudo nextcloud.enable-https lets-encrypt
```
