# Project Name: course-manager-next-app

A modern web application for managing courses. Users can browse courses, view details, and registered users can add their own courses. Built with **Next.js 16**, **MongoDB**, **Tailwind CSS**, and **Firebase Authentication** **Express js**.

---

# Purpose

Course Manager Next.js is a simple platform to browse, view, and manage online courses. Authenticated users can add their own courses, while the app demonstrates Next.js, MongoDB, Firebase Auth, and responsive Tailwind CSS design with dynamic routing and user-friendly features.This project serves both as a learning tool for developers and as a functional course management system that can be extended for real-world applications.

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Getting Started](#getting-started)  
- [Folder Structure](#folder-structure)  
- [Environment Variables](#environment-variables)  
- [Line Link]
- [Git Hub Link]
- [dependencies and devDependencies]

---

## Features

- Browse courses by category: Backend, Frontend, Fullstack, Design, Data Science, Marketing, Cloud, Mobile.  
- View course details: title, description, syllabus, duration, level, instructor, price, and image.  
- User Authentication with **Firebase** (Email/Password & Google).  
- Protected pages: Add Course and Manage courses (only logged-in users).  
- Add new courses dynamically, stored in a separate `user_courses` collection.  
- Manage courses: view, delete user-added courses.  
- Responsive design using **Tailwind CSS**.  
- SweetAlert2 for notifications and confirmation dialogs.  
- Fallback images for missing or invalid course images.  

---

## Technologies Used

- [Next.js 16](https://nextjs.org/) (App Router)  
- [React](https://reactjs.org/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
- [Firebase Authentication](https://firebase.google.com/docs/auth)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [SweetAlert2](https://sweetalert2.github.io/)  
- [Axios](https://axios-http.com/) for API requests  

---

## Live Link :
## GitHub Link : https://github.com/theporosh/course-manager-next-app.git

## Render (Server Live Link) : https://render-express-deployment-oo2h.onrender.com/
## GitHub Link (Server for Render) : https://github.com/theporosh/render-express-deployment.git

## Getting Started

1. **Clone the repository**


git clone https://github.com/theporosh/course-manager-next-app.git
cd \Project

2. **Install dependencies**
npm install

3. **Set up environment variables**

4. **Run the development server**

npm run dev = client
npm run server:dev = server

Run this in VS code different in two terminal

Open http://localhost:3000
 to view the app.


## "dependencies": {
    "axios": "^1.13.2",
    "concurrently": "^9.2.1",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongodb": "^7.0.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0",
    "react-icons": "^5.5.0",
    "sweetalert2": "^11.26.3",
    "swiper": "^12.0.3"
  }, 


  ## "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.0.3",
    "nodemon": "^3.1.11",
    "tailwindcss": "^4"
  }

