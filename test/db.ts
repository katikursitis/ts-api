import MongoClient, {MongoClient as MongoClientType, Db} from "mongodb";

let db: Db;

export default {

    async connect() {
        const mongo: MongoClientType = await MongoClient.connect("mongodb://db");
        db = await mongo.db("paybox");
    },

    async clean(collectionName: string): Promise<void> {
        await db.collection(collectionName).drop();
        await db.createCollection(collectionName);
    },

    async add(collectionName: string, item: object): Promise<object> {
        const result = await db.collection(collectionName).insertOne(item);
        return result.ops[0];
    },

    async addMany(collectionName: string, items: any): Promise<void> {
        await db.collection(collectionName).insertMany(items);
    }
}