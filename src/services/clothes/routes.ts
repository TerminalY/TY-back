import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/clothes-controller";
import { ICloth } from '../../db/models/cloth';
import { LooseObject } from "../../utils/models";

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
      
      const result = await controller.createCloth(req);
      res.send(result);
    }
  },
  {
    /**
     * This route updates the stock (amount) of specific clothing item
     */
    path: "/clothes/update",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const cloth: LooseObject = { name: req.body.desc,
                                  color: req.body.color,
                                  size: req.body.size,
                                  gender: req.body.gender
      }
      const result = await controller.updateCloth(cloth, req.body.amount);
      res.send(result);
    }
  },
  {
    /**
     * This route deletes a clothing item entirely from db
     */
    path: "/clothes/delete",
    method: "post",
    handler: async (req: Request, res: Response) => {
      const cloth: LooseObject = { name: req.body.desc,
                                  color: req.body.color,
                                  size: req.body.size,
                                  gender: req.body.gender
      }
      const result = await controller.deleteCloth(cloth);
      res.send(result);
    }
  }
];
