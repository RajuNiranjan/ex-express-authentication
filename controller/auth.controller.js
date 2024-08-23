import { AuthModel } from "../models/authSchema.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (id) => jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

export const Register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const existingUser = await AuthModel.findOne({ email });

        if (existingUser) return res.status(403).json({ message: "Email already exists" });

        const hashedPassword = bcrypt.hashSync(password, 12);
        const newUser = await AuthModel.create({ email, password: hashedPassword });

        const token = generateToken(newUser._id);

        res.setHeader(`Authorization`, `Bearer ${token}`)

        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error during registration" });
    }
};