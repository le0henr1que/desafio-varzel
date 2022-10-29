

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { ICarRepositoryDelete } from "../ICarRepositoryDelete";


export class MongoCarsRepositoryDelete implements ICarRepositoryDelete{
    async delete(id: string): Promise<void> {
        // console.log("[implementation/mongocarrepository]"+car);
        await CarsSchema.findByIdAndDelete(id)
    }
}