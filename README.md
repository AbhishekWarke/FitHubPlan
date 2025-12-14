# FitHubPlan
FitPlanHub is a MERN-based fitness platform that connects users with professional trainers and structured fitness plans. Trainers can securely create and manage plans, while users can explore, follow trainers &amp;  access purchased plans. The platform uses role-based authentication,  &amp; a clean, modern UI to ensure a scalable and real-world experience.

🚀 Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API
- Bootstrap + Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt

 Roles in the System

### Trainer
- Create, update, and delete fitness plans
- View and manage only their own plans

### User
- Browse all available fitness plans
- Follow and unfollow trainers
- Purchase plans (payment simulated)
- Access purchased plans from My Plans section

### Public
- View landing pages
- Access Weight Loss page with BMI calculator

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/FitPlanHub.git
cd FitPlanHub

2️⃣ Backend Setup
cd backend
npm install


Start Backend Server
nodemon server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


## 📦 Project Dependencies

All required dependencies are already defined inside the respective
`package.json` files. Running `npm install` will install everything automatically.

### Frontend Libraries
- react-router-dom (Routing & navigation)
- react-icons (Icons)
- bootstrap (UI styling)
- axios (API requests)

### Backend Libraries
- express (Server framework)
- mongoose (MongoDB ODM)
- jsonwebtoken (Authentication)
- bcryptjs (Password hashing)
- cors (Cross-origin support)
- dotenv (Environment variables)
