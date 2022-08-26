import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MySqlUsersRepository } from "../../repositories/implementations/MySqlUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailtrapMailProvider();
const mySqlUsersRepository = new MySqlUsersRepository

const createUserUseCase = new CreateUserUseCase(
    mySqlUsersRepository,
    mailTrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController };