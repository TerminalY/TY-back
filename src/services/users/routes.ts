import { NextFunction, Request, Response } from "express";
import * as controller from "./controllers/users-data-controller";
import { LooseObject } from "../../utils/models";

export default [
  /**
   * Get all users
   */
    {
      path: "/users",
      method: "get",
      handler: [async (req: Request, res: Response) => {
        let data = await controller.getAllUsers();
        res.send(data);
      }]
    },
    /**
     * Get specific user
     */
    {
      path: "/users/:email",
      method: "get",
      handler: [async (req: Request, res: Response) => {
        let data;
        if(req.params.username) {
          data = await controller.getUser({email: req.params.email});
        }
        res.send(data);
      }]
    },
    /**
     * logic
     */
    {
      path: "/login",
      method: "post",
      handler: [async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.login(req.body.email, req.body.password);
        res.send(result);
      }]
    },
    /**
     * Create new user
     */
    {
      path: "/users",
      method: "post",
      handler: [async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.createUser({username: req.body.username, email: req.body.email, password: req.body.password, cart: undefined});
        res.send(result);
      }]
    },
    /**
     * Update specific user
     */
    {
      path: "/users/:email",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        let updatedParams: LooseObject = {};
        req.body.password ? updatedParams.password = req.body.password : undefined;
        const result  = await controller.updateUser({email: req.params.email}, updatedParams);
        res.send(result);
      }
    },
    {
      path: "/users/:email/addToCart",
      method: "post",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.addToCart(req.params.email, req.body.clothName, req.body.clothSize, req.body.clothColor);
        res.send(result);
      }
    },
    {
      path: "/users/:email/getCart",
      method: "get",
      handler: async (req: Request, res: Response, next: NextFunction) => {
        const result  = await controller.getCart(req.params.email);
        res.send(result);
      }
    },
];