import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function encryptPassword  (password: string): string {
    return bcrypt.hashSync(password, 8);
}

export function verifyJWT (token) {
    return jwt.verify(token, 'secretKey');     
}

export function signJWT(username: string, password: string): string {
    return jwt.sign({ username: username, password: password }, "secretKey");
}