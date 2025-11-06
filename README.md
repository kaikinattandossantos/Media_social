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

🧩 Backend

API desenvolvida em Spring Boot + Java + MySQL
# 1. Entre na pasta do backend
cd backend

# 2. Rode a aplicação (modo padrão Spring Boot)
./mvnw spring-boot:run

A API será iniciada em http://localhost:8080/api