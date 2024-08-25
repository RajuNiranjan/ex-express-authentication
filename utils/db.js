import mongoose from "mongoose";
import { ENV_VAR } from "../config/envVariables.js";

const DB_Connect = async (req, res) => {
  try {
    const dbUri = ENV_VAR.DB_URI;
    await mongoose
      .connect(dbUri)
      .then(() => console.log("server connected to database"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal server error during connecting to database" });
  }
};

DB_Connect();
