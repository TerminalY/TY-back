import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/users-data-controller";
import { IUser } from '../../db/models/user';


export default [
    {
      path: "/users",
      method: "get",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const data = await controller.getUser({firstName: 'or', lastName: 'fridman', password:'tesat', userName: 'test12'});
        res.send(data);
      }
    },
    {
      path: "/users/create",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.createUser({userName: req.body.name, email: req.body.email, password: req.body.password, cart: undefined});
        res.send(result);
      }
    },
];