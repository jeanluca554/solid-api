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
    async findComplimentsByUserReceiver(id: string) {
        const compliments = await prisma.compliments.findMany({
            where: {
                userReceiver: {
                    id: id
                }
            },
        })

        return compliments;
    }
    async findComplimentsByUserSender(id: string) {
        const compliments = await prisma.compliments.findMany({
            where: {
                userSender: {
                    id: id
                }
            },
        })

        return compliments;
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