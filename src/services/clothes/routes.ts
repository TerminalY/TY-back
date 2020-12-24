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
  /** 
   * A route for creating a new clothing item
   * */  
  {
    path: "/clothes",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const cloth: ICloth = { name: req.body.name,
                              color: req.body.color,
                              price: req.body.price,
                              size: req.body.size,
                              type: req.body.type,
                              amount: req.body.amount,
                              gender: req.body.gender,
                              img: req.body.img
      }
      const result = await controller.createCloth(cloth);
      res.send(result);
    }
  },
  {
    path: "/clothes/:name",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const cloth: ICloth = { name: req.params.name,
                              color: req.body.color,
                              price: req.body.price,
                              size: req.body.size,
                              type: req.body.type,
                              amount: req.body.amount
      }
      const result = await controller.createCloth(cloth);
    }
  }
];
