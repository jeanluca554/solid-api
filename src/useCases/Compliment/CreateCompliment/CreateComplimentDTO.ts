export interface ICreateComplimentRequestDTO {
    message: string;
    createdAt: Date;
    tagId: string;
    userSender: string;
    userReceiver: string;
}