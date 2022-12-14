import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import { prisma } from "../../prisma";

export class MySqlUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        const userEmail = await prisma.users.findUnique({
            where: {
                email: email,
            },
        })

        return userEmail;
    }

    async findById(id: string): Promise<User> {
        const userId = await prisma.users.findUnique({
            where: {
                id: id,
            },
        })

        return userId;
    }

    async listUsers() {
        const users = await prisma.users.findMany({
            select: {
                name: true,
                email: true,
                admin: true
            }
        })

        return users;
    }

    async save(user: User): Promise<void> {
        // const userData: User = await prisma.users.create({
        await prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
                admin: user.admin
            },
        })
    }
}