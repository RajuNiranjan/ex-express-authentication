import jwt from "jsonwebtoken";
import { ENV_VAR } from "../config/envVariables.js";

export const VerifyToken = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, ENV_VAR.JWT_SECRET);
    req.user = decoded;
    console.log(req.user);
    return res.status(200).json({ message: "user verified", user: req.user });
  } catch (error) {
    console.error(error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res
        .status(500)
        .json({ message: "Internal server error during token verification" });
    }
  }
};
