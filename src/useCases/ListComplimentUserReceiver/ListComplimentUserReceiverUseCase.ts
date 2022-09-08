import { IComplimentRepository } from "../../repositories/IComplimentRepository";

export class ListComplimentUserReceiverUseCase {
    constructor(
        private complimentRepository: IComplimentRepository,
    ) { };

    async execute(userId: string) {
        const compliments = await this.complimentRepository.findComplimentsByUserReceiver(userId);

        return compliments;
    }
}