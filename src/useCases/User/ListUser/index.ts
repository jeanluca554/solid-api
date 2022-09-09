import { MySqlUsersRepository } from "../../../repositories/implementations/MySqlUsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const mySqlUsersRepository = new MySqlUsersRepository;

const listUserUseCase = new ListUserUseCase(mySqlUsersRepository);

const listUserController = new ListUserController(listUserUseCase);

export { listUserUseCase, listUserController };