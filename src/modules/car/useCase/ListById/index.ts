
import * as Mongo  from "../../repositories/ListByIdCar/implementation/MongoCarRepositroryListById";
import { ListByIdCarController } from "./ListByIdUseCaseController";
import { ListByIdUseCase } from "./ListByIdCarUseCase";

const MongoCarRepositoryListById = new Mongo.MongoCarsRepositoryListById()


const listByIdUseCase = new ListByIdUseCase(
    MongoCarRepositoryListById
)

const listByIdCarController = new ListByIdCarController(
    listByIdUseCase
)

export {listByIdUseCase, listByIdCarController}