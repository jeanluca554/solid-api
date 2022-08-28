import { Request, Response } from "express";
import { CreateTagUseCase } from "./CreateTagUseCase";

export class CreateTagController {
    constructor(
        private createTagUseCase: CreateTagUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, createdAt, updatedAt } = request.body;

        try {
            const tag = await this.createTagUseCase.execute({
                name,
                createdAt,
                updatedAt,
            })

            //return response.status(201).send();
            return response.json(tag);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}