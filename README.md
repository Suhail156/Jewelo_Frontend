# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 💎 Jewellery Product Management Frontend

A responsive and modern frontend built with **React.js**, styled using **Material-UI (MUI)** and **Tailwind CSS**, for managing jewellery products. Supports user authentication with JWT, and CRUD operations with file upload and server-side pagination.

---

## ✨ Features

### 🔐 Authentication
- Login page with form validation
- JWT-based authentication
- Auth token stored in `localStorage`
- Route protection for authenticated users

### 🛍️ Product Management
- **Create**, **Read**, **Update**, **Delete** jewellery products
- Product form includes:
  - Name, Price, Stock, Description (Text/Number Inputs)
  - Category selection (Autocomplete)
  - Manufacturing Date (Date Picker)
  - Single image upload (with preview)
- Clean and modern UI

### 🧰 Additional Features
- Search products by name
- Sort products by date, price, etc.
- Server-side **pagination**
- Toast notifications for actions (success/error)

---

## 🛠️ Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React.js                    |
| Styling   | Tailwind CSS, MUI           |
| Routing   | React Router DOM            |
| HTTP      | Axios                       |
| State     | React Hooks (useState, useEffect) |
| Forms     | MUI TextField, Select, DatePicker |
| Alerts    | react-hot-toast             |

---

## 📦 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/jewellery-frontend.git
cd jewellery-frontend

Install Dependencies
npm install

Run the Development Server
npm run dev


 Configuration
 VITE_API_URL=http://localhost:3562

 Pages & Routes
| Route               | Description                  |
| ------------------- | ---------------------------- |
| `/`                 | Home page with products list |
| `/login`            | Login page                   |
| `/add-product`      | Add new product form         |
| `/edit-product/:id` | Edit product form            |
| `/product/:id`      | View single product details  |


Folder Structure
frontend/
├── components/           
├── pages/                 
├── Services/             
├── App.jsx
├── main.jsx
└── tailwind.config.js
