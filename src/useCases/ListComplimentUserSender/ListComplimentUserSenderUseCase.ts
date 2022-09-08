import { IComplimentRepository } from "../../repositories/IComplimentRepository";

export class ListComplimentUserSenderUseCase {
    constructor(
        private complimentRepository: IComplimentRepository,
    ) { };

    async execute(userId: string) {
        const compliments = await this.complimentRepository.findComplimentsByUserSender(userId);

        console.log(compliments)
        return compliments;
    }
}