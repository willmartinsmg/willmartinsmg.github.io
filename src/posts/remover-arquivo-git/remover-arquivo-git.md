---
title: "Removendo arquivo do Git"
date: 2020-10-21T11:07:34.575Z
draft: false
feature_image: wallhaven-ne92z8_2560x1440.png
featured: false
published_at: 2020-10-21T11:07:34.575Z
updated_at: 2020-10-21T11:07:34.575Z
created_at: 2020-10-21T11:07:34.575Z
weight: 2
page: false
tags:
    - git
slug: "remover-arquivo-git"
author: "william"
comment: true
meta_description: ""
id: "remover-arquivo-git"
---

Fazer a remoção do arquivo git local, basta executar o comando abaixo.

```terminal
$ git rm arquivo.txt
```

Caso seja apresentada uma mensagem de erro como essa:

```terminal
error: the following file has changes staged in the index:
arquivo.txt
(use --cached to keep the file, or -f to force removal)
```

Será necessário executar um argumento a mais para remover o arquivo.

```terminal
$ git rm --cached arquivo.txt
```
