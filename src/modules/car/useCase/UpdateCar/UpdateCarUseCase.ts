import { ICarRepositoryUpdateCar } from "../../repositories/UpdateCar/ICarRepositoryUpdateCar";
import { IUpdateCarDTO } from "./UpdateCarDTO";

import { Cars, CarsSchema } from "../../entities/CarSchema";

export class UpdateCarUseCase {
  constructor(private carRepositoryUpdate: ICarRepositoryUpdateCar) {}

  async execute(id: string, data: IUpdateCarDTO) {
    const findId = await this.carRepositoryUpdate.findById(id);
    console.log(findId);
    if (!findId) {
      throw new Error("non-existent vehicle");
    }

    const Cars = new CarsSchema(data);

    return await this.carRepositoryUpdate.UpdateCar(Cars, id);
  }
}
