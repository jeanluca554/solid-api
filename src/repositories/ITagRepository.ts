import { Tag } from "../entities/Tag";

export interface ITagsRepository {
    findByName(name: string): Promise<Tag>;
    save(tag: Tag): Promise<void>;
}