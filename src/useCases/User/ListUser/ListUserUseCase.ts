import { IUsersRepository } from "../../../repositories/IUserRepository";

export class ListUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
    ) { };

    async execute() {
        const users = await this.usersRepository.listUsers();

        return users;
    }
}