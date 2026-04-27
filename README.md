
---

# 🚀 UserHub – User Management & Avatar Upload App

Full-stack web application for managing users with avatar uploads. Supports both **local storage (Multer)** and **Google Drive integration**.

---

## 📌 Features

* ➕ Add new users
* 🖼 Upload avatars (Multer / Google Drive)
* 🔄 Update user avatar
* 📋 View user details
* 🎞 Slider UI for displaying users
* ✅ Form validation (Formik + Yup / Joi)
* 🔔 Notifications (React Toastify)
* 🔐 Password hashing (bcrypt)

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Redux Toolkit
* React Router
* Formik + Yup
* Axios
* Swiper
* SCSS

### Backend

* Node.js + Express
* MongoDB + Mongoose
* Multer (file upload)
* Google Drive API
* Joi validation
* bcryptjs

---

## 📂 Project Structure

```
client/
  src/
    components/
    hooks/
    store/
    pages/
server/
  controllers/
  services/
  models/
  routes/
  middleware/
  helper/
```

---

## ⚙️ Installation

### 1. Clone repository

```bash
git clone https://github.com/Avo444/UserHub.git
cd UserHub
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
MONGODB_URL=your_mongodb_connection

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_REDIRECT_URI=
GOOGLE_DRIVE_FOLDER_ID=
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd client
npm install
```

Create `.env` file:

```env
VITE_BACKEND_API=http://localhost:3000
VITE_DRIVE_API=https://drive.google.com/uc?id=
```

Run frontend:

```bash
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/users     | Get all users |
| POST   | /api/users     | Create user   |
| PATCH  | /api/users/:id | Update avatar |

---

## 📸 Upload Storage Options

### 1. Multer (Local)

* Files saved in `/uploads`
* Fast and simple

### 2. Google Drive

* Files stored in Drive
* Public access enabled
* Old avatar deleted on update

---

## ⚠️ Validation Rules

### Frontend (Yup)

* Name: 3–12 characters
* Email: valid format
* Password:

  * min 8 chars
  * uppercase, lowercase, number, symbol
* File:

  * max 5MB
  * jpeg/png/webp

### Backend (Joi)

* Same validation enforced server-side

---

## 🔐 Security

* Passwords hashed with bcrypt
* File type & size validation
* Duplicate email handling

---

## 👨‍💻 Author

Developed by **Avo**

---
