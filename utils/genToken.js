import jwt from "jsonwebtoken";
import { ENV_VAR } from "../config/envVariables.js";

export const GenToken = (id) => {
  try {
    const token = jwt.sign({ userId: id }, ENV_VAR.JWT_SECRET, {
      expiresIn: ENV_VAR.JWT_EXPIRES_IN,
    });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};
