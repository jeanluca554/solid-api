export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
    admin: boolean;
    createdAt: Date;
    updatedAt: Date;
}