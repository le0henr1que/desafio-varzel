import * as Mongo from "../../repositories/ListAllCar/implementation/MongoCarRepositoryListAllCar";
import { ListAllCarController } from "./ListAllCarUseCaseController";
import { ListAllCarUseCase } from "./ListAllCarUseCase";

const MongoCarRepository = new Mongo.MongoCarsRepositoryListAll();

const listAllCarUseCase = new ListAllCarUseCase(MongoCarRepository);

const listAllCarController = new ListAllCarController(listAllCarUseCase);

export { listAllCarUseCase, listAllCarController };
