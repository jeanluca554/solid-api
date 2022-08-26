export interface ICreateUserRequestDTO {
    name: string;
    email: string;
    admin: boolean;
    createdAt: Date;
    updatedAt: Date;
}