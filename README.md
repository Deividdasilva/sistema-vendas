
# sistema-vendas 

Este projeto envolve a criação de uma API backend utilizando PHP 8.0.1, sem recorrer a frameworks, acompanhada de um frontend desenvolvido em React. O sistema de banco de dados empregado é o MySQL, e para facilitar a configuração e o gerenciamento do ambiente de desenvolvimento, são utilizados Docker e Docker Compose.

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

- `/www/html/sistema-venda-api/`: Código-fonte API backend PHP.
- `/www/html/sistema-venda-front/`: Código-fonte frontend React.
- `/database/init.sql`: Dump do banco de dados MySQL.
- `/docker`: Arquivos de configuração para Docker e Docker Compose.

## Documentação da API

A documentação da API está disponível em Swagger. Consulte os endpoints, parâmetros e respostas disponíveis em: [http://localhost:8080/documentation/dist/#/](http://localhost:8080/documentation/dist/#/).

## Testes

Para a realização dos testes, foi estabelecido um container de banco de dados específico para testes. Assim, os testes podem ser executados antes de iniciar o servidor local. A configuração que diferencia as bases de dados está definida no arquivo connection na api.
