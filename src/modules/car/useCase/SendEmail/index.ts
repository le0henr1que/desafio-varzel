import * as MailTrap from "../../repositories/SendEmail/implementation/MailTrapRepository";
import { SendEmailController } from "./SendEmailUseCaseController";
import { SendEmailUseCase } from "./SendEmailUseCase";

const MailTrapRepositorySendEmail = new MailTrap.MailTrapRepository()

const sendEMailUseCase = new SendEmailUseCase(MailTrapRepositorySendEmail);

const sendEmailController = new SendEmailController(sendEMailUseCase);

export { sendEMailUseCase, sendEmailController };
