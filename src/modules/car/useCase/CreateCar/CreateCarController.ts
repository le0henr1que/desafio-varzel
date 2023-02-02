import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";
import * as yup from "yup";

export class CreateCarController {
  constructor(private createCarUseCase: CreateCarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { city, name, brand, model, year, km, price, image } = request.body;
    try {
      const schema = yup.object().shape({
        city: yup.string().required("required city field"),
        name: yup.string().required("Required name field"),
        brand: yup.string().required("Required brand field"),
        model: yup.string().required("Required namodelme field"),
        year: yup.string().required("Required year field"),
        km: yup.string().required("Required km field"),
        price: yup.number().required("Required price field"),
        image: yup.string().notRequired(),
      });

      await schema.validate(request.body);

      var created = await this.createCarUseCase.execute({
        city,
        name,
        brand,
        model,
        year,
        km,
        price,
        image,
      });
      return response.status(201).send(created);
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        return response.status(400).json({
          message: err.message,
        });
      } else {
        return response.status(400).json({
          message: "Unexpected error",
        });
      }
    }
  }
}
