import { Response } from "express";
import { ListAllCarUseCase } from "./ListAllCarUseCase";

export class ListAllCarController {

    constructor(
        private listAllCarUseCase: ListAllCarUseCase,
    ){}

    async handle(response:Response): Promise<Response>{

        try{
            const Cars = await this.listAllCarUseCase.execute()
            console.log(Cars)
            return response.status(200).json({Cars})

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