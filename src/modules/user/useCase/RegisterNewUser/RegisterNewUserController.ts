import { Request, Response } from "express";
import { CreateUserUseCase } from "./RegisterNewUserUseCase";

export class CreateUserController {

    constructor(
        private createCarUseCase: CreateUserUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const {name, email, password} = request.body;
        
        try{
            await this.createCarUseCase.execute({
                name,
                email,
                password
            })
            return response.status(201).send()

        }catch(err){
            console.log(err)
            if (err instanceof Error) {
         
                return response.status(400).json({
                    message: err.message
                })
              } else {
         
                return response.status(400).json({
                    message:'Unexpected error'
                })
              }
          
            
        }
    }
}