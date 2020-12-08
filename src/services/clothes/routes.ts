import { Request, Response } from "express";
import * as controller from "./controllers/clothes-controller";

export default [
  {
    path: "/clothes",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const data = controller.getClothes(req.params.type);
      res.send(null);
    }
  }
];
