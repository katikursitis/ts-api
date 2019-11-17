import { ObjectID } from "mongodb";

export default class User {

    _id?: ObjectID;

    username?: string;

    password?: string;
}