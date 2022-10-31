

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryListAllCar } from "../ICarRepositoryListAll";


export class MongoCarsRepositoryListAll implements ICarRepositoryListAllCar{
    async ListAll(): Promise<Cars[]> {

        var listCar = await CarsSchema.find().sort({price:1});
        // console.log(listCar)
        return listCar;

    }
}