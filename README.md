
# 💰 Expense Tracker

A full-stack **Expense Tracker** web application built with the **MERN stack** to help users manage their personal finances effectively. Users can add, edit, delete, filter, and toggle expenses as done/undone. The app also features user authentication with secure login and signup functionality.

---

## 🚀 Features

- 📝 Add new expenses
- ✏️ Edit existing expenses
- 🗑️ Delete expenses
- 🔍 Filter expenses
- ✅ Mark expenses as done/undone
- 👤 User authentication (Login / Signup)
- 🔐 JWT-based protected routes
- 📁 Persistent state using Redux Persist

---

## 🧱 Tech Stack

### 📦 Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** + **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment variables
- **cookie-parser** for managing tokens in cookies
- **CORS** enabled

### 🎨 Frontend
- **React 19** + **Vite**
- **Redux Toolkit** + **Redux Persist**
- **React Router DOM** (for routing)
- **TailwindCSS** + **ShadCN UI** + **Lucide Icons**
- **Axios** for HTTP requests
- **ESLint** for linting

---

## 🗂️ Folder Structure

```
Expense-tracker/
│
├── backend/                 # Express.js backend
│   ├── controllers/         # Route logic
│   ├── database/            # database connection
│   ├── middleware/          # authentication logic
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   └── index.js             # Entry point
│
└── frontend/                # React frontend
    ├── src/
    │   ├── components/      # Reusable components
    │   ├── hooks/           # custom hooks
    │   ├── lib/             # lib 
    │   ├── redux/           # Redux slices/store
    │   └── App.jsx          # Root component
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js & npm installed
- MongoDB Atlas account

---

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_atlas_connection_string
SECRET_KEY=your_jwt_secret
PORT=5000
```

Run the server:
```bash
npm run dev
```

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔒 Authentication

- Passwords are hashed using `bcryptjs`
- JWT tokens are stored as **HTTP-only cookies**
- Middleware `isAuthenticated` checks token validity on protected routes

---

## 📦 API Endpoints (Examples)

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | `/signup`        | Register a new user   |
| POST   | `/login`         | Log in a user         |
| GET    | `/expenses`      | Get all expenses      |
| POST   | `/expenses`      | Add new expense       |
| PUT    | `/expenses/:id`  | Edit expense          |
| DELETE | `/expenses/:id`  | Delete expense        |

---

