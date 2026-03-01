import { Router } from "express";
import authentication from "../../shared/middleware/authentication.js";
import auth from "./auth.js";

const userRouter = Router();

userRouter.post("/auth", auth);
// userRouter.post("/persona", authentication, createPersona);

export default userRouter;