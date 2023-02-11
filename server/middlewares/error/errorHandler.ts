import { Request, Response, NextFunction } from "express";
import { AppError, HttpCodes } from "../../utils/appError";

export const devErrorHandler = (err: AppError, res: Response) => {
  return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
    error: err,
    name: err.name,
    messsage: err.message,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devErrorHandler(err, res);
};
