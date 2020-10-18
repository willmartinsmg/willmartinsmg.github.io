---
title: "Definindo a variável de ambiente NLS_LANG"
date: 2020-10-17T11:07:34.575Z
draft: false
feature_image: network-world.png
featured: false
published_at: 2020-10-17T11:07:34.575Z
updated_at: 2020-10-17T11:07:34.575Z
created_at: 2020-10-17T11:07:34.575Z
weight: 2
page: false
tags:
    - oracle
slug: "criando-usuario-oracle-11g"
author: "william"
comment: false
meta_description: ""
id: "criando-usuario-oracle-11g"
---

Definindo a variável de ambiente NLS_LANG para bancos de dados Oracle
Siga este procedimento para definir a variável de ambiente NLS_LANG para bancos de dados Oracle.

## Para definir a variável de ambiente NLS_LANG para bancos de dados Oracle

Determine o valor NLS_LANG.

No banco de dados do data warehouse, execute o comando

```sql
SELECT * FROM $NLS_PARAMETERS
```

Anote o valor NLS_LANG, que está no formato:

```
[NLS_LANGUAGE]_[NLS_TERRITORY].[NLS_CHARACTERSET]
```

Por exemplo:

```
American_America.UTF8
```

## Para Windows:

Navegue até Painel de controle> Sistema e clique na guia Avançado. Clique em Variáveis ​​de ambiente.
Na seção Variáveis ​​do sistema, clique em Novo.
No campo Nome da variável, insira NLS_LANG.
No campo Valor da Variável, insira o valor NLS_LANG que foi retornado na Etapa 1 .
O formato do valor NLS_LANG deve ser

```
[NLS_LANGUAGE]*[NLS_TERRITORY]. [NLS_CHARACTERSET].
```

Por exemplo:

```
American_America.UTF8.
```

## Para UNIX

Defina a variável conforme mostrado abaixo:

```
setenv NLS_LANG <NLS_LANG>
```

Por exemplo:

```
setenv NLS_LANG American_America.UTF8
```

Se seus dados forem ASCII de 7 ou 8 bits e o Informatica Server estiver em execução no UNIX, defina

```
NLS_LANG <NLS_LANGUAGE>_<NLS_TERRITORY>.WE8ISO8859P1
```

CUIDADO: Certifique-se de definir a variável NLS_LANG corretamente, conforme declarado neste procedimento, ou seus dados não serão exibidos corretamente.

Reinicialize a máquina após criar a variável.

Referência: [Documentação Oracle](https://docs.oracle.com/cd/E12102_01/books/AnyInstAdm784/AnyInstAdmPreInstall18.html#wp1043751)
