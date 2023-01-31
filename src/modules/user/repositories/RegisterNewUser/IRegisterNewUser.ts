import { User } from "../../entities/UserSchema";

export interface IRegisterRepository{
    save(user:User): Promise<void>;
    findByEmail(email:string): Promise<any>;
    
}