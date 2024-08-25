import express from "express";
import "./utils/db.js";
import { ENV_VAR } from "./config/envVariables.js";
import cors from "cors";
import { authRouter } from "./routes/auth.router.js";
import { userRouter } from "./routes/user.route.js";

const app = express();
const PORT = ENV_VAR.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello There!!!" });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`server running at port number: ${PORT}`));
