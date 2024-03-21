import { Router } from "express";
const userRouter = Router();
import { postData, getData } from "../controllers/data.controller.js";

userRouter.route("/save").post(postData);
userRouter.route("/getdata").get(getData);

export default userRouter;
