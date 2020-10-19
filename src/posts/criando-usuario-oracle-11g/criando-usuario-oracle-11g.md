---
title: "Criando usuário para o Oracle 11G"
date: 2020-10-18T11:07:34.575Z
draft: false
feature_image: wallhaven-j5zqjp_2560x1440.png
featured: false
published_at: 2020-10-18T11:07:34.575Z
updated_at: 2020-10-18T11:07:34.575Z
created_at: 2020-10-18T11:07:34.575Z
weight: 2
page: false
tags:
    - oracle
slug: "criando-usuario-oracle-11g"
author: "william"
comment: true
meta_description: ""
id: "criando-usuario-oracle-11g"
---

Os comandos abaixo, são a forma de criar usuário para o banco Oracle 11G para o sistema HCM da Senior Sistemas.

### Criar tablespace

O nome do tablespace a ser criado no exemplo se chama DADOS_VETORH, substitua esse nome para o que for melhor para você.

```SQL
create tablespace DADOS_VETORH
datafile
'C:\app\william\product\11.2.0\dbhome_1\oradata\DADOS_VETORH.dbf'
size 10000m autoextend on next 5000m maxsize 10000m
online
permanent
extent management local autoallocate
segment space management auto;
```

### Criar usuário

O nome do usuário utilizado no exemplo é VETORH.

```SQL
create user VETORH
identified by "VETORH"
default tablespace DADOS_VETORH
temporary tablespace TEMP
profile DEFAULT;
```

### Definindo privilégios

```sql
grant connect to VETORH;
grant resource to VETORH;
grant create any view to VETORH;
grant create procedure to VETORH;
grant create sequence to VETORH;
grant create session to VETORH;
grant create table to VETORH;
grant create trigger to VETORH;
grant create view to VETORH;
grant delete any table to VETORH;
grant execute any evaluation context to VETORH;
grant select any dictionary to VETORH;
grant select any table to VETORH;
grant unlimited tablespace to VETORH;
```

### Atualiza usuário

```sql
ALTER user VETORH quota UNLIMITED ON DADOS_VETORH;
ALTER USER VETORH ACCOUNT UNLOCK;
ALTER USER VETORH IDENTIFIED BY VETORH;
```
