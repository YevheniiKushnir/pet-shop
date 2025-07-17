
# 🐾 Pet Shop – Fullstack Web Application

A fullstack pet shop application built with **React**, **Tailwind CSS**, **Redux Toolkit** on the frontend, and **Express**, **Sequelize**, and **SQLite** on the backend.

🌐 **Live App**: [https://pet-shop-1.netlify.app/](https://pet-shop-1.netlify.app/)

---

## 📁 Project Structure

```
root/
│
├── frontend/       → React + Vite application
├── backend/        → Express.js server with SQLite and Sequelize
└── package.json    → Root scripts for easier setup and development
```

---

## 🚀 Tech Stack

### ✅ Frontend
- **React 19**
- **React Router v7**
- **Redux Toolkit**
- **React Hook Form**
- **Tailwind CSS**
- **Axios**
- **clsx**
- **react-remove-scroll**
- **Vite**

### ✅ Backend
- **Express.js**
- **Sequelize (ORM)**
- **SQLite3**
- **CORS**

### ✅ Dev Tools
- **Concurrently** — to run frontend and backend together

---

## 🛠 Installation & Local Development

Clone the project:

```bash
git clone https://github.com/YevheniiKushnir/pet-shop.git
cd pet-shop
```

### 📦 Install dependencies

Install only root dependency (`concurrently`):

```bash
npm install
```

Install frontend & backend dependencies:

```bash
npm run init
```

### ▶️ Run the app locally

Start both frontend and backend servers simultaneously:

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3333` (or your custom port)

---

## 🌍 Deployment

- **Frontend** hosted on [Netlify](https://www.netlify.com/)
- **Backend** hosted on [Render](https://render.com/)

---

## 📎 Notes

- Frontend is configured with Vite proxy to forward `/api` requests to backend during development.
- Environment-based configuration is used to switch between local and deployed URLs.
- Backend uses SQLite for simplicity and Sequelize for data modeling.

---

## 📬 Feedback

Feel free to open issues or pull requests for suggestions, improvements, or bug fixes.

---

## 📄 License

MIT – use it freely for personal or commercial projects.
