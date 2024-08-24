import jwt from 'jsonwebtoken'
import { ENV_VARS } from '../config/envVars.js'

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId: userId }, ENV_VARS.JWT_SECRET, { expiresIn: ENV_VARS.JWT_EXPIRES_IN })

    res.cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 10000,
        httpOnly: true,
        sameSite: "strict",
    })

    return token
}