import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import setupSwagger from "./config/swagger.js";
import userRouter from "./src/user/router.js";

dotenv.config();

const app = express();

setupSwagger(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Sku-Chat app Health Is Ok");
});

export default app;