import { randomBytes } from "crypto";
import { Request, Response } from "express";
import { UploadImageCarUseCase } from "./UploadImageCarUseCase";

export class UploadImageCarController {

    constructor(
        private updateCarUseCase: UploadImageCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const {image} = request.body;

        try{
            await this.updateCarUseCase.execute(request.params.id, image)
            
            return response.status(201).send({message:"Sucssesful upload image"})

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