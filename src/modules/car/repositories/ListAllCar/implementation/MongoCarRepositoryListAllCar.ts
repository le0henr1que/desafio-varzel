

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryListAllCar } from "../ICarRepositoryListAll";


export class MongoCarsRepositoryListAll implements ICarRepositoryListAllCar{
    async ListAll(queryParams:any): Promise<any> {

        var listCar = await CarsSchema.find().sort({price:1}).limit(queryParams.pageSize).skip(queryParams.page).exec();
        var count = await CarsSchema.count()
       
        return {...listCar, count};

    }
}