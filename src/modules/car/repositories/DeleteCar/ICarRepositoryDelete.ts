
export interface ICarRepositoryDelete{
    delete(id:string): Promise<void>;
    findById(id:string): Promise<any>
}