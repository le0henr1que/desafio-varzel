

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryListById } from "../ICarRepositoryListById";


export class MongoCarsRepositoryListById implements ICarRepositoryListById{
    async ListById(id: string): Promise<any> {

        var listCarById = await CarsSchema.findById(id);
        return listCarById;

    }
}