

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryUpdateCar } from "../ICarRepositoryUpdateCar";


export class MongoCarsRepositoryUpdateCar implements ICarRepositoryUpdateCar{
    async UpdateCar(car: Cars, id:string): Promise<any> {
        const {name, brand, model, image} = car

        const update = await CarsSchema.findByIdAndUpdate(id, {
            name: name,
            brand:brand, 
            model:model, 
            image:image
        })
        


    }
}