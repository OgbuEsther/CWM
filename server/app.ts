import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error/errorHandler";
import clientAuthRouter from "./router/clientRoute";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());
  //routes
  app.use("/api/clientauth", clientAuthRouter);

  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
