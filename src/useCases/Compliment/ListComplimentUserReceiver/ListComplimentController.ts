import { Request, Response } from "express";
import { ListComplimentUserReceiverUseCase } from "./ListComplimentUserReceiverUseCase";

export class ListComplimentUserReceiverController {
    constructor(
        private listComplimentUserReceiverUseCase: ListComplimentUserReceiverUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request; //prevent anyone can manipulate user sender

        const compliment = await this.listComplimentUserReceiverUseCase.execute(userId)

        return response.json(compliment);

    }
}