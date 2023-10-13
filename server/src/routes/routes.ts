import {Router} from "express";
import {emailValidation, numberValidation, userValidation} from "../middlewares/user.validation";
import {findUsers} from "../controllers/users";

export const router = Router({});

router
    .get("/user/:email/:number?", emailValidation, numberValidation, userValidation, findUsers);
