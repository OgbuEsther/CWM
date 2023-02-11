import { Request, Response, NextFunction, RequestHandler } from "express";
import { validator } from "../validator";
import { clientSchemaValidator } from "./clientSchema";

export const registerValidation: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validator(clientSchemaValidator.register, req.body, next);
};

export const loginValidation: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validator(clientSchemaValidator.login, req.body, next);
};
