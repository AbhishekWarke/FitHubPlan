import express from "express";
import { signup, login, getAllTrainers } from "../controller/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// 🔒 TEST PROTECTED ROUTE
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

// 🔓 Get all trainers (for users)
router.get("/trainers", protect, getAllTrainers);

export default router;
