import express from "express";
import { VerifyToken } from "../utils/verifyToken.js";

export const userRouter = express.Router();

userRouter.get("/", VerifyToken);
