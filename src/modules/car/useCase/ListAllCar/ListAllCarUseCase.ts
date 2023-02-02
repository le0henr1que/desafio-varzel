import { Cars, CarsSchema } from "../../entities/CarSchema";
import { ICarRepositoryListAllCar } from "../../repositories/ListAllCar/ICarRepositoryListAll";

export class ListAllCarUseCase {
  constructor(private carRepositoryListAll: ICarRepositoryListAllCar) {}

  async execute(queryParams: any) {
    const car = await this.carRepositoryListAll.ListAll(queryParams);
    return car;
  }
}
