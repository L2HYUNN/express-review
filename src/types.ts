import * as express from "express";

export interface ExpressTypes {
  req: express.Request;
  res: express.Response;
}

export interface ExpressNextTypes extends ExpressTypes {
  next: express.NextFunction;
}
