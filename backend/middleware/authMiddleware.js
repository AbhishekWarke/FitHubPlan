import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  try {
    // Expect header: Authorization: Bearer <token>
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next(); // ✅ IMPORTANT: only called once
    } else {
      return res.status(401).json({ message: "No token, authorization denied" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

export const isTrainer = (req, res, next) => {
  if (req.user && req.user.role === "trainer") {
    next();
  } else {
    return res.status(403).json({
      message: "Trainer access only",
    });
  }
};

export const isUser = (req, res, next) => {
  if (req.user && req.user.role === "user") {
    next();
  } else {
    return res.status(403).json({
      message: "User access only",
    });
  }
};
