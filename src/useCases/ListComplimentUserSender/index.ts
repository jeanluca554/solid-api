import { MySqlComplimentsRepository } from "../../repositories/implementations/MySqlComplimentsRepository";
import { ListComplimentUserSenderController } from "./ListComplimentController";
import { ListComplimentUserSenderUseCase } from "./ListComplimentUserSenderUseCase";

const mySqlComplimentRepository = new MySqlComplimentsRepository;

const listComplimentUserSenderUseCase = new ListComplimentUserSenderUseCase(mySqlComplimentRepository);

const listComplimentUserSenderController = new ListComplimentUserSenderController(listComplimentUserSenderUseCase);

export { listComplimentUserSenderUseCase, listComplimentUserSenderController };