import { v4 as uuid } from "uuid";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;
    public admin: boolean;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props); // this.name = props.name, this.email = props.email, etc.

        if (!id) {
            this.id = uuid();
        }
    }
}