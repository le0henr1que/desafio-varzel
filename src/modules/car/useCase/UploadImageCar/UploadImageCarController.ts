import { randomBytes } from "crypto";
import { Request, Response } from "express";
import { UploadImageCarUseCase } from "./UploadImageCarUseCase";
import * as yup from "yup";

export class UploadImageCarController {
  constructor(private updateCarUseCase: UploadImageCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { image } = request.body;
    const id = request.params.id;

    try {
      // const schema = yup.object().shape({
      //   image: yup.string().required("required image field"),
      // });
      if (!id) {
        throw new Error("required id params");
      }

      // await schema.validate(request.body);

      await this.updateCarUseCase.execute(id, image);

      return response.status(201).send({ message: "Sucssesful upload image" });
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
