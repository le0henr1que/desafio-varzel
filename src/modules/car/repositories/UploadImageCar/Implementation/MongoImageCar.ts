

import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { IUploadImage } from "../IUploadImageCar";


export class MongoCarsRepositoryUploadImage implements IUploadImage{
    async UploadImage(id:string, imagePath:string): Promise<any> {

        const update = await CarsSchema.findByIdAndUpdate(id, {
            image:imagePath
        })
        

    }
}