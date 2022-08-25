import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgressUsersRepository implements IUsersRepository {
    private users: User[] = []; //dessa forma enquanto não temos banco de dados instalados

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);

        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user); // como se estivéssemos salvando o usuário no banco
    }
}