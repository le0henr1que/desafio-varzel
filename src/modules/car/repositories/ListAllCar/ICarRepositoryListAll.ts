import { Cars } from "../../entities/CarSchema";

export interface ICarRepositoryListAllCar{
    ListAll(queryParams:any): Promise<any>;
}