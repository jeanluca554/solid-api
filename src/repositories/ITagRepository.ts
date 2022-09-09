import { Tag } from "../entities/Tag";

export interface ITagsRepository {
    findByName(name: string): Promise<Tag>;
    listTags(): Promise<any>;
    save(tag: Tag): Promise<void>;
}