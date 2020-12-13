import { Request, Response } from "express";
import * as controller from "./controllers/clothes-controller";
import { ICloth } from '../../db/models/cloth';

export default [
  {
    path: "/clothes",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const data = await controller.getCloth();
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
                              colors: req.body.color,
                              price: req.body.price,
                              size: req.body.size,
                              type: req.body.type,
                              amount: req.body.amount
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
                              colors: req.body.color,
                              price: req.body.price,
                              size: req.body.size,
                              type: req.body.type,
                              amount: req.body.amount
      }
      const result = await controller.createCloth(cloth);
    }
  }
];
