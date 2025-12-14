import "dotenv/config"; // 🔥 MUST be first, no exceptions

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import planRoutes from "./routes/planRoutes.js";


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);


// Health check route
app.get("/", (req, res) => {
  res.json({ message: "FitPlanHub API is running" });
});

const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB first, THEN start server
const startServer = async () => {
  try {
    // Wait for DB connection
    await connectDB();
    
    // Start server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
      console.log(`✅ JWT_SECRET loaded: ${!!process.env.JWT_SECRET}`);
      console.log(`✅ MongoDB URI configured: ${!!process.env.MONGO_URI}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

// Start the server
startServer();