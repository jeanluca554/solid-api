import { Request, Response } from "express";
import { ListTagUseCase } from "./ListTagUseCase";

export class ListTagController {
    constructor(
        private listTagUseCase: ListTagUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        //const tags = await this.listTagUseCase.execute();
        let tags = await this.listTagUseCase.execute();

        tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}` }))

        return response.json(tags);
    }
}