"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const router_1 = __importDefault(require("./router"));
const main = () => __awaiter(this, void 0, void 0, function* () {
    const app = express();
    app.use(bodyParser.json());
    app.use("/", router_1.default);
    app.use((req, res) => {
        res.status(404).json({ message: 'Request not found' });
    });
    app.use((err, req, res, next) => {
        //@ts-ignore
        if (err instanceof SyntaxError && err.status == 400) {
            res.status(400).json({ message: "Bad JSON" });
        }
        else if (err.name === 'JsonSchemaValidation') {
            res.status(400).json(err.validations.body);
        }
        else {
            next(err);
        }
    });
    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    });
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBb0M7QUFDcEMsd0RBQTBDO0FBQzFDLHNEQUE4QjtBQUU5QixNQUFNLElBQUksR0FBRyxHQUFTLEVBQUU7SUFDcEIsTUFBTSxHQUFHLEdBQWlCLE9BQU8sRUFBRSxDQUFDO0lBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDO0lBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDcEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVEsRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtRQUNsRSxZQUFZO1FBQ1osSUFBRyxHQUFHLFlBQVksV0FBVyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7U0FDL0M7YUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssc0JBQXNCLEVBQUU7WUFDNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QzthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQTtBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGljYXRpb24sIFJlc3BvbnNlLCBSZXF1ZXN0LCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBwOiBBcHBsaWNhdGlvbiAgPSBleHByZXNzKCk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgYXBwLnVzZShcIi9cIiwgcm91dGVyKTtcblxuICAgIGFwcC51c2UoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdSZXF1ZXN0IG5vdCBmb3VuZCcgfSk7XG4gICAgfSk7XG5cbiAgICBhcHAudXNlKChlcnI6IGFueSwgcmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIFN5bnRheEVycm9yICYmIGVyci5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTogXCJCYWQgSlNPTlwifSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyLm5hbWUgPT09ICdKc29uU2NoZW1hVmFsaWRhdGlvbicpIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVyci52YWxpZGF0aW9ucy5ib2R5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHN0YXJ0ZWQgb24gcG9ydCAzMDAwIVwiKTtcbiAgICB9KTtcbn1cblxubWFpbigpO1xuIl19