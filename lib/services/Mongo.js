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
const mongodb_1 = __importDefault(require("mongodb"));
class Mongo {
    constructor(dbHost, dbName) {
        this.dbHost = dbHost;
        this.dbName = dbName;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            let mongo = yield mongodb_1.default.connect(this.dbHost);
            this.db = yield mongo.db(this.dbName);
        });
    }
    find(collectionName, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.db.collection(collectionName).findOne(filter);
                return res;
            }
            catch (err) {
                throw new Error();
            }
        });
    }
}
exports.default = Mongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvTW9uZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFrQztBQUdsQztJQUlJLFlBQXNCLE1BQWMsRUFBWSxNQUFjO1FBQXhDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUU3RCxPQUFPOztZQUNULElBQUksS0FBSyxHQUFHLE1BQU0saUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsY0FBc0IsRUFBRSxNQUFjOztZQUM3QyxJQUFJO2dCQUNBLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyRSxPQUFPLEdBQUcsQ0FBQzthQUNkO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1YsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2FBQ3JCO1FBRUwsQ0FBQztLQUFBO0NBRUo7QUFyQkQsd0JBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbmdvQ2xpZW50IGZyb20gXCJtb25nb2RiXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uZ28ge1xuXG4gICAgcHJvdGVjdGVkIGRiOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGJIb3N0OiBzdHJpbmcsIHByb3RlY3RlZCBkYk5hbWU6IHN0cmluZykgeyB9XG5cbiAgICBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBsZXQgbW9uZ28gPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHRoaXMuZGJIb3N0KTtcbiAgICAgICAgdGhpcy5kYiA9IGF3YWl0IG1vbmdvLmRiKHRoaXMuZGJOYW1lKTtcbiAgICB9XG5cbiAgICBhc3luYyBmaW5kKGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsIGZpbHRlcjogT2JqZWN0KTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uTmFtZSkuZmluZE9uZShmaWx0ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG59Il19