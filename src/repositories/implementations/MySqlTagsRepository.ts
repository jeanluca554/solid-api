import { Tag } from "../../entities/Tag";
import { ITagsRepository } from "../ITagRepository";
import { prisma } from "../../prisma";

export class MySqlTagsRepository implements ITagsRepository {
    //private users: User[] = []; //dessa forma enquanto não temos banco de dados instalados

    async findByName(name: string): Promise<Tag> {
        const tagName = await prisma.tags.findUnique({
            where: {
                name: name
            },
        })

        return tagName;
    }

    async listTags() {
        const tags = await prisma.tags.findMany()

        return tags;
    }

    async save(tag: Tag): Promise<void> {

        const tagData: Tag = await prisma.tags.create({
            //await prisma.users.create({
            data: {
                name: tag.name
            },
        })
    }
}