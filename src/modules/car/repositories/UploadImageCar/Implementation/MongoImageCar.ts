import { Cars, CarsSchema } from "../../../entities/CarSchema";
import { IUploadImage } from "../IUploadImageCar";

export class MongoCarsRepositoryUploadImage implements IUploadImage {
  async findById(id: string): Promise<any> {
    return await CarsSchema.findById(id);
  }
  async UploadImage(id: string, imagePath: string): Promise<any> {
    const update = await CarsSchema.findByIdAndUpdate(id, {
      image: imagePath,
    });
  }
}
