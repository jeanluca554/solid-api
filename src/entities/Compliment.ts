import { v4 as uuid } from "uuid";

export class Compliment {
    public readonly id: string;

    public message: string;
    public createdAt: Date;
    public userSender: string;
    public userReceiver: string;
    public tagId: string;

    constructor(props: Omit<Compliment, 'id'>, id?: string) {
        Object.assign(this, props); // this.name = props.name, this.email = props.email, etc.

        if (!id) {
            this.id = uuid();
        }
    }
}