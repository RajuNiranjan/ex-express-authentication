import express from 'express'
import { LogOut, Register } from '../controllers/auth.controller.js'

export const authRouter = express.Router()

authRouter.post('/register', Register)
authRouter.post('/login')
authRouter.post('/logout', LogOut)
authRouter.post('/register')