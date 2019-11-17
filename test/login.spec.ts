import mockData from "./mockData";
import db from "./db";
import { encryptPassword, verifyJWT } from "./utils";
import axios from "axios";

describe("generate new address flow", () => {

    beforeAll(async () => {
        await db.connect();
        await db.clean('users');
        const mockUsers = mockData.users.map(user => {
            return Object.assign({}, user, { password: encryptPassword(user.password) })
        });

        await db.addMany("users", mockUsers);
    });

    afterAll(async () => {
        await db.clean('users');
    });

    it("generates a new token", async () => {
        const loginData = mockData.users[0];
        const response = await axios.post('http://app:3000/login', loginData);

        expect(response.headers['content-type']).toContain('application/json');
        expect(response.data.token).toBeDefined();

        const decryptedData: any = verifyJWT(response.data.token);

        expect(decryptedData.username).toEqual(loginData.username);
        expect(decryptedData.password).toEqual(loginData.password);
    });

    it("fails request becouse user doesn't exist", async (done) => {
        const loginData = Object.assign({}, mockData.users[0], { username: 'Moshe' });

        try {
            await axios.post('http://app:3000/login', loginData);
        } catch (err) {
            expect(err.response.status).toEqual(400);
            expect(err.response.data.message).toEqual('The user doesn\'t exist');
            done();
        }
    });

    it("fails request with invalid password", async (done) => {
        const loginData = Object.assign({}, mockData.users[0], { password: 'invalid' });

        try {
            await axios.post('http://app:3000/login', loginData);
        } catch (err) {
            expect(err.response.status).toEqual(400);
            expect(err.response.data.message).toEqual('Invalid password');
            done();
        }
    });

});