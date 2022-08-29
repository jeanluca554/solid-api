import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createTagController } from "./useCases/CreateTag";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { authenticateUserController } from "./useCases/AuthenticateUser";

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

router.post('/tags', ensureAdmin, (request, response) => {
    return createTagController.handle(request, response);
});

router.post('/login', (request, response) => {
    return authenticateUserController.handle(request, response);
});

export { router };