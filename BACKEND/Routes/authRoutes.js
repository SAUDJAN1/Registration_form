import express from "express";
import { Registeration, Login } from "../Controllers/userAuth.js";
const Routing = express.Router();
Routing.post("/register", Registeration);
Routing.post("/login", Login);
export default Routing;
