import { Cars } from "../../entities/CarSchema";

export interface ICarRepositoryListById {
  ListById(_id: string): Promise<any>;
}
