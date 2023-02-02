import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepository } from "../ICarRepositoryCreate";

export class MongoCarsRepository implements ICarRepository {
  async save(car: Cars): Promise<{}> {
    return await CarsSchema.create(car);
  }
}
