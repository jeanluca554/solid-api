import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
    constructor(
        private listUserUseCase: ListUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        let users = await this.listUserUseCase.execute();


        return response.json(users);
    }
}