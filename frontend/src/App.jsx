import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";

// Trainer dashboard imports
import DashboardHome from "./dashboards/trainer/DashboardHome";
import CreatePlan from "./dashboards/trainer/CreatePlan/CreatePlan";
import ManagePlans from "./dashboards/trainer/ManagePlan/ManagePlans";

// User dashboard imports
import UserDashboard from "./dashboards/user/UserDashboard";
import MyPlans from "./dashboards/user/MyPlan/MyPlans";
import PlanAccess from "./dashboards/user/PlanAccess";
import Trainers from "./dashboards/user/Trainer/Trainers";

// ✅ NEW: Weight Loss Page
import WeightLoss from "./pages/weight-loss/WeightLoss";

// Route guards
import TrainerRoute from "./routes/TrainerRoute";
import UserRoute from "./routes/UserRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ✅ NEW: Public Weight Loss Route */}
        <Route path="/weight-loss" element={<WeightLoss />} />

        {/* 🏋️‍♂️ Protected Trainer Routes */}
        <Route
          path="/trainer/dashboard"
          element={
            <TrainerRoute>
              <DashboardHome />
            </TrainerRoute>
          }
        />

        <Route
          path="/trainer/create"
          element={
            <TrainerRoute>
              <CreatePlan />
            </TrainerRoute>
          }
        />

        <Route
          path="/trainer/manage"
          element={
            <TrainerRoute>
              <ManagePlans />
            </TrainerRoute>
          }
        />

        {/* 👤 Protected User Routes */}
        <Route
          path="/user/dashboard"
          element={
            <UserRoute>
              <UserDashboard />
            </UserRoute>
          }
        />

        <Route
          path="/user/my-plans"
          element={
            <UserRoute>
              <MyPlans />
            </UserRoute>
          }
        />

        <Route
          path="/user/plan/:id"
          element={
            <UserRoute>
              <PlanAccess />
            </UserRoute>
          }
        />

        <Route
          path="/user/trainers"
          element={
            <UserRoute>
              <Trainers />
            </UserRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
