import { User } from "../../../entities/User";
import { IMailProvider } from "../../../providers/ImailProvider";
import { IUsersRepository } from "../../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { };

    async execute(data: ICreateUserRequestDTO) {
        if (!data.email) {
            throw new Error('Email incorrect');
        }

        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);

        await this.userRepository.save(user);

        return user;

        /*await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Equipe do meu App',
                email: 'equipe@meuapp.com'
            },
            subject: 'Seja bem-vindo à plataforma',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })*/
    }
}