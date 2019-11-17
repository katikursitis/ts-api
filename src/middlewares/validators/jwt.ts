import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


export function fetchJWT  (req: Request, res: Response, next: NextFunction) {
    const bearerHeader: any = req.headers['authorization'];
    
    if(typeof bearerHeader !== 'undefined') {
        const bearer: string = bearerHeader.split(' ');
        req.body.token = bearer[1];
    }
    next();
}
export function verifyJWT (req: Request, res: Response) {
    try {
        const result: any = jwt.verify(req.body.token, 'secretKey');
        req.body.username = result.username;
        req.body.password = result.password;
        res.json({ message: "provided token is valid" });
    } catch (err) {
        res.sendStatus(403);
    }
}