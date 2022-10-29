
export interface ICarRepositoryDelete{
    delete(id:string): Promise<void>;
}