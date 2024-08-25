import express from "express";
import { LogIN, Register } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/register", Register);
authRouter.post("/login", LogIN);
