# Apw.Solucoes.Web

Este repositório visa manter a implementação do frontend do projeto Apw Soluções. 

# Tecnologias

- Frontend desenvolvido com [Angular 11.2.14](https://angular.io/), utilizando [Bootstrap 5.1.3](https://ng-bootstrap.github.io/#/getting-started) para realizar a estilização.

# Ambiente

- Necessário um ambiente com Node 12.18.3 ou superior para realizar a execução do projeto.

# Execução do Projeto local

Abra o prompt de comando no diretorio src do projeto e execute os seguintes comandos:


### npm install
```sh
$ npm install (No caso de primeira execução no ambiente)  
$ npm start
```

# Deploy da Aplicação

Abra o propmt de comando no diretorio src do projeto e execute os seguintes comandos:

### npm install
```sh
$ npm install  
```

### build
```sh
$ npm run build:prod
$ ng build --prod
```

### Docker v1
```sh
$ docker build -t apw-sol-web-img:v2 .
$ docker run --name apw-apw-sol-web -d -p 8081:80 apw-sol-web-img
```
### Docker v2
```sh
$ docker build -t apw-sol-web-img .
$ docker run --name apw-apw-sol-web -d -p 80:80 apwsolucoes/apw-sol-web-img
```

### Git
```sh
git config --get remote.origin.url
https://apwsti@dev.azure.com/apwsti/Apw.LineCore/_git/Apw.LineCore.Web
```

```sh
git commit -m 'first-commit'
```



docker pull apwsolucoes/apw-sol-web-img
docker run --name apw-apw-sol-web:v2 -d -p 8081:80 apw-sol-web-img:v2

docker tag apw-sol-web-img:v2 apw-sol-web-img:v2
docker push apwsolucoes/apw-sol-web-img:v2


--- 2022-08-01
docker tag d159c9753a72 apwsolucoes/apw-sol-web-img:v2
docker push apwsolucoes/apw-sol-web-img:v2


# Quality of the code
[![DeepScan grade](https://deepscan.io/api/teams/18867/projects/22156/branches/651745/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=18867&pid=22156&bid=651745)