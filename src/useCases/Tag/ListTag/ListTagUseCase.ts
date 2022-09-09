import { ITagsRepository } from "../../../repositories/ITagRepository";

export class ListTagUseCase {
    constructor(
        private tagRepository: ITagsRepository,
    ) { };

    async execute() {
        const tags = await this.tagRepository.listTags();

        return tags;
    }
}