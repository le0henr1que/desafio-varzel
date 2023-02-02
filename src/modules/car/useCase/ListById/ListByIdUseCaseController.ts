import { Request, Response } from "express";
import { ListByIdUseCase } from "./ListByIdCarUseCase";

export class ListByIdCarController {
  constructor(private listByIdUseCase: ListByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;

    try {
      const Cars = await this.listByIdUseCase.execute(id);

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
