import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgressUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailTrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController };