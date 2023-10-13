// Контроллер получения пользователей
import fs from "fs";
import path from "path";
import {Request, Response} from "express";

export const findUsers = async (req: Request<ReqParamsType>, res: Response<UserType[]>) => {
    try {
        const {email, number}: ReqParamsType = req.params;
        const rawData = fs.readFileSync(path.resolve(__dirname, "../data/data.json")).toString();
        const data: UserType[] = JSON.parse(rawData);
        const response = data.filter(f => {
            if (number) {
                return f.email.includes(email) && f.number.includes(number);
            } else {
                return f.email.includes(email);
            }
        });
        setTimeout(() => {
            res.status(200).json(response);
        }, 5000);
    } catch (e) {
        console.log((e as Error).message);
    }
};

// types
export type UserType = {
    email: string,
    number: string
}
export type ReqParamsType = {
    email: string,
    number?: string
}
