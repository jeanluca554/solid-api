import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import { prisma } from "../../prisma";

export class MySqlUsersRepository implements IUsersRepository {
    //private users: User[] = []; //dessa forma enquanto não temos banco de dados instalados

    async findByEmail(email: string): Promise<User> {
        const userEmail = await prisma.users.findUnique({
            where: {
                email: email,
            },
        })

        //const user = this.users.find(user => user.email === email);

        return userEmail;
    }

    async save(user: User): Promise<void> {
        //this.users.push(user); // como se estivéssemos salvando o usuário no banco

        const userData: User = await prisma.users.create({
            //await prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                admin: user.admin
            },
        })
    }
}