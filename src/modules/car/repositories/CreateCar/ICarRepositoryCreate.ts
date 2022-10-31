import { Cars } from "../../entities/CarSchema";

export interface ICarRepository{
    save(car:Cars): Promise<{}>;
}