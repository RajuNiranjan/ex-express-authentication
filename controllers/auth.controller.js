import { UserModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { GenToken } from "../utils/genToken.js";

export const Register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!email || !password || !userName)
      return res.status(400).json({ message: "please fill all the fields" });

    const existingUser = await UserModel.findOne({
      $or: [{ email }, { userName }],
    });

    if (existingUser)
      return res
        .status(403)
        .json({ message: "email  or username already exist" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ email, userName, password: hashPassword });

    await newUser.save();

    const token = GenToken(newUser._id);
    const userResponse = {
      _id: newUser._id,
      userName: newUser.userName,
      email: newUser.email,
    };
    return res.status(201).json({
      message: "registration successfully",
      token: token,
      user: userResponse,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error during  registration" });
  }
};

export const LogIN = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Please fill all the fields" });

    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).json({ message: "Invalid email" });

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword)
      return res.status(404).json({ message: "Invalid credentials" });

    const token = GenToken(user._id);

    const userResponse = {
      _id: user._id,
      userName: user.userName,
      email: user.email,
    };

    return res.status(201).json({
      message: "login successfully",
      token: token,
      user: userResponse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error during  login" });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const userResponse = {
      _id: user._id,
      userName: user.userName,
      email: user.email,
    };
    return res.status(201).json({
      message: "user infos",
      user: userResponse,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error during  fetching user" });
  }
};
