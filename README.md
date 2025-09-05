# UX4G Login + Captcha Demo

This is a demo project using **React (Vite)**, **Express (SSR)**, and **UX4G Design System**.  
It includes:
- User login with email & password
- Puzzle captcha verification
- Redirect to home page after successful login
- Basic SSR setup with Express (`^4.18.2`)
- UI styled with UX4G CDN

---

## 🚀 Tech Stack
- React (Vite)
- Express.js (4.18.2)
- Node.js (v18+ recommended)
- UX4G CSS & JS (via CDN)

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Utkarsh7545/Google-reCAPTCHA-SSR.git
cd Google-reCAPTCHA-SSR
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server (Vite)
```bash
npm run dev
```

### 4. Start the Express SSR server
```bash
node server.js
```

### 5. Open in Browser
Go to: [http://localhost:5173](http://localhost:5173) (Vite)  
or: [http://localhost:3000](http://localhost:3000) (SSR via Express)

---

## 🔑 Notes
- Express is downgraded to `^4.18.2` for compatibility.
- UX4G CSS/JS are loaded via CDN:
  ```html
  <link href="https://cdn.ux4g.gov.in/UX4G@2.0.8/css/ux4g-min.css" rel="stylesheet">
  <script src="https://cdn.ux4g.gov.in/UX4G@2.0.8/js/ux4g.min.js"></script>
  ```
- Replace placeholder banners with real images if required.

---

## 📜 License
MIT License
