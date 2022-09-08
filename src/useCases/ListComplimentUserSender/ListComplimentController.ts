import { Request, Response } from "express";
import { ListComplimentUserSenderUseCase } from "./ListComplimentUserSenderUseCase";

export class ListComplimentUserSenderController {
    constructor(
        private listComplimentUserSenderUseCase: ListComplimentUserSenderUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request; //prevent anyone can manipulate user sender

        const compliment = await this.listComplimentUserSenderUseCase.execute(userId)

        return response.json(compliment);

    }
}