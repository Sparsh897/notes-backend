import express from "express";
import { currentUser, getAllUsers, loginUser, registerUser } from "../controllers/userController.js";
import validateToken from "../middleware/tokenHandler.js";

const UserRouter = express.Router();

UserRouter.post("/register", registerUser);

UserRouter.post("/login", loginUser);

UserRouter.get("/current",validateToken,currentUser);

UserRouter.get("/getAllusers",getAllUsers)
export default UserRouter;
