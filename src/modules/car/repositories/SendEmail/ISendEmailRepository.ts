
export interface ISendEmailRepository {
  SendEmail(email: string, SendMessage:string): Promise<any>;
}
