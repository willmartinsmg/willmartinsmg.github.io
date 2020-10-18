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

-- Criar tablespace
create tablespace DADOS_VETORH
datafile
'C:\app\william\product\11.2.0\dbhome_1\oradata\dados_vetorh.dbf'
size 10000m autoextend on next 5000m maxsize 10000m
online
permanent
extent management local autoallocate
segment space management auto;

-- Criar Usu�rio
create user VETORH
identified by "VETORH"
default tablespace DADOS_VETORH
temporary tablespace TEMP
profile DEFAULT;

-- Grant/Revoke role privileges
grant connect to VETORH;
grant resource to VETORH;
-- Grant/Revoke system privileges
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

-- Atualizar o usu�rio
alter user VETORH quota unlimited on DADOS_VETORH;
ALTER USER VETORH ACCOUNT UNLOCK;
ALTER USER VETORH IDENTIFIED BY VETORH;
