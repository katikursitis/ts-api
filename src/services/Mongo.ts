import MongoClient from "mongodb";


export default class Mongo {

    protected db: any;

    constructor(protected dbHost: string, protected dbName: string) { }

    async connect(): Promise<void> {
        let mongo = await MongoClient.connect(this.dbHost);
        this.db = await mongo.db(this.dbName);
    }

    async find(collectionName: string, filter: Object): Promise<object> {
        try {
            const res = await this.db.collection(collectionName).findOne(filter);
            return res;
        } catch (err) {
            throw new Error();
        }
        
    }
    
}