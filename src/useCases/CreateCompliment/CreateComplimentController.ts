import { Request, Response } from "express";
import { CreateComplimentUseCase } from "./CreateComplimentUseCase";

export class CreateComplimentController {
    constructor(
        private createComplimentUseCase: CreateComplimentUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { message, createdAt, tagId, userSender, userReceiver } = request.body;

        //try {
        const compliment = await this.createComplimentUseCase.execute({
            message,
            createdAt,
            tagId,
            userReceiver,
            userSender
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