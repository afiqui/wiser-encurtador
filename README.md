# wiser-encurtador
Desafio técnico Wiser - Backend. Escurtador de URL


## 🔐 Pré requisitos

<a href="https://www.docker.com/">Docker</a> &nbsp;
  
<a href="https://docs.docker.com/compose/install/">Docker-compose</a> &nbsp;

#Instalação
```bash
.Git clone: git clone https://github.com/afiqui/wiser-encurtador.git
.Download zip: https://github.com/afiqui/wiser-encurtador/archive/master.zip
````

#Execução:
```bash
$ docker-compose up --build
```

## Test
```bash
No arquivo docker-compose.yml alterar POSTGRES_DB: root para POSTGRES_DB: root_test
```

```bash
$ npm run test
$ npm run test_windows // windows
````

#Endpoints - Documentação postman: 
<a href="https://www.postman.com/afiqui/workspace/wiser-encurtadorurl/documentation/8428938-dd0409b6-90bf-4377-932c-f2b40917fd9a">Postman</a> &nbsp;

#Gerando url encurtada: 
https://wiser-encurtador.herokuapp.com/encurtador ou localhost:8081/encurtador -> POST:
````bash
body:
{
    "url": "link da url"
}
````

#Acessando url ncurtada: 
https://wiser-encurtador.herokuapp.com/newUrl ou localhost:8081/newUrl -> GET
