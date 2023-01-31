
import { Cars, CarsSchema} from "../../entities/CarSchema";
import { ICarRepositoryDelete  } from "../../repositories/DeleteCar/ICarRepositoryDelete";

export class DeleteCarUseCase{

    constructor(
        private carRepositoryListAll: ICarRepositoryDelete
    ){}

    async execute(id:string){
        const findId = await this.carRepositoryListAll.findById(id)
        console.log(findId)
        if(!findId){
            throw new Error('non-existent vehicle')
        }
        const car = await this.carRepositoryListAll.delete(id)
        return car

    }
}