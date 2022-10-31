import { Request, Response } from "express";
import { CreateCarUseCase } from "./CreateCarUseCase";

export class CreateCarController {

    constructor(
        private createCarUseCase: CreateCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const {city, name, brand, model, year, km, price, image} = request.body;
        try{
            var created = await this.createCarUseCase.execute({
                city,
                name,
                brand, 
                model, 
                year, 
                km, 
                price,
                image
              
            })
            return response.status(201).send(created)

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