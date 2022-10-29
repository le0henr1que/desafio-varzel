
import * as Mongo  from "../../repositories/UpdateCar/implementation/MongoCarRepositoryDelete";
import { UpdateCarController } from "./UpdateCarController";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

const MongoUpdateCarRepository = new Mongo.MongoCarsRepositoryUpdateCar()
//create merge
const updateCarUseCase = new UpdateCarUseCase(
    MongoUpdateCarRepository
)

const updateCarController = new UpdateCarController(
    updateCarUseCase
)

export {updateCarUseCase, updateCarController}