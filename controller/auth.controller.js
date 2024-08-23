import { AuthModel } from "../models/authSchema.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (id) => jwt.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

export const Register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "Please fill in all the required fields" })

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

export const LogIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Please fill in all the required fields" })

        const user = await AuthModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "Invalid email address" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

        const token = generateToken(user._id);
        res.setHeader('Authorization', `Bearer ${token}`);
        return res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error during login" });
    }
}