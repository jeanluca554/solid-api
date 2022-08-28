import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createTagController } from "./useCases/CreateTag";

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});
router.post('/tags', (request, response) => {
    return createTagController.handle(request, response);
});

export { router };