import express from "express";
import { UserController } from "../controller/userController";

export const userRouter = express.Router();

userRouter.get("/getAll", new UserController().getUsers);
userRouter.get("/get", new UserController().getUserById);

userRouter.post("/newUser", new UserController().createUser);
userRouter.post("/update", new UserController().updateUserById);

userRouter.delete("/delete", new UserController().removeUserById);
