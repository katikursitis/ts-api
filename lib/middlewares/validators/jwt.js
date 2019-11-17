"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function fetchJWT(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.body.token = bearer[1];
    }
    next();
}
exports.fetchJWT = fetchJWT;
function verifyJWT(req, res) {
    try {
        const result = jsonwebtoken_1.default.verify(req.body.token, 'secretKey');
        req.body.username = result.username;
        req.body.password = result.password;
        res.json({ message: "provided token is valid" });
    }
    catch (err) {
        res.sendStatus(403);
    }
}
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmVzL3ZhbGlkYXRvcnMvand0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0VBQStCO0FBRy9CLGtCQUEyQixHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQ3RFLE1BQU0sWUFBWSxHQUFRLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFdkQsSUFBRyxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7UUFDcEMsTUFBTSxNQUFNLEdBQVcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUI7SUFDRCxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFSRCw0QkFRQztBQUNELG1CQUEyQixHQUFZLEVBQUUsR0FBYTtJQUNsRCxJQUFJO1FBQ0EsTUFBTSxNQUFNLEdBQVEsc0JBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO0tBQ3BEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0wsQ0FBQztBQVRELDhCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hKV1QgIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIGNvbnN0IGJlYXJlckhlYWRlcjogYW55ID0gcmVxLmhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXTtcbiAgICBcbiAgICBpZih0eXBlb2YgYmVhcmVySGVhZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9IGJlYXJlckhlYWRlci5zcGxpdCgnICcpO1xuICAgICAgICByZXEuYm9keS50b2tlbiA9IGJlYXJlclsxXTtcbiAgICB9XG4gICAgbmV4dCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUpXVCAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSBqd3QudmVyaWZ5KHJlcS5ib2R5LnRva2VuLCAnc2VjcmV0S2V5Jyk7XG4gICAgICAgIHJlcS5ib2R5LnVzZXJuYW1lID0gcmVzdWx0LnVzZXJuYW1lO1xuICAgICAgICByZXEuYm9keS5wYXNzd29yZCA9IHJlc3VsdC5wYXNzd29yZDtcbiAgICAgICAgcmVzLmpzb24oeyBtZXNzYWdlOiBcInByb3ZpZGVkIHRva2VuIGlzIHZhbGlkXCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDQwMyk7XG4gICAgfVxufSJdfQ==