import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/users-data-controller";
import { LooseObject } from "../../utils/models";

export default [
    {
      path: "/users",
      method: "get",
      handler: [async (req: Request, res: Response) => {
        let data = await controller.getAllUsers();
        res.send(data);
      }]
    },
    {
      path: "/users/:username",
      method: "get",
      handler: [async (req: Request, res: Response) => {
        let data;
        if(req.params.username) {
          data = await controller.getUser({username: req.params.username});
        }
        res.send(data);
      }]
    },
    {
      path: "/users",
      method: "post",
      handler: [async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.createUser({username: req.body.username, email: req.body.email, password: req.body.password, cart: undefined});
        res.send(result);
      }]
    },
    {
      path: "/users/:username",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        let updatedParams: LooseObject = {};
        req.body.email ? updatedParams.email = req.body.email : undefined;
        req.body.password ? updatedParams.password = req.body.password : undefined;

        const result  = await controller.updateUser({userName: req.params.username}, updatedParams);
        res.send(result);
      }
    },
    {
      path: "/users/:username/addToCart",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.addToCart(req.params.username, req.body.clothName, req.body.clothSize, req.body.clothColor);
        res.send(result);
      }
    },
];