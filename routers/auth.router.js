import express from 'express'
import { Register } from '../controller/auth.controller.js'

export const AuthRouter = express.Router()

AuthRouter.post('/register', Register)