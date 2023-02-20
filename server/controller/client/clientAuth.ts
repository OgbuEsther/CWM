import clientModel from "../../model/clientModel";

import bcrypt from "bcrypt";
import { asyncHandler } from "../../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { clientDetails } from "../../model/allInterfaces";
import { AppError, HttpCodes } from "../../utils/appError";

//register

export const register = asyncHandler(
  async (
    req: Request<{}, {}, clientDetails>,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { name, email, password, phoneNumber, clientType, address } =
      req.body;

    const Salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, Salt);

    const user = await clientModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      clientType,
      address,
    });

    if (!user) {
      next(
        new AppError({
          message: "unable to register user",
          httpcode: HttpCodes.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(HttpCodes.CREATED).json({
      message: "created a user successfully",
      data: user,
    });
  }
);

//get all

export const getAll = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const clients = await clientModel.find();

    return res.status(HttpCodes.CREATED).json({
      message: "gotten all users successfully",
      data: clients,
    });
  }
);
