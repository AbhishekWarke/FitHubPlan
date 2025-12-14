import express from "express";
import {
  createPlan,
  getMyPlans,
  updatePlan,
  deletePlan,
  getAllPlans,
  getPlansByTrainers, // ✅ NEW
} from "../controller/planController.js";

import { protect, isTrainer, isUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// =====================
// USER ONLY - VIEW ALL PLANS
// =====================
router.get("/", protect, isUser, getAllPlans);

// =====================
// USER ONLY - PLANS BY FOLLOWED TRAINERS
// =====================
router.post("/by-trainers", protect, isUser, getPlansByTrainers);

// =====================
// TRAINER ROUTES
// =====================
router.post("/", protect, isTrainer, createPlan);
router.get("/my", protect, isTrainer, getMyPlans);
router.put("/:id", protect, isTrainer, updatePlan);
router.delete("/:id", protect, isTrainer, deletePlan);

export default router;
