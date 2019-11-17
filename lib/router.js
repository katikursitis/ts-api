"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = __importDefault(require("./middlewares/shemas/login"));
const validateJWT_1 = __importDefault(require("./middlewares/shemas/validateJWT"));
const jwt_1 = require("./middlewares/validators/jwt");
const login_2 = require("./middlewares/validators/login");
const express_jsonschema_1 = __importDefault(require("express-jsonschema"));
const Mongo_1 = __importDefault(require("./services/Mongo"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.Router();
const main = () => __awaiter(this, void 0, void 0, function* () {
    const db = new Mongo_1.default("mongodb://db", "paybox");
    yield db.connect();
    console.log('here');
    router.post("/validate", jwt_1.fetchJWT, express_jsonschema_1.default.validate({ body: validateJWT_1.default }), jwt_1.verifyJWT);
    router.post("/login", express_jsonschema_1.default.validate({ body: login_1.default }), login_2.validateUser(db), (req, res) => {
        try {
            const token = jsonwebtoken_1.default.sign({ username: req.body.username, password: req.body.password }, "secretKey");
            res.json({ token });
        }
        catch (err) {
            res.status(500).json({ message: "Ooops couldn't generate token, please try latter" });
        }
    });
});
main();
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9EO0FBQ3BELHVFQUFxRDtBQUNyRCxtRkFBaUU7QUFDakUsc0RBQW1FO0FBQ25FLDBEQUE4RDtBQUM5RCw0RUFBK0M7QUFDL0MsNkRBQWtDO0FBQ2xDLGdFQUErQjtBQUUvQixNQUFNLE1BQU0sR0FBVyxnQkFBTSxFQUFFLENBQUM7QUFFaEMsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBQ3BCLE1BQU0sRUFBRSxHQUFPLElBQUksZUFBRSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQ1AsV0FBVyxFQUNYLGNBQVEsRUFDUiw0QkFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxxQkFBaUIsRUFBRSxDQUFDLEVBQ25ELGVBQVMsQ0FDWixDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksQ0FDUCxRQUFRLEVBQ1IsNEJBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBVyxFQUFFLENBQUMsRUFDN0Msb0JBQVksQ0FBQyxFQUFFLENBQUMsRUFDaEIsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDNUIsSUFBSTtZQUNBLE1BQU0sS0FBSyxHQUFlLHNCQUFHLENBQUMsSUFBSSxDQUM5QixFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDNUQsV0FBVyxDQUNkLENBQUM7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUNyQjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsa0RBQWtELEVBQUMsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ1QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQTtBQUVELElBQUksRUFBRSxDQUFDO0FBRVAsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgbG9naW5TY2hlbWEgZnJvbSBcIi4vbWlkZGxld2FyZXMvc2hlbWFzL2xvZ2luXCI7XG5pbXBvcnQgdmFsaWRhdGVKV1RTY2hlbWEgZnJvbSBcIi4vbWlkZGxld2FyZXMvc2hlbWFzL3ZhbGlkYXRlSldUXCI7XG5pbXBvcnQgeyB2ZXJpZnlKV1QsIGZldGNoSldUIH0gZnJvbSBcIi4vbWlkZGxld2FyZXMvdmFsaWRhdG9ycy9qd3RcIjtcbmltcG9ydCB7IHZhbGlkYXRlVXNlciB9IGZyb20gXCIuL21pZGRsZXdhcmVzL3ZhbGlkYXRvcnMvbG9naW5cIjtcbmltcG9ydCBKc29uVmFsaWRhdG9yIGZyb20gXCJleHByZXNzLWpzb25zY2hlbWFcIjtcbmltcG9ydCBEYiBmcm9tIFwiLi9zZXJ2aWNlcy9Nb25nb1wiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IHJvdXRlcjogUm91dGVyID0gUm91dGVyKCk7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGI6IERiID0gbmV3IERiKFwibW9uZ29kYjovL2RiXCIsIFwicGF5Ym94XCIpO1xuICAgIGF3YWl0IGRiLmNvbm5lY3QoKTtcblxuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG5cbiAgICByb3V0ZXIucG9zdChcbiAgICAgICAgXCIvdmFsaWRhdGVcIixcbiAgICAgICAgZmV0Y2hKV1QsXG4gICAgICAgIEpzb25WYWxpZGF0b3IudmFsaWRhdGUoeyBib2R5OiB2YWxpZGF0ZUpXVFNjaGVtYSB9KSxcbiAgICAgICAgdmVyaWZ5SldUXG4gICAgKTtcblxuICAgIHJvdXRlci5wb3N0KFxuICAgICAgICBcIi9sb2dpblwiLCBcbiAgICAgICAgSnNvblZhbGlkYXRvci52YWxpZGF0ZSh7IGJvZHk6IGxvZ2luU2NoZW1hIH0pLFxuICAgICAgICB2YWxpZGF0ZVVzZXIoZGIpLFxuICAgICAgICAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuOiBqd3QuU2VjcmV0ID0gand0LnNpZ24oXG4gICAgICAgICAgICAgICAgICAgIHsgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lLCBwYXNzd29yZDogcmVxLmJvZHkucGFzc3dvcmQgfSwgXG4gICAgICAgICAgICAgICAgICAgIFwic2VjcmV0S2V5XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJlcy5qc29uKHt0b2tlbn0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe21lc3NhZ2U6IFwiT29vcHMgY291bGRuJ3QgZ2VuZXJhdGUgdG9rZW4sIHBsZWFzZSB0cnkgbGF0dGVyXCJ9KTtcbiAgICAgICAgICAgIH1cbiAgICB9KTtcbn1cblxubWFpbigpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19