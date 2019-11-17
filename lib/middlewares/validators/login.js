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
const bcrypt_1 = __importDefault(require("bcrypt"));
function validateUser(db) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const filter = { username: req.body.username };
        const dbResult = yield db.find('users', filter);
        if (dbResult) {
            const matchPassword = bcrypt_1.default.compareSync(req.body.password, dbResult.password);
            if (matchPassword) {
                next();
            }
            else {
                res.status(400).json({ message: "Invalid password" });
            }
        }
        else {
            res.status(400).json({ message: "The user doesn't exist" });
        }
    });
}
exports.validateUser = validateUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZXMvdmFsaWRhdG9ycy9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsb0RBQTRCO0FBSTVCLHNCQUE4QixFQUFNO0lBQ2hDLE9BQU8sQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtRQUM3RCxNQUFNLE1BQU0sR0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZELE1BQU0sUUFBUSxHQUFTLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSSxRQUFRLEVBQUU7WUFDVixNQUFNLGFBQWEsR0FBWSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFeEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7YUFDdkQ7U0FDSjthQUFNO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQyxDQUFDO1NBQzdEO0lBQ0wsQ0FBQyxDQUFBLENBQUE7QUFDTCxDQUFDO0FBakJELG9DQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IERiIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Nb25nb1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9Vc2VyXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVXNlciAoZGI6IERiKSB7XG4gICAgcmV0dXJuIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXI6IG9iamVjdCA9IHsgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lIH07XG4gICAgICAgIGNvbnN0IGRiUmVzdWx0OiBVc2VyID0gYXdhaXQgZGIuZmluZCgndXNlcnMnLCBmaWx0ZXIpO1xuXG4gICAgICAgIGlmIChkYlJlc3VsdCkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hQYXNzd29yZDogYm9vbGVhbiA9IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCwgZGJSZXN1bHQucGFzc3dvcmQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hQYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiSW52YWxpZCBwYXNzd29yZFwifSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6IFwiVGhlIHVzZXIgZG9lc24ndCBleGlzdFwifSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19