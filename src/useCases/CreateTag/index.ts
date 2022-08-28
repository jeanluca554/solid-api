import { MySqlTagsRepository } from "../../repositories/implementations/MySqlTagsRepository";
import { CreateTagController } from "./CreateTagController";
import { CreateTagUseCase } from "./CreateTagUseCase";

const mySqlTagsRepository = new MySqlTagsRepository

const createTagUseCase = new CreateTagUseCase(mySqlTagsRepository);

const createTagController = new CreateTagController(createTagUseCase);

export { createTagUseCase, createTagController };