
import { Cars, CarsSchema} from "../../entities/CarSchema";
import { ICarRepositoryListById  } from "../../repositories/ListByIdCar/ICarRepositoryListById";

export class ListByIdUseCase{

    constructor(
        private carRepositoryListAll: ICarRepositoryListById
    ){}

    async execute(id:string){
        const car = await this.carRepositoryListAll.ListById(id)
        return car

    }
}