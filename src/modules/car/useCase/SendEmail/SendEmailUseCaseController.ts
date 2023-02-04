
import {Request, Response } from "express"
import {SendEmailUseCase} from "./SendEmailUseCase"

export class SendEmailController {
    constructor(private sendEmailUseCase: SendEmailUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
      const email = request.body.email;
      const message = request.body.message;

  
      try {
        await this.sendEmailUseCase.execute(email, message);
  
        return response.status(200).json({ error: false });

      } catch (err) {
        console.log(err);
        if (err instanceof Error) {
          return response.status(400).json({
            error: true,
            message: err.message,
          });
        } else {
          return response.status(400).json({
            error: true,
            message: "Unexpected error",
          });
        }
      }
    }
}