import { Compliment } from "../entities/Compliment";
import { User } from "../entities/User";

export interface IComplimentRepository {
    findUserById(id: string): Promise<User>;
    findComplimentsByUserReceiver(id: string): Promise<any>;
    findComplimentsByUserSender(id: string): Promise<any>;
    save(compliment: Compliment): Promise<void>;
}