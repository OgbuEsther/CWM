import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error/errorHandler";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());

  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
