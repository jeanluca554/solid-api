export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    password: string;
    admin: false;
    createdAt: Date;
    updatedAt: Date;
}