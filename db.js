import mongoose from "mongoose";
import { ENV_VARS } from './config/envVars.js'



const DB_Connect = async (req, res) => {
    try {
        const dbUri = ENV_VARS.DB_URL
        if (!dbUri) return res.status(404).json({ message: "no db uri" })
        await mongoose.connect(dbUri).then(() => console.log('server connected to data base')).catch((error) => console.log(error))
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error while connecting to Data Base" })
    }
}

DB_Connect()