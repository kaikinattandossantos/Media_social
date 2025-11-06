# 🌐 MediaSocial

> Uma plataforma social corporativa para avaliações, conexões e projetos colaborativos dentro da empresa.  
> Desenvolvido com **React + TailwindCSS** no frontend e **Spring Boot + MySQL** no backend.

---

## 🖥️ Funcionalidades

- 👤 Perfis públicos com reputação e feedbacks
- 💬 Avaliações e comentários entre colaboradores
- 🧑‍🤝‍🧑 Sistema de equipes e projetos
- 🔔 Notificações de novos eventos e interações
- 📊 Página inicial com eventos, tendências e sugestões
- 🔒 Login e registro local com persistência (LocalStorage / API)

---

## 🧱 Estrutura do Projeto
MediaSocial/
├── backend/ # API Spring Boot
├── frontend/ # Aplicação React (Tailwind)
└── README.md # Este arquivo


---

## ⚙️ Como rodar o projeto

### 💾 Configuração do Banco de Dados (MySQL)

> O projeto utiliza **MySQL** como banco de dados principal.

    # 1. **Crie um banco local** chamado `mediasocial`:
     CREATE DATABASE mediasocial;

    # 2. Atualize o arquivo application.properties em
    src/main/resources/application.properties:


    spring.datasource.url=jdbc:mysql://localhost:3306/mediasocial
    spring.datasource.username=root
    spring.datasource.password=SUA_SENHA
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

    # Porta da API
    server.port=8080
    
    ```

### 🚀 Frontend

> Aplicação React + TailwindCSS

```bash
# 1. Entre na pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm start

O app será iniciado em http://localhost:3000
```
### 🧩 Backend

> API desenvolvida em Spring Boot + Java + MySQL

```bash
# 1. Entre na pasta do backend
cd backend

# 2. Rode a aplicação (modo padrão Spring Boot)
./mvnw spring-boot:run

A API será iniciada em http://localhost:8080/api

```
