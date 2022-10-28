import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

export class CreateCarController {

    constructor(
        private createCarUseCase: CreateCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const {name, brand, model, image} = request.body;
        
        try{
            await this.createCarUseCase.execute({
                name,
                brand,
                model,
                image
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