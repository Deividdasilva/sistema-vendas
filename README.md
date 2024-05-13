
# sistema-vendas 

Este projeto consiste em uma API backend desenvolvida em PHP 8.0.1, sem o uso de frameworks, e um frontend em React. Utiliza MySQL como sistema de banco de dados, com Docker e Docker Compose para simplificar a configuração e a execução do ambiente de desenvolvimento.

## Requisitos

- Docker
- Docker Compose

## Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/Deividdasilva/sistema-vendas
cd sistema-vendas/docker
```

### Iniciando os Containers

Utilize o Docker Compose para iniciar os containers:

```bash
docker-compose up -d
```

### Acessando a Aplicação

- **API Backend**: [http://localhost:8080](http://localhost:8080)
- **Documentação Swagger**: [http://localhost:8080/documentation/dist/#/](http://localhost:8080/documentation/dist/#/)
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **PHPMYADMIN**: [http://localhost:8085](http://localhost:8085)

## Estrutura do Projeto

- `/www/html/sistema-venda-api/`: Código-fonte da API backend PHP.
- `/www/html/sistema-venda-front/`: Código-fonte do frontend React.
- `/database/init.sql`: Dump do banco de dados MySQL.
- `/docker`: Arquivos de configuração para Docker e Docker Compose.

## Documentação da API

A documentação da API está disponível em Swagger. Consulte os endpoints, parâmetros e respostas disponíveis em: [http://localhost:8080/documentation/dist/#/](http://localhost:8080/documentation/dist/#/).

## Testes
