import { Request, Response } from "express";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

export class DeleteCarController {

    constructor(
        private deleteCarUseCase: DeleteCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{


        try{
            await this.deleteCarUseCase.execute(request.params.id)
       
            return response.status(200).json({error:false, message:"Vehicle removed"})

        }catch(err){
      
            if (err instanceof Error) {
         
                return response.status(400).json({
                    error:true,
                    message: err.message
                })
              } else {
         
                return response.status(400).json({
                    error:true,
                    message:'Unexpected error'
                })
              }
          
            
        }
    }
}