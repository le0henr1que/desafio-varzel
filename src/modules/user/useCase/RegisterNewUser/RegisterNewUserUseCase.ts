// import { IProductRepository } from "../../repositories/IProductRepositoryCreate";
import { IRegisterRepository } from "../../repositories/RegisterNewUser/IRegisterNewUser";
import { ICreateUserDTO } from "./RegisterNewUserDTO";
import { User, UserSchema} from "../../entities/UserSchema";
import { hash } from 'bcryptjs';


export class CreateUserUseCase{

    constructor(
        private userRepository: IRegisterRepository
    ){}

    async execute(data: ICreateUserDTO){
        const {email, password} = data
        const findEmail = await this.userRepository.findByEmail(email)
        
        console.log(email)
        if(findEmail){
            throw new Error('Email already exist') 
        }
       
        data.password = await hash(password, 8);

        const Cars = new UserSchema(data);
        await this.userRepository.save(Cars)


    }
}