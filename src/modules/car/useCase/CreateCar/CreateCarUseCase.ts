// import { IProductRepository } from "../../repositories/IProductRepositoryCreate";
import { ICarRepository } from "../../repositories/CreateCar/ICarRepositoryCreate";
import { ICreateCarDTO } from "./CreateCarDTO";

import { Cars, CarsSchema} from "../../entities/CarSchema";
// import { Product } from "../../entities/Cars";

export class CreateCarUseCase{

    constructor(
        private carRepository: ICarRepository
    ){}

    async execute(data: ICreateCarDTO){
        // const poductNameAlredyExists = await this.productRepository.findByName(data.name);
        // if(poductNameAlredyExists[0]?.name){
        //     throw new Error('Produto já existe na sua lista')
        // }

        // console.log(data)
        const Cars = new CarsSchema(data);
        await this.carRepository.save(Cars)


    }
}