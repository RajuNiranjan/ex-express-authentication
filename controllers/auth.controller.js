import { UserModel } from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const Register = async (req, res) => {
    try {
        const { userName, email, password } = req.body

        if (!email || !password || !userName) return res.status(400).json({ success: false, message: "please fill all the fields" })

        const existingUser = await UserModel.findOne({ $or: [{ email: email }, { userName: userName }] })

        if (existingUser) return res.status(404).json({ message: "user already existed" })

        const salt = await bcrypt.genSalt(12)
        const hashPassword = await bcrypt.hash(password, salt)

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        const newUser = new UserModel({
            email,
            userName,
            password: hashPassword,
            image
        })

        generateTokenAndSetCookie(newUser._id, res)
        await newUser.save()
        const userResponse = {
            _id: newUser._id,
            userName: newUser.userName,
            email: newUser.email,
            image: newUser.image
        }

        res.status(201).json({ message: "user registerd successfully", user: userResponse })

    } catch (error) {
        console.log(error);
        return res.state(500).json('Internal server error during Register')
    }
}

export const LogOut = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}