import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../config/generateToken.js";

// POST /api/auth/signup
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ❌ DO NOT HASH HERE (mongoose does it)
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Signup failed" });
  }
};

// POST /api/auth/login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Login failed" });
  }
};

// GET /api/auth/trainers
// @desc    Get all trainers (for user dashboard)
export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await User.find({ role: "trainer" })
      .select("_id name email"); // keep it minimal

    res.status(200).json(trainers);
  } catch (error) {
    console.error("Get trainers error:", error.message);
    res.status(500).json({
      message: "Failed to fetch trainers",
    });
  }
};
