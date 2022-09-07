import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createTagController } from "./useCases/CreateTag";
// import { ensureAdmin, ensureController } from "./middlewares/EnsureAdmin/index";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createComplimentController } from "./useCases/CreateCompliment";

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

export { router };