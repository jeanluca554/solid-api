import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class PostgressUsersRepository implements IUsersRepository {
    private users: User[] = []; //dessa forma enquanto não temos banco de dados instalados

    async findByEmail(email: string): Promise<User> {

    }

    async save(user: User): Promise<void> {

    }
}