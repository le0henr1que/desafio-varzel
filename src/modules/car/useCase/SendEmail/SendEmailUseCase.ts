
import {ISendEmailRepository} from "../../repositories/SendEmail/ISendEmailRepository"

export class SendEmailUseCase {
    constructor(private sendEmailRepository: ISendEmailRepository){}

    async execute(email: string, SendMessage:string){
        this.sendEmailRepository.SendEmail(email, SendMessage);
    }
}