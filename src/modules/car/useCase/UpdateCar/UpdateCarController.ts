import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";

export class UpdateCarController {

    constructor(
        private updateCarUseCase: UpdateCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{

        try{
            // var id = await request.params.id
           const updateData = await this.updateCarUseCase.execute(request.params.id, request.body)

            return response.status(201).send({message:"Atualização bem sucedida", Car:updateData})

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