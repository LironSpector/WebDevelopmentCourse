# WebDevelopmentCourse

A collection of web projects built while taking the **"The Web Developer Bootcamp 2025" Udemy course**. Folders are named by course section (HTML/CSS, Bootstrap, JS/DOM, AJAX, Node/Express, Mongo/Mongoose, Auth, React, etc.). Each folder is a separate project.

## Getting Started
- Most front‑end projects open by loading `index.html` in a browser.
- Node/Express apps: `cd` into the project folder, then:
  ```bash
  npm install
  node index.js   # or: node app.js / nodemon
  ```
- React apps: `npm install && npm run dev` (Vite).
- Some projects use **MongoDB** (local or Atlas). Update connection strings and environment variables as needed.

---

## ⭐ Big Project: **YelpCamp**
Full‑stack app (Node.js **Express** + **MongoDB/Mongoose**) featuring:
- **Managing Campgrounds & Reviews**: CRUD with controllers and middleware, allowing to add, edit, delete and view campgrounds, as well as rate campgrounds of others, among other things
- **Auth**: register/login, sessions, flash messages
- **Authorization**: only the owner of a campground can perform edit/delete actions on that campground
- **Images**: upload & store via **Cloudinary**
- **Validation & Security**: **Joi** schemas, **helmet**, **express‑mongo‑sanitize**, **sanitize‑html**
- Production‑ready structure (controllers/models/routes, error handling and more)

*(See the later "YelpCamp" sections for the most complete version)*

---

## Other Example Projects
- **Mongoose Relationships + Express (Section 45)**  
  A small CRUD app modeling **Farms and Products** with relational refs, nested routes, and EJS views. Includes seed data and REST patterns.

- **Auth From Scratch (Section 50)**  
  Authentication demos with **bcrypt**, sessions, and protected routes. Includes login/register pages and a simple "secret" area.

- **Fancy Todo List (Section 73, React + Vite)**  
  An application using **React**, **Material UI**, data hooks, and **IndexedDB (Dexie)** for offline‑friendly storage. Includes modular components and custom hooks.

---
