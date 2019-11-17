import { Router, Request, Response } from "express";
import loginSchema from "./middlewares/shemas/login";
import validateJWTSchema from "./middlewares/shemas/validateJWT";
import { verifyJWT, fetchJWT } from "./middlewares/validators/jwt";
import { validateUser } from "./middlewares/validators/login";
import JsonValidator from "express-jsonschema";
import Db from "./services/Mongo";
import jwt from "jsonwebtoken";

const router: Router = Router();

const main = async () => {
    const db: Db = new Db("mongodb://db", "paybox");
    await db.connect();

    console.log('here');

    router.post(
        "/validate",
        fetchJWT,
        JsonValidator.validate({ body: validateJWTSchema }),
        verifyJWT
    );

    router.post(
        "/login", 
        JsonValidator.validate({ body: loginSchema }),
        validateUser(db),
        (req: Request, res: Response) => {
            try {
                const token: jwt.Secret = jwt.sign(
                    { username: req.body.username, password: req.body.password }, 
                    "secretKey"
                );
                res.json({token});
            } catch (err) {
                res.status(500).json({message: "Ooops couldn't generate token, please try latter"});
            }
    });
}

main();

export default router;