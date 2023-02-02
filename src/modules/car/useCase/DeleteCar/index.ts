import * as Mongo from "../../repositories/DeleteCar/implementation/MongoCarRepositoryDelete";
import { DeleteCarController } from "./DeleteUseCaseController";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

const MongoCarRepositoryDelete = new Mongo.MongoCarsRepositoryDelete();

const deleteUseCase = new DeleteCarUseCase(MongoCarRepositoryDelete);

const deleteCarController = new DeleteCarController(deleteUseCase);

export { deleteUseCase, deleteCarController };
