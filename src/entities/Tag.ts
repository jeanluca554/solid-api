import { v4 as uuid } from "uuid";

export class Tag {
    public readonly id: string;

    public name: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(props: Omit<Tag, 'id'>, id?: string) {
        Object.assign(this, props); // this.name = props.name, this.email = props.email, etc.

        if (!id) {
            this.id = uuid();
        }
    }
}