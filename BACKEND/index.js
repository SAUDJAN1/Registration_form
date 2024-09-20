import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import Mongoose from "./Database/mongodb.js";
import Routing from "./Routes/authRoutes.js";
//configuration of dotenv
dotenv.config({ path: ".env" });
const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1", Routing);
app.use(express.urlencoded({ extended: true }));
//Database
Mongoose().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is Running at Port: ${process.env.PORT}`.bgGreen.white);
  });
});
