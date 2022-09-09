import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";
import { createTagController } from "./useCases/Tag/CreateTag";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { authenticateUserController } from "./useCases/User/AuthenticateUser";
import { createComplimentController } from "./useCases/Compliment/CreateCompliment";
import { listComplimentUserReceiverController } from "./useCases/Compliment/ListComplimentUserReceiver";
import { listComplimentUserSenderController } from "./useCases/Compliment/ListComplimentUserSender";
import { listTagController } from "./useCases/Tag/ListTag";
import { listUserController } from "./useCases/User/ListUser";

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/tags', ensureAuthenticated, ensureAdmin, (request, response) => {
    return createTagController.handle(request, response);
});

router.post('/login', (request, response) => {
    return authenticateUserController.handle(request, response);
});

router.post('/compliments', ensureAuthenticated, (request, response) => {
    return createComplimentController.handle(request, response);
});

router.get('/users/compliments/send', ensureAuthenticated, (request, response) => {
    return listComplimentUserSenderController.handle(request, response);
});

router.get('/users/compliments/receive', ensureAuthenticated, (request, response) => {
    return listComplimentUserReceiverController.handle(request, response);
});

router.get('/tags', ensureAuthenticated, (request, response) => {
    return listTagController.handle(request, response);
});

router.get('/users', ensureAuthenticated, (request, response) => {
    return listUserController.handle(request, response);
});

export { router };