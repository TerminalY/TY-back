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
      const result = await controller.updateCloth({_id: req.body.id}, req.body.amount);
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
      const result = await controller.deleteCloth(req.body.id);
      res.send(result);
    }
  },
  {
    path: "/clothes/admin",
    method: "get",
    handler: async (req: Request, res: Response) => {
   
      const result = await controller.getClothAdmin(req.query);
      res.send(result);
    }
  }
];
