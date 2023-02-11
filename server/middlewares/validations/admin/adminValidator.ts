import { Request, Response, NextFunction, RequestHandler } from "express";
import { validator } from "../validator";
import { adminSchemaValidator } from "./adminSchema";

export const adminRegistervalidation: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validator(adminSchemaValidator.register, req.body, next);
};

export const adminLoginvalidation: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validator(adminSchemaValidator.login, req.body, next);
};
