---
title: "Como configurar HTTPS em aplicações create-react-app no localhost"
date: 2021-04-15T11:07:34.575Z
draft: false
feature_image: wallhaven-pkkm6p_2560x1440.png
featured: false
published_at: 2021-04-15T11:07:34.575Z
updated_at: 2021-04-15T11:07:34.575Z
created_at: 2021-04-15T11:07:34.575Z
weight: 2
page: false
tags:
    - oracle
slug: "configurar-https-react-app-localhost"
author: "william"
comment: true
meta_description: ""
id: "configurar-https-react-app-localhost"
---

Se você construiu um aplicativo usando create-react-app e o está executando localmente em seu computador, por padrão, ele é servido usando o protocolo HTTP.

Qualquer aplicativo em produção será servido usando HTTPS, a versão segura do HTTP.

Você obterá HTTPS quase sem esforço na maioria dos casos, especialmente se usar uma plataforma moderna como Netlify ou Vercel para servir seu aplicativo.

Mas localmente ... é um pouco mais complicado do que gostaríamos.

Vamos ver como você consegue!

Como você sabe, o aplicativo create-react-app é executado usando npm run start ou simplesmente npm start, porque na seção de scripts do arquivo package.json, temos esta linha:

```
"start": "react-scripts start"
```

Isso define a variável de ambiente HTTPS para o valor verdadeiro.

Isso não é suficiente, no entanto.

Agora também precisamos gerar um certificado local. Esta etapa funcionará bem para qualquer aplicativo, não apenas aplicativos criar-reagir-aplicativo, mas vou incluí-la neste post, como uma referência.

Observação: executei esses comandos no macOS. O Linux deve funcionar da mesma maneira. Eu não garanto para o Windows.
Na pasta raiz do projeto, execute:

```
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
```

Execute isso agora:

```
openssl rsa -in keytmp.pem -out key.pem
```

Agora você deve ter os arquivos cert.pem e key.pem na pasta.

Agora altere o script de início no arquivo package.json para:

```
"start": "export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start",
```

Se você executou npm run start e acessar https: // localhost: 3000 (ou a porta que seu aplicativo usa, se for diferente - no meu caso é 3008).

Para corrigir isso, instale o certificado no sistema operacional.

Referência: [Flávio Copes](https://flaviocopes.com/react-how-to-configure-https-localhost/)
