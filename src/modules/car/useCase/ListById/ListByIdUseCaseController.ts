import { Request, Response } from "express";
import { ListByIdUseCase } from "./ListByIdCarUseCase";

export class ListByIdCarController {

    constructor(
        private listByIdUseCase: ListByIdUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{


        try{
            const Cars = await this.listByIdUseCase.execute(request.params.id)
        
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