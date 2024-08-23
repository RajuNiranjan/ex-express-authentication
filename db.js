import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const DB_Connect = async (req, res, next) => {
    try {
        const dbUri = process.env.DB_URI
        if (!dbUri) return res.status(401).json({ message: "Invalid DB URI" })

        await mongoose.connect(dbUri).then(() => console.log('server connected to database')).catch((error) => console.log(error))

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error while connecting to database" })
    }
}

DB_Connect()