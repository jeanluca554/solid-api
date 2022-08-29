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