# Srujan Tirunagari Portfolio - Deployment & Stack Guide

## What This Project Is
A modern, interactive React + TypeScript portfolio app, powered by a GraphQL backend, showcasing resume data, skills, and projects. The app is fully dynamic and deployable for free.

---

## Tech Stack
- **Frontend:** React 19, TypeScript, Vite, Framer Motion, Apollo Client, React Router
- **Backend:** Node.js, Apollo Server (GraphQL), serves resume data from JSON
- **Styling:** Modern CSS, responsive design

---

## Deployment Overview

### 1. Backend (GraphQL API)
- **Service:** [Render.com](https://render.com)
- **Type:** Web Service
- **Root Directory:** `server`
- **Build Command:** `npm install`
- **Start Command:** `node index.js`
- **Public Endpoint:**
  - `https://srujan-resume-2025-2.onrender.com/graphql`
- **Purpose:** Serves resume data (experience, skills, education) via GraphQL API to the frontend.

### 2. Frontend (React App)
- **Service:** [Vercel.com](https://vercel.com)
- **Type:** Static Site (Vite/React)
- **Build Command:** `vite build`
- **Output Directory:** `dist`
- **API Endpoint Used:**
  - Apollo Client is configured to use the Render GraphQL endpoint above.
- **Purpose:** Public portfolio site for HR, recruiters, and anyone to view.

---

## How to Deploy (Summary)

### Backend (Render)
1. Push your code to GitHub.
2. Create a new Web Service on Render.
3. Set root directory to `server`, build command to `npm install`, start command to `node index.js`.
4. Deploy and copy the public GraphQL endpoint.

### Frontend (Vercel)
1. Push your frontend code to GitHub.
2. Import the repo into Vercel.
3. Set build command to `vite build`, output directory to `dist`.
4. In your `App.tsx`, set Apollo Client URI to your Render GraphQL endpoint.
5. Deploy and share your Vercel site link.

---

## Features
- Dynamic resume data via GraphQL
- Modern, animated UI
- Project detail routing
- Downloadable resume
- Accessible and responsive
- Free to deploy and share

---

## Useful Links
- [Render.com Docs](https://render.com/docs)
- [Vercel.com Docs](https://vercel.com/docs)
- [Apollo Client Docs](https://www.apollographql.com/docs/react/)

---

**Contact:** srujankt@gmail.com

---

*This README documents the deployment and stack as of July 2025.*
