import * as Mongo from "../../repositories/CreateCar/implementation/MongoCarRepositoryCreate";
import { CreateCarController } from "./CreateCarController";
import { CreateCarUseCase } from "./CreateCarUseCase";

const MongoCarRepository = new Mongo.MongoCarsRepository();
//create merge
const carUseCase = new CreateCarUseCase(MongoCarRepository);

const createCarController = new CreateCarController(carUseCase);

export { carUseCase, createCarController };
