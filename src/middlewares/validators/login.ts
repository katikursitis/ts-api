import { Request, Response, NextFunction } from "express";
import Db from "../../services/Mongo";
import bcrypt from "bcrypt";
import User from "../../interfaces/User";


export function validateUser (db: Db) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const filter: object = { username: req.body.username };
        const dbResult: User = await db.find('users', filter);

        if (dbResult) {
            const matchPassword: boolean = bcrypt.compareSync(req.body.password, dbResult.password);

            if (matchPassword) {
                next();
            } else {
                res.status(400).json({message: "Invalid password"});
            } 
        } else {
            res.status(400).json({message: "The user doesn't exist"});
        }
    }
}