

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryDelete } from "../ICarRepositoryDelete";


export class MongoCarsRepositoryDelete implements ICarRepositoryDelete{
    async delete(id: string): Promise<void> {

        await CarsSchema.findByIdAndDelete(id)
    }
}