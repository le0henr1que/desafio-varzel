import * as Mongo from "../../repositories/UploadImageCar/Implementation/MongoImageCar";
import { UploadImageCarController } from "./UploadImageCarController";
import { UploadImageCarUseCase } from "./UploadImageCarUseCase";

const MongoUploadCarRepository = new Mongo.MongoCarsRepositoryUploadImage();
//create merge
const uploadImageCarUseCase = new UploadImageCarUseCase(
  MongoUploadCarRepository
);

const uploadImageCarController = new UploadImageCarController(
  uploadImageCarUseCase
);

export { uploadImageCarUseCase, uploadImageCarController };
