import jwt, { Secret, VerifyErrors } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { AppError, HttpCodes } from "../../utils/appError";
import { secret } from "./generateToken";
import clientModel from "../../model/clientModel";
import { clientDetails } from "../../model/allInterfaces";

export const clientAuth = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers.authorization;

  if (!headers || !headers.startsWith("Bearer ")) {
    next(
      new AppError({
        message: "you are unauthorized",
        httpcode: HttpCodes.UNAUTHORIZED,
      })
    );
  }

  const token: string = headers!.split(" ")[1];

  //verify
  jwt.verify(
    token,
    secret as Secret,
    async (err: VerifyErrors | null, decodedUser: any) => {
      if (err) {
        const errorMsg =
          err.name === "JsonWebTokenError"
            ? "Invalid token , you are unauthorized "
            : err.message;

        next(
          new AppError({
            message: errorMsg,
            httpcode: HttpCodes.UNAUTHORIZED,
          })
        );
      }
      try {
        const verifiedUser = await clientModel.findOne({
          _id: decodedUser._id,
        });
        if (!verifiedUser) {
          next(
            new AppError({
              message: "unauthorized",
              httpcode: HttpCodes.UNAUTHORIZED,
            })
          );
        }
        req!.user = verifiedUser as clientDetails;
      } catch (error) {
        next(
          new AppError({
            message: error,
            httpcode: HttpCodes.INTERNAL_SERVER_ERROR,
          })
        );
      }
    }
  );
};
