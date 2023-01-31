

import { User, UserSchema } from "../../../entities/UserSchema";
import { IRegisterRepository } from "../IRegisterNewUser";


export class MongoCarsRepositoryCreateUser implements IRegisterRepository{
    async findByEmail(email: String): Promise<any> {
        // console.log(UserSchema.find({email:email}))
        return await UserSchema.findOne({email:email})
    }
    async save(user: User): Promise<void> {

        await UserSchema.create(user);
    }
}