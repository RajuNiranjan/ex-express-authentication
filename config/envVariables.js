import dotenv from "dotenv";
dotenv.config();

export const ENV_VAR = {
  DB_URI: process.env.DB_URI,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};
