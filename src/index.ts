import { Application, Response, Request, NextFunction } from 'express';
import express = require('express');
import * as bodyParser from "body-parser";
import router from "./router";

const main = async () => {
    const app: Application  = express();
    app.use(bodyParser.json());
    app.use("/", router);

    app.use((req: Request, res: Response) => {
        res.status(404).json({ message: 'Request not found' });
    });

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        //@ts-ignore
        if(err instanceof SyntaxError && err.status == 400) {
            res.status(400).json({message: "Bad JSON"});
        } else if (err.name === 'JsonSchemaValidation') {
            res.status(400).json(err.validations.body);
        } else {
            next(err);
        }
    });

    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    });
}

main();
