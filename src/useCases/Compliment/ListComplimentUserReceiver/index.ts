import { MySqlComplimentsRepository } from "../../../repositories/implementations/MySqlComplimentsRepository";
import { ListComplimentUserReceiverController } from "./ListComplimentController";
import { ListComplimentUserReceiverUseCase } from "./ListComplimentUserReceiverUseCase";

const mySqlComplimentRepository = new MySqlComplimentsRepository;

const listComplimentUserReceiverUseCase = new ListComplimentUserReceiverUseCase(mySqlComplimentRepository);

const listComplimentUserReceiverController = new ListComplimentUserReceiverController(listComplimentUserReceiverUseCase);

export { listComplimentUserReceiverUseCase, listComplimentUserReceiverController };