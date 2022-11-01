import { ICarRepositoryUpdateCar } from "../../repositories/UpdateCar/ICarRepositoryUpdateCar";
import { IUpdateCarDTO } from "./UpdateCarDTO";

import { Cars, CarsSchema} from "../../entities/CarSchema";

export class UpdateCarUseCase{

    constructor(
        private carRepositoryUpdate: ICarRepositoryUpdateCar
    ){}

    async execute(id:string, data: IUpdateCarDTO){
       
        const Cars = new CarsSchema(data);
        
        return await this.carRepositoryUpdate.UpdateCar(Cars, id)



    }
}