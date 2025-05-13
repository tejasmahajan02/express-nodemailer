# 📧 express-nodemailer

A structured Node.js + TypeScript starter built with **Express** and **Nodemailer**, designed for sending transactional emails using Handlebars templates. Great for email-based features like contact forms, password resets, or notifications.

---

## 🌟 Features

* ⚡ Express API boilerplate
* 📨 Nodemailer for sending emails
* 🖋️ Handlebars (.hbs) support for dynamic email templates
* 🛡️ Environment-based configuration via `.env`
* 🧰 TypeScript-first with modular structure
* 🔄 Dev setup using `concurrently`, `tsc`, and `nodemon`
* 📏 Linting and formatting with ESLint + Prettier

---

## 🗂️ Directory Layout

```
.
├── src/
│   ├── app.ts                     # Express app setup
│   ├── server.ts                  # Server bootstrap
│   ├── config/
│   │   └── env.config.ts          # Environment loader
│   └── modules/
│       └── mail/
│           ├── mail.service.ts    # Email logic
│           ├── utils/
│           │   └── helpers.util.ts # Handlebars helpers
│           └── templates/
│               └── email-template.hbs # Example HTML email
├── .env                           # Actual environment config (not committed)
├── .env.example                   # Sample environment template (safe to share)
├── .gitignore                     # Ignores dist, node_modules, etc.
├── .eslintrc.js                   # ESLint config
├── .prettierrc                    # Prettier config
├── build.copy.js                  # Optional script for copying files after build
├── nodemon.json                   # Nodemon config (optional)
├── tsconfig.json                  # TypeScript compiler options
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧪 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/tejasmahajan02/express-nodemailer.git
cd express-nodemailer
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

**.env**

```env
NODE_PORT=3000
NODE_ORIGIN=http://localhost:3000

SMTP_HOST=mail.example.com
SMTP_PORT=587
SMTP_USER=me
SMTP_PASS=pass
SMTP_FROM="Nodemailer <no-reply@example.com>"
```

### 3. Run in Development

```bash
npm run dev
```

### 4. Build & Run in Production

```bash
npm run build
npm start
```

---

## 📤 Email Usage

Emails are handled via `mail.service.ts` using a Handlebars template. The example uses `email-template.hbs` and is compiled like so:

```ts
import { mailService } from './modules/mail/mail.service';

mailService.resetPassword(
  'test@example.com',
  'https://example.com/reset-password',
);
```

---

## 🔧 Available Scripts

| Script          | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm run dev`   | Run TypeScript compiler + nodemon (live reload) |
| `npm run build` | Compile TypeScript to `dist/` and copy files    |
| `npm start`     | Start compiled app from `dist/server.js`        |

---

## 🧹 Code Quality

Lint and format your code with:

```bash
npx eslint . --fix
npx prettier --write .
```

---

## 📦 Stack

* Node.js
* Express
* TypeScript
* Nodemailer
* Handlebars
* dotenv
* ESLint + Prettier
* Nodemon + Concurrently

---

## 📄 License

This project is licensed under the **ISC License**.