//library import
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cloudinary from "cloudinary";

//development environment
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//import router middleware
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//import custom middleware
import { authenticationUser } from "./middleware/authMiddleware.js";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "test" });
});
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
//routes middleware
app.use("/api/v1/jobs", authenticationUser, jobRouter);
app.use("/api/v1/users", authenticationUser, userRouter);
app.use("/api/v1/auth", authRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
//error middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT;

//Running Server
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`server berjalan di port ${port}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
