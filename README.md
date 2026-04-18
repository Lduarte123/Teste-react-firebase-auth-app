# Teste React Firebase Auth App

Aplicação desenvolvida como desafio técnico para processo seletivo de estágio, com foco em autenticação, organização de código e boas práticas em desenvolvimento front-end.

---

##  Tecnologias utilizadas

* React + TypeScript
* Material UI (MUI)
* Firebase Authentication
* React Router
* i18n (tradução)
* Jest + Testing Library

---

##  Funcionalidades

* Login com autenticação via Firebase
* Tratamento de erro com feedback visual
* Redirecionamento após login
* Logout
* Internacionalização (PT, EN, ES)
* Testes unitários dos componentes

---

##  Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Lduarte123/Teste-react-firebase-auth-app.git
cd Teste-react-firebase-auth-app/vite-project
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id


```
```env.test 
VITE_TEST_EMAIL= Email_teste
VITE_TEST_PASSWORD= password_test

> ⚠️ Importante: você pode criar um projeto no Firebase para gerar essas credenciais.

---

### 4. Rode o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173/
```

---

##  Rodando os testes

```bash
npm test
```

---

##  Observações

* O projeto foi estruturado visando organização e escalabilidade.
* Componentes reutilizáveis e separação de responsabilidades foram priorizados.
* Testes unitários foram implementados para garantir funcionamento básico da interface e autenticação.

---

##  Autor

Desenvolvido por Lucas Duarte
