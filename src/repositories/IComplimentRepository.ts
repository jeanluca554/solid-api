import { Compliment } from "../entities/Compliment";
import { User } from "../entities/User";

export interface IComplimentRepository {
    findUserById(id: string): Promise<User>;
    save(compliment: Compliment): Promise<void>;
}