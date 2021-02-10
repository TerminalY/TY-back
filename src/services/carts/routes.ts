import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/carts-data-controller";

export default [
    {
      path: "/orders",
      method: "get",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const data = await controller.getAllOrders();
        res.send(data);
      }
    },
    {
      path: "/order",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const data = await controller.order(req.body.email, req.body.address);
        res.send(data);
      }
    },
    {
      path: "/cart/deleteitem",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const data = await controller.deleteItemInCart(req);
        res.send(data);
      }
    }
];