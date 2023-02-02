import { Request, Response } from "express";
import { CreateUserUseCase } from "./RegisterNewUserUseCase";
import * as yup from "yup";

export class CreateUserController {
  constructor(private createCarUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email("Bad formatted email field")
          .required("required email field"),
        password: yup.string().required("Required password field"),
        name: yup.string().required("Required name field"),
      });

      await schema.validate(request.body);

      await this.createCarUseCase.execute({
        name,
        email,
        password,
      });
      return response.status(201).send();
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
