import { Request, Response } from "express";
import { UpdateCarUseCase } from "./UpdateCarUseCase";
import * as yup from 'yup';

export class UpdateCarController {

    constructor(
        private updateCarUseCase: UpdateCarUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const id = request.params.id;

        try{
            const schema = yup.object().shape({
                image: yup.string().notRequired(), 
                city:yup.string().notRequired(),
                name:yup.string().notRequired(),
                brand:yup.string().notRequired(), 
                model:yup.string().notRequired(), 
                year:yup.string().notRequired(), 
                km:yup.string().notRequired(), 
                price:yup.number().notRequired()
            })
            if(!id){
                throw new Error('required id params') 
            }
            
            await schema.validate(request.body)

            const updateData = await this.updateCarUseCase.execute(id, request.body)

            return response.status(200).send({error:false, message:"Atualização bem sucedida", Car:updateData})

        }catch(err){
            console.log(err)
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