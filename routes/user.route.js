import express from "express";
import { VerifyToken } from "../utils/verifyToken.js";
import { getUser } from "../controllers/auth.controller.js";

export const userRouter = express.Router();

userRouter.get("/", VerifyToken);
userRouter.get("/:id", getUser);
