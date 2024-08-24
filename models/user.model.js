import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    searchHistory: {
        type: Array,
        default: []
    }
}, { timestamps: true })

export const UserModel = mongoose.model("User", userSchema)