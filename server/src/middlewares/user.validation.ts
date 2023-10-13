import {param, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {ReqParamsType} from "../controllers/users";


export const emailValidation =
    param("email")
        .trim()
        .isLength({min: 1, max: 30})
        .withMessage("Email should be from 1 to 30 symbols");

export const numberValidation =
    param("number")
        .trim().isLength({min: 0, max: 6})
        .withMessage("Number should be from 1 to 30 symbols");


export const userValidation = (req: Request<ReqParamsType>, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    } else {
        next();
    }
};
