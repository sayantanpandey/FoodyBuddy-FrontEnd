# 🍽️ FoodyBuddy

FoodyBuddy is a full-stack food ordering web application built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.  
It includes a **User Panel**, an **Admin Dashboard**, and a secure backend API with JWT authentication, Stripe payments, and MongoDB data storage.

---

## 🚀 Features

- 🍕 Browse and order food dynamically  
- 🛒 Add to Cart and Checkout functionality  
- 🔐 Secure user authentication (JWT)  
- 💳 Stripe payment integration  
- 📦 MongoDB for persistent data  
- 🧑‍💼 Admin dashboard for managing foods, orders, and users  
- ⚙️ Environment-based configuration for easy setup  

---

## 🧭 Project Structure

FoodyBuddy/
├── user/ # User Frontend (Vite + React)
├── admin/ # Admin Dashboard (Vite + React)
└── server/ # Backend (Express + MongoDB)

---

## ⚙️ Installation & Setup Guide

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/FoodyBuddy-FrontEnd.git
cd FoodyBuddy-FrontEnd
```

### 2️⃣ Setup the User Frontend
```
cd user
npm install
```
Create a .env file inside the user folder and add:

VITE_BACKEND_URL="http://localhost:4000"

Run the frontend:
```
npm run dev
```

Frontend runs by default at 👉 http://localhost:5173

3️⃣ Setup the Backend Server
Open another terminal tab:
```
cd server
npm install
```

Create a .env file inside the server folder with the following variables:
```
JWT_SECRET="your_jwt_secret_key"
PORT="4000"
STRIPE_SECRET_KEY="your_stripe_secret_key"
MONGO_URL="your_mongodb_connection_string"
FRONTEND_URL="http://localhost:5173"
```
Then start the backend:
```
npm run dev
```
Backend runs at 👉 http://localhost:4000

4️⃣ Setup the Admin Dashboard
Open a new terminal tab:
```
cd admin
npm install
```
Then start the admin dashboard:
```
npm run dev
```

Admin runs by default at 👉 http://localhost:5174
 (or next available port)

 🔑 Environment Variables — Explained

 | Variable            | Where       | Description                           |
| ------------------- | ----------- | ------------------------------------- |
| `VITE_BACKEND_URL`  | user/.env   | Base URL of backend API               |
| `JWT_SECRET`        | server/.env | Secret key used for JWT token signing |
| `PORT`              | server/.env | Backend port (default: 4000)          |
| `STRIPE_SECRET_KEY` | server/.env | Stripe key for payments               |
| `MONGO_URL`         | server/.env | MongoDB Atlas connection string       |
| `FRONTEND_URL`      | server/.env | CORS-allowed frontend URL             |


🧠 How to Get Your Own Secrets
🪄 Generate a JWT Secret

Run this in your terminal:
```
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## Copy the generated string into your .env file as JWT_SECRET.

🧩 Get a Stripe Secret Key
1. Go to https://dashboard.stripe.com
2. Create or log in to your account
3. Navigate to Developers → API keys
4. Copy your Secret key (e.g. sk_test_...) and paste it in .env as STRIPE_SECRET_KEY.

🍃 Get a MongoDB Connection URL
1. Go to https://cloud.mongodb.com
2. Create a free cluster
3. Click “Connect → Connect your application”
4. Copy the connection string, which looks like:
```
mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/food-del
```
5. Replace <username> and <password> with your own credentials.

## 🧩 Tech Stack

### 🖥️ Frontend
- React (Vite)
- Context API
- Axios
- CSS / TailwindCSS / Material UI

### 🛠️ Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Stripe Payments
- CORS / dotenv / bcrypt

---

## 🧪 Development Notes

- Make sure your **backend** is running before starting the **frontend** or **admin dashboard**.
- Ensure your **MongoDB Atlas cluster** is active and accessible.
- To test image uploads, verify that files are appearing in `/server/uploads`.
- **CORS** is already enabled in the backend.


## ⭐ Contribute

Feel free to fork this repo, submit issues, or create pull requests to improve FoodyBuddy.
Every contribution is welcome 💙
