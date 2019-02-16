---
title: 'Comandos rápidos de Docker'
layout: post
date: 2018-10-01 04:20
image: /assets/images/markdown.jpg
headerImage: false
tag:
  - setup
  - macos
star: false
category: blog
author: willmartinsmg
description: Comandos rápidos de docker para nos ajudar no dia a dia
---

# Comandos Docker

Lista de comandos utéis

Para todas as instâncias

```
docker stop $(docker ps -a -q)
```

Remove todas as instâncias

```
docker rm $(docker ps -a -q)
```

Para todas as imagens

```
docker image rm $(docker image ls -a -q)
```

Comandos retirados do site de [Emerson Barros](https://emersonbarros.com.br/docker-parar-remover-todos-os-containers-docker/).

# Fazendo backup e restore dos container docker

# Backup

docker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql

# Restore

cat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE

# Segue a lista de comandos docker e sua utilidade:

– Acessar dentro do container e trabalhar a partir dele.

```
docker attach
```

– A partir de instruções de um arquivo Dockerfile eu possa criar uma imagem.

```
docker build
```

– Cria uma imagem a partir de um container.

```
docker commit
```

– Copia arquivos ou diretórios do container para o host.

```
docker cp
```

– Cria um novo container.

```
docker create
```

– Exibe as alterações feitas no filesystem do container.

```
docker diff
```

- Exibe os eventos do container em tempo real.

```
docker events
```

- Executa uma instrução dentro do container que está rodando sem precisar atachar nele.

```
docker exec
```

- Exporta um container para um arquivo .tar.

```
docker export
```

- Exibe o histórico de comandos que foram executados dentro do container.

```
docker history
```

- Lista as imagens disponíveis no host.

```
docker images
```

– Importa uma imagem .tar para o host.

```
docker import
```

– Exibe as informações sobre o host.

```
docker info
```

– Exibe r o json com todas as configurações do container.

```
docker inspect
```

– Da Poweroff no container.

```
docker kill
```

– Carrega a imagem de um arquivo .tar.

```
docker load
```

– Registra ou faz o login em um servidor de registry.

```
docker login
```

– Faz o logout de um servidor de registry.

```
docker logout
```

– Exibe os logs de um container.

```
docker logs
```

– Abre uma porta do host e do container.

```
docker port
```

– Gerenciamento das redes do Docker.

```
docker network
```

– Gerenciamento dos nodes do Docker Swarm.

```
docker node
```

– Pausa o container.

```
docker pause
```

– Lista as portas mapeadas de um container.

```
docker port
```

– Lista todos os containers.

```
docker ps
```

– Faz o pull de uma imagem a partir de um servidor de registry.

```
docker pull
```

– Faz o push de uma imagem a partir de um servidor de registry.

```
docker push
```

– Renomeia um container existente.

```
docker rename
```

– Restarta um container que está rodando ou parado.

```
docker restart
```

– Remove um ou mais containeres.

```
docker rm
```

– Remove uma ou mais imagens.

```
docker rmi
```

– Executa um comando em um novo container.

```
docker run
```

– Salva a imagem em um arquivo .tar.

```
docker save
```

– Procura por uma imagem no Docker Hub.

```
docker search
```

– Gernciamento dos serviços do Docker.

```
docker service
```

– Inicia um container que esteja parado.

```
docker start
```

– Exibe informações de uso de CPU, memória e rede.

```
docker stats
```

– Para um container que esteja rodando.

```
docker stop
```

– Clusterização das aplicações em uma orquestração de várias containers, aplicações junto.

```
docker swarm
```

– Coloca tag em uma imagem para o repositorio.

```
docker tag
```

– Exibe os processos rodando em um container.

```
docker top
```

– Inicia um container que está em pause.

```
docker unpause
```

– Atualiza a configuração de um ou mais containers.

```
docker update
```

– Exibe as versões de API, Client e Server do host.

```
docker version
```

– Gerenciamento dos volumes no Docker.

```
docker volume
```

– Aguarda o retorno da execução de um container para iniciar esse container.

```
docker wait
```
