import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/clothes-controller";
import { ICloth } from '../../db/models/cloth';

export default [
  {
    path: "/clothes",
    method: "get",
    handler: async (req: Request, res: Response, next: NextFunction) => {
      const data = await controller.getCloth(req.query);
      res.send(data);
    }
  },
  {
    path: "/clothes",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const cloth: ICloth = { colors: req.body.color,
                              price: req.body.price,
                              size: req.body.size,
                              type: req.body.type
      }
      const result = await controller.createCloth(cloth);
      res.send(result);
    }
  }
];
