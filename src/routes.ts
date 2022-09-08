import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createTagController } from "./useCases/CreateTag";
// import { ensureAdmin, ensureController } from "./middlewares/EnsureAdmin/index";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createComplimentController } from "./useCases/CreateCompliment";

import { listComplimentUserReceiverController } from "./useCases/ListComplimentUserReceiver";
import { listComplimentUserSenderController } from "./useCases/ListComplimentUserSender";

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

// router.get("/users/compliments/send", ensureAuthenticated, listComplimentUserSenderController.handle)
// router.get("/users/compliments/receive", ensureAuthenticated, listComplimentUserReceiverController.handle)

export { router };