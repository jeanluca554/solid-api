import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { hash } from "bcryptjs";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, admin, createdAt, updatedAt } = request.body;

        const passwordHash = await hash(password, 8);

        try {
            const user = await this.createUserUseCase.execute({
                name,
                email,
                password: passwordHash,
                admin,
                createdAt,
                updatedAt,
            })

            //return response.status(201).send();
            return response.json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}