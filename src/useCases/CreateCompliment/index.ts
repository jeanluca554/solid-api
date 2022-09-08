import { MySqlComplimentsRepository } from "../../repositories/implementations/MySqlComplimentsRepository";
import { CreateComplimentController } from "./CreateComplimentController";
import { CreateComplimentUseCase } from "./CreateComplimentUseCase";

const mySqlComplimentRepository = new MySqlComplimentsRepository;

const createComplimentUseCase = new CreateComplimentUseCase(mySqlComplimentRepository);

const createComplimentController = new CreateComplimentController(createComplimentUseCase);

export { createComplimentUseCase, createComplimentController };