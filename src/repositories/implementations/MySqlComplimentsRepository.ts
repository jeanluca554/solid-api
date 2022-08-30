import { User } from "../../entities/User";
import { Compliment } from "../../entities/Compliment";
import { IComplimentRepository } from "../IComplimentRepository";
import { prisma } from "../../prisma";

export class MySqlComplimentsRepository implements IComplimentRepository {
    async findUserById(id: string): Promise<User> {
        const userId = await prisma.users.findUnique({
            where: {
                id: id,
            },
        })

        return userId;
    }

    async save(compliment: Compliment): Promise<void> {

        await prisma.compliments.create({
            data: {
                message: compliment.message,
                tagId: compliment.tagId,
                userReceiverId: compliment.userReceiver,
                userSenderId: compliment.userSender
            },
        })
    }
}