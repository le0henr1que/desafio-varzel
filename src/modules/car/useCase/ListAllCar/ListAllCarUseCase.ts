
import { Cars, CarsSchema} from "../../entities/CarSchema";
import { ICarRepositoryListAllCar  } from "../../repositories/ListAllCar/ICarRepositoryListAll";

export class ListAllCarUseCase{

    constructor(
        private carRepositoryListAll: ICarRepositoryListAllCar
    ){}

    async execute(){
        const car = await this.carRepositoryListAll.ListAll()
        return car


    }
}