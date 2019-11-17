import mockData from "./mockData";
import db from "./db";
import { encryptPassword, verifyJWT, signJWT } from "./utils";
import axios from "axios";

describe("generate new address flow", () => {

    it("validate created token from body", async () => {
        const mockUser = mockData.users[0];
        const token = signJWT(mockUser.username, mockUser.password);

        const response = await axios.post('http://app:3000/validate', {token});

        expect(response.headers['content-type']).toContain('application/json');
        expect(response.data.message).toBe("provided token is valid");
    });

    it("validate created token from header", async () => {
        const mockUser = mockData.users[0];
        const token = signJWT(mockUser.username, mockUser.password);
        const response = await axios.post('http://app:3000/validate', {}, {
            headers: { authorization: "Bearer " + token }
        });

        expect(response.headers['content-type']).toContain('application/json');
        expect(response.data.message).toBe("provided token is valid");
    });

    it("validate created token from header when provided also invalid token in body", async () => {
        const mockUser = mockData.users[0];
        const token = signJWT(mockUser.username, mockUser.password);

        const response = await axios.post('http://app:3000/validate', {token: token + 'g'}, {
            headers: { authorization: "Bearer " + token }
        });

        expect(response.headers['content-type']).toContain('application/json');
        expect(response.data.message).toBe("provided token is valid");
    });

    it("fails to validate token from header", async (done) => {
        const mockUser = mockData.users[0];
        const token = signJWT(mockUser.username, mockUser.password);
        try {
            await axios.post('http://app:3000/validate', {}, {
                headers: { authorization: "Bearer " + token + 'e' }
            });
        } catch (err) {
            expect(err.response.status).toEqual(403);
            expect(err.response.data).toBe('Forbidden');
            done();
        }
    });

    it("fails to validate token from body", async (done) => {
        const mockUser = mockData.users[0];
        const token = signJWT(mockUser.username, mockUser.password);
        try {
            await axios.post('http://app:3000/validate', {token: token+'g'});
        } catch (err) {
            expect(err.response.status).toEqual(403);
            expect(err.response.data).toBe('Forbidden');
            done();
        }
    });

    it("checks that header token is primary", async (done) => {
        const mockUser = mockData.users[0];
        const token = signJWT(mockUser.username, mockUser.password);
        try {
            await axios.post('http://app:3000/validate', {token: token}, {
                headers: { authorization: "Bearer " + token + 'g' }
            });
        } catch (err) {
            expect(err.response.status).toEqual(403);
            expect(err.response.data).toBe('Forbidden');
            done();
        }
    });


});