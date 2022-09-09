import { Request, Response } from "express";
import { CreateComplimentUseCase } from "./CreateComplimentUseCase";

export class CreateComplimentController {
    constructor(
        private createComplimentUseCase: CreateComplimentUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { message, createdAt, tagId, userReceiver } = request.body;

        const { userId } = request; //prevent anyone can manipulate user sender

        //try {
        const compliment = await this.createComplimentUseCase.execute({
            message,
            createdAt,
            tagId,
            userReceiver,
            userSender: userId
        })

        //return response.status(201).send();
        return response.json(compliment);
        /*} catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }*/
    }
}