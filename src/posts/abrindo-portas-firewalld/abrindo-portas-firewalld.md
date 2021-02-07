---
title: "Abrir portas no firewalld"
date: 2021-02-03T11:07:34.575Z
draft: false
feature_image: wallhaven-k9y8d6_2560x1440.png
featured: false
published_at: 2021-02-03T11:07:34.575Z
updated_at: 2021-02-03T11:07:34.575Z
created_at: 2021-02-03T11:07:34.575Z
weight: 2
page: false
tags:
    - server
slug: "abrindo-portas-firewalld"
author: "william"
comment: false
meta_description: ""
id: "abrindo-portas-firewalld"
---

Abrir portas no firewalld

# add rules

```
firewall-cmd --permanent --add-port=2197/tcp
```

#FTP

```
firewall-cmd --permanent --add-port=21/tcp
```

#SSH

```
firewall-cmd --permanent --add-port=22/tcp

firewall-cmd --permanent --add-port=8000-10000/tcp

firewall-cmd --permanent --add-rich-rule="rule family='ipv4' source address='IP_DO_SERVIDOR' port port='2198' protocol='tcp' accept"
```

# reload firewall

```
firewall-cmd --reload
```

Referência: [Cliente Oba](https://www.clienteoba.com.br/index.php/knowledgebase/630/Abrir-portas-no-firewalld.html)
