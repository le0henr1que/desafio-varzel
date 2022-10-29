import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

export class UpdateCarController {

    constructor(
        private updateCarUseCase: UpdateCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const {name, brand, model, price, image} = request.body;
        
        try{
            await this.updateCarUseCase.execute(request.params.id, {
                name,
                brand,
                model,
                price,
                image
            })

            return response.status(201).send({message:"Atualização bem sucedida", Car:{
                "Name": name,
                "Brand": brand,
                "Model":model,
                "price":price, 
                "Image":image
            }})

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