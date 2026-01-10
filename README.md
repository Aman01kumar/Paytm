# Paytm Main – Payments App

Paytm Main is a full-stack payments application that allows users to securely sign up, manage accounts, view balances, and transfer money to other users.  
The project is built using a **Node.js + Express backend** and a **React + Vite frontend**.

---

## 🚀 Features

- **User Authentication**
  - Signup and Signin using JWT-based authentication
- **Account Management**
  - Automatic account creation on signup
  - Update user profile details
- **Balance Management**
  - View current account balance
  - Transfer money between users
- **User Search**
  - Search users to send money
- **Secure APIs**
  - Protected routes using authentication middleware

---

## 🏗 Project Structure

```text
paytm-main/
├── backend/
│   ├── routes/
│   │   ├── user.js        # User-related routes (signup, signin, etc.)
│   │   ├── account.js     # Account-related routes (balance, transfer)
│   │   └── index.js       # Main router entry
│   ├── middleware.js      # JWT verification middleware
│   ├── db.js              # MongoDB schema and connection
│   ├── config.js          # Secrets and configurations
│   └── index.js           # Server entry point
├── frontend/
│   ├── src/
│   │   ├── pages/         # Page components (Dashboard, SendMoney, etc.)
│   │   ├── components/    # Reusable UI components
│   │   └── App.jsx        # Main React component
│   ├── package.json
│   └── vite.config.js
└── README.md
Copy code
```
---------------------------------------------------

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---------------------------------------------------------

### Frontend
- React
- Vite
- JavaScript
- CSS

-----------------------------------------------------------

### Tools
- Git & GitHub
- Postman

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

-----------------------------------------------

## 📦 Installation

 Clone the repository

- git clone https://github.com/your-username/paytm-main.git
- cd paytm-main


▶️ Running the Backend

- cd backend
- npm install
- node index.js

Backend runs at:
   [http://localhost:3000](https://cloud.mongodb.com/v2/68ca7eb8c04b5f76d50564df#/explorer/68ca7ee6edcf2948f0388200/mydatabase/accounts/find)


▶️ Running the Frontend

- cd frontend
- npm install
- npm run dev

Frontend runs at:
- http://localhost:5173

-------------------------------------------------------------

🔍 API Overview

Authentication
- POST /api/v1/user/signup
- POST /api/v1/user/signin

Account
- GET /api/v1/account/balance
- POST /api/v1/account/transfer

Users
- GET /api/v1/user/bulk


---------------------------------------------------------------

## 🧪 Testing

- Use **Postman** for backend API testing
- Use a browser to test the frontend
- Ensure the backend server is running before starting the frontend

-----------------------------------------------------------------

## 📌 Notes

- JWT tokens must be regenerated after backend restart
- User accounts are created automatically on signup
- Authentication middleware protects sensitive routes

----------------------------------------------------------------------

## 👤 Author

**Aman Kumar**  
Computer Science Undergraduate  
Full-Stack Developer (MERN)
