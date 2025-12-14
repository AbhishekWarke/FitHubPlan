console.log("Starting planController.js");

import Plan from "../models/Plan.js";

console.log("Plan imported:", Plan);

// =====================
// CREATE PLAN (TRAINER)
// =====================
export const createPlan = async (req, res) => {
  try {
    const { title, description, price, duration } = req.body;

    // Basic validation
    if (!title || !description || price === undefined || !duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const plan = await Plan.create({
      title,
      description,
      price,
      duration,
      trainer: req.user._id,
    });

    res.status(201).json(plan);
  } catch (error) {
    console.error("Create plan error:", error.message);
    res.status(500).json({ message: "Server error while creating plan" });
  }
};

console.log("createPlan exported");

// =====================
// GET TRAINER'S OWN PLANS
// =====================
export const getMyPlans = async (req, res) => {
  try {
    const plans = await Plan.find({
      trainer: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(plans);
  } catch (error) {
    console.error("Get my plans error:", error.message);
    res.status(500).json({
      message: "Server error while fetching trainer plans",
    });
  }
};

console.log("getMyPlans exported");

// =====================
// GET ALL PLANS (USER ONLY)
// =====================
export const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find()
      .populate("trainer", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(plans);
  } catch (error) {
    console.error("Get all plans error:", error.message);
    res.status(500).json({
      message: "Server error while fetching plans",
    });
  }
};

// =====================
// GET PLANS BY TRAINER IDS (USER)
// =====================
export const getPlansByTrainers = async (req, res) => {
  try {
    const { trainerIds } = req.body;

    if (!trainerIds || !Array.isArray(trainerIds) || trainerIds.length === 0) {
      return res.status(400).json({
        message: "trainerIds array is required",
      });
    }

    const plans = await Plan.find({
      trainer: { $in: trainerIds },
    })
      .populate("trainer", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(plans);
  } catch (error) {
    console.error("Get plans by trainers error:", error.message);
    res.status(500).json({
      message: "Server error while fetching plans by trainers",
    });
  }
};

// =====================
// UPDATE PLAN (TRAINER)
// =====================
export const updatePlan = async (req, res) => {
  try {
    const { title, description, price, duration } = req.body;

    const plan = await Plan.findOne({
      _id: req.params.id,
      trainer: req.user._id,
    });

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found or not authorized",
      });
    }

    plan.title = title ?? plan.title;
    plan.description = description ?? plan.description;
    plan.price = price ?? plan.price;
    plan.duration = duration ?? plan.duration;

    const updatedPlan = await plan.save();

    res.status(200).json(updatedPlan);
  } catch (error) {
    console.error("Update plan error:", error.message);
    res.status(500).json({
      message: "Server error while updating plan",
    });
  }
};

// =====================
// DELETE PLAN (TRAINER)
// =====================
export const deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findOne({
      _id: req.params.id,
      trainer: req.user._id,
    });

    if (!plan) {
      return res.status(404).json({
        message: "Plan not found or not authorized",
      });
    }

    await plan.deleteOne();

    res.status(200).json({
      message: "Plan deleted successfully",
    });
  } catch (error) {
    console.error("Delete plan error:", error.message);
    res.status(500).json({
      message: "Server error while deleting plan",
    });
  }
};
