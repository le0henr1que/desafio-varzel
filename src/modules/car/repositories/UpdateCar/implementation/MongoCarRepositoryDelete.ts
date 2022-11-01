

import { Types } from "mongoose";
import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryUpdateCar } from "../ICarRepositoryUpdateCar";


export class MongoCarsRepositoryUpdateCar implements ICarRepositoryUpdateCar{
    async UpdateCar(car: Cars, id:string): Promise<any> {
        // const {city, name, brand, model, year, km, price, image} = car

        // console.log("ID: "+ id)
        // console.log("ID: "+ car)
        const update = await CarsSchema.findByIdAndUpdate({_id:id}, {
            city:car.city,
            name:car.name,
            brand:car.brand, 
            model:car.model, 
            year:car.year, 
            km:car.km, 
            price:car.price,
        
            image:car.image
        })
        return update
        


    }
}