import { Request, Response, NextFunction } from "express";
import { adminDetails } from "../../model/allInterfaces";

export const isAdmin = (
  req: adminDetails,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user && user.role === "admin") {
    next();
  } else {
    res
      .status(401)
      .json({ message: "You are not authorized to perform this action" });
  }
};
