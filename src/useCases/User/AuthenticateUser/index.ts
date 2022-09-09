import { MySqlUsersRepository } from "../../../repositories/implementations/MySqlUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const mySqlUsersRepository = new MySqlUsersRepository;

const authenticateUserUseCase = new AuthenticateUserUseCase(mySqlUsersRepository);

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserUseCase, authenticateUserController };