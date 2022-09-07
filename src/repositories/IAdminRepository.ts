import { User } from "../entities/User";

export interface IAdminRepository {
    findUserById(id: string): Promise<User>;
}