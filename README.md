# ✨ Full-Stack E-Commerce App (Mobile + Admin + API)

A **production-ready full-stack E-Commerce application** consisting of a Mobile App, Admin Dashboard, and Backend API built with modern technologies and best practices.





## ✨ Highlights

📱 Fully Functional E-Commerce Mobile App (React Native + Expo)  
🔐 Secure Authentication with Clerk (Google & Apple Sign-In)  
🛒 Cart, Favorites, Checkout & Orders Flow  
💳 Stripe-Powered Payments  
🗺️ Address Management System  
🖼️ Product Image Slider  
⚡ Data Fetching & Caching with TanStack Query  

🏪 Admin Dashboard  
📊 Live Analytics Dashboard  
🛠️ Product Management (CRUD, pricing, image handling)  
📦 Order Management  
👥 Customer Management  
🛂 Admin-only Protected Routes  

⚙️ Backend REST API (Node.js + Express)  
🔑 Role-based Authentication & Authorization  
📦 Background Jobs with Inngest  
🖼️ Cloudinary Image Uploads  
🛡️ Sentry Error Monitoring  
🚀 Deployment on Sevalla  

🧰 Developer Workflow  
 
🔍 CodeRabbit PR Analysis (Security, Quality, Optimization)

---

## 🧪 Environment Variables

### Backend (`/backend/.env`)
```env
NODE_ENV=development
PORT=3000

DB_URL=<YOUR_DB_URL>

CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>

INNGEST_SIGNING_KEY=<YOUR_INNGEST_SIGNING_KEY>

CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>

ADMIN_EMAIL=<YOUR_ADMIN_EMAIL>

CLIENT_URL=http://localhost:5173
```

### Admin Dashboard (`/admin/.env`)
```env
VITE_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
VITE_API_URL=http://localhost:3000/api

VITE_SENTRY_DSN=<YOUR_SENTRY_DSN>
```

### Mobile App (`/mobile/.env`)
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>

SENTRY_AUTH_TOKEN=<YOUR_SENTRY_DSN>
```

---

## ▶️ Run Locally

### Start Backend
```bash
cd backend
npm install
npm run dev
```

### Start Admin Dashboard
```bash
cd admin
npm install
npm run dev
```

### Start Mobile App
```bash
cd mobile
npm install
npx expo start
```

Scan the QR code using **Expo Go** on your mobile device.

---

## 🏗️ Tech Stack

**Mobile App**
- React Native
- Expo
- TanStack Query
- Clerk
- Stripe
- Sentry

**Admin Dashboard**
- React
- Vite
- Clerk
- Sentry

**Backend**
- Node.js
- Express
- Clerk
- Inngest
- Cloudinary
- Stripe
- Sentry

**DevOps & Tools**
- Git & GitHub
- CodeRabbit
- Sevalla

---

## 📂 Project Structure
```
root
├── backend
├── admin
└── mobile
```

---

## 👨‍💻 Author

**Nishan Bhattarai**  
Computer Engineering Student  
IOE – ERC, Dharan, Nepal 🇳🇵  



⭐ If you like this project, give it a star on GitHub!
