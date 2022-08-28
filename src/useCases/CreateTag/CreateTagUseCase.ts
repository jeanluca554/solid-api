import { Tag } from "../../entities/Tag";
import { ITagsRepository } from "../../repositories/ITagRepository";
import { ICreateTagRequestDTO } from "./CreateTagDTO";

export class CreateTagUseCase {
    constructor(
        private tagRepository: ITagsRepository,
    ) { };

    async execute(data: ICreateTagRequestDTO) {
        if (!data.name) {
            throw new Error('Incorrect name!');
        }

        const tagNameAlreadyExists = await this.tagRepository.findByName(data.name);

        if (tagNameAlreadyExists) {
            throw new Error('Tag name already exists.');
        }

        const tag = new Tag(data);

        await this.tagRepository.save(tag);

        return tag;
    }
}