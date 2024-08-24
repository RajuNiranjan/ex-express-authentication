import express from 'express'
import { LogIn, LogOut, Register } from '../controllers/auth.controller.js'

export const authRouter = express.Router()

authRouter.post('/register', Register)
authRouter.post('/login', LogIn)
authRouter.post('/logout', LogOut)
authRouter.post('/register')