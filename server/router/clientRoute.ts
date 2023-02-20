import { Router } from "express";

import {
  registerValidation,
  loginValidation,
} from "../middlewares/validations/client/clientValidation";

import { getAll, register } from "../controller/client/clientAuth";

const clientAuthRouter = Router();

clientAuthRouter.route("/signup").post(registerValidation, register);
clientAuthRouter.route("/login").post(loginValidation);
clientAuthRouter.route("/").get(getAll);

export default clientAuthRouter;
