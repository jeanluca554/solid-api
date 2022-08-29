import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { IAuthenticateUserRequestDTO } from "./AuthenticateUserDTO";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthenticateUserUseCase {
    constructor(
        private userRepository: IUsersRepository,
    ) { };

    async execute(data: IAuthenticateUserRequestDTO) {
        if (!data.email) {
            throw new Error('Incorrect email!');
        }

        const user = await this.userRepository.findByEmail(data.email);

        if (!user) {
            throw new Error('Email/Password incorrect');
        }

        const passwordMatch = await compare(data.password, user.password);

        if (!passwordMatch) {
            throw new Error('Email/Password incorrect');
        }

        const token = sign({
            email: user.email
        }, "3079f84219b1217723bf644ce474c186", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}