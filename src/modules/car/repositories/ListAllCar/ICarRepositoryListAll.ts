import { Cars } from "../../entities/CarSchema";

export interface ICarRepositoryListAllCar{
    ListAll(): Promise<Cars[]>;
}