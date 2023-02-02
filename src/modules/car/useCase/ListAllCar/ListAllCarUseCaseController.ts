import { Response, Request } from "express";
import { ListAllCarUseCase } from "./ListAllCarUseCase";

export class ListAllCarController {
  constructor(private listAllCarUseCase: ListAllCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      console.log(request.query);
      const Cars = await this.listAllCarUseCase.execute(request.query);

      return response.status(200).json({ error: false, Cars });
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        return response.status(400).json({
          error: true,
          message: err.message,
        });
      } else {
        return response.status(400).json({
          error: true,
          message: "Unexpected error",
        });
      }
    }
  }
}
