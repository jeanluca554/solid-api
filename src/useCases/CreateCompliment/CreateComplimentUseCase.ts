import { Compliment } from "../../entities/Compliment";
import { IComplimentRepository } from "../../repositories/IComplimentRepository";
import { ICreateComplimentRequestDTO } from "./CreateComplimentDTO";

export class CreateComplimentUseCase {
    constructor(
        private complimentRepository: IComplimentRepository,
    ) { };

    async execute(data: ICreateComplimentRequestDTO) {
        const userReceiverExists = await this.complimentRepository.findUserById(data.userReceiver);

        if (data.userSender === data.userReceiver) {
            throw new Error("Incorrect User Receiver");
        }

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists!");
        }


        const compliment = new Compliment(data);
        await this.complimentRepository.save(compliment);

        return compliment;
    }
}