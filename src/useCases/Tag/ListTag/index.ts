import { MySqlTagsRepository } from "../../../repositories/implementations/MySqlTagsRepository";
import { ListTagController } from "./ListTagController";
import { ListTagUseCase } from "./ListTagUseCase";

const mySqlTagRepository = new MySqlTagsRepository;

const listTagUseCase = new ListTagUseCase(mySqlTagRepository);

const listTagController = new ListTagController(listTagUseCase);

export { listTagUseCase, listTagController };