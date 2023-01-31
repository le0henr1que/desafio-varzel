import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";
import * as yup from 'yup';

export class LoginController {

    constructor(
        private loginUseCase: LoginUseCase,
    ){}

    async handle(request: Request, response:Response): Promise<Response>{
        const { email, password} = request.body;
        
        try{
            const schema = yup.object().shape({
                email: yup.string().email("bad formatted email field").required("required email field"), 
                password:yup.string().required("required password field")
            })

           await schema.validate(request.body)

            const user = await this.loginUseCase.execute({
                email,
                password
            })
            return response.status(200).send({error:false, ...user})

        }catch(err){
            
            if (err instanceof Error) {
         
                return response.status(400).json({
                    error:true,
                    messagem: err.message
                })
              } else {
         
                return response.status(400).json({
                    error:true,
                    messagem:'Unexpected error'
                })
              }
          
            
        }
    }
}