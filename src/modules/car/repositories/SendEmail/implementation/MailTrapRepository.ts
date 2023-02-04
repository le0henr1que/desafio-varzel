import { ISendEmailRepository } from "../ISendEmailRepository";

import transporter from "../../../../../utils/Config/mailtrap"

export class MailTrapRepository implements ISendEmailRepository {
    async SendEmail(email: string, SendMessage:string): Promise<any> {
        const message = {
            from: 'no-reply@AutoPark.com',
            to: email,
            subject: 'Test Email',
            text: SendMessage,
          };
          
          transporter.sendMail(message, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log(`Email sent: ${info.response}`);
            }
          });
    }
}
