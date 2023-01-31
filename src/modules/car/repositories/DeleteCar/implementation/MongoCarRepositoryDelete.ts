

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryDelete } from "../ICarRepositoryDelete";


export class MongoCarsRepositoryDelete implements ICarRepositoryDelete{
    async findById(id: string): Promise<any> {
        return await CarsSchema.findById(id)
    }
    async delete(id: string): Promise<void> {

        await CarsSchema.findByIdAndDelete(id)
    }
}