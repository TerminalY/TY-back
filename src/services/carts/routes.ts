import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/carts-data-controller";
import { ICart } from '../../db/models/shopping-cart';

export default [
    {
        path: "/users",
        method: "get",
        handler: async (req: Request, res: Response, next: NextFunction) => {
          const data = 'hello world';
          res.send(data);
        }
      },
];