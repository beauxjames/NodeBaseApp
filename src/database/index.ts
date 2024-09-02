import mongoose from 'mongoose';
import Logger from '../utilities/logger';

export default class Database {
    private _server: String;
    private _database: String;

    constructor(server: String, database: String) {
        this._server = server;
        this._database = database;
        this._connect().then(() => {
            Logger.info("Database Connected");
        }).catch((err: Error) => {
            Logger.error("Database Connection error", err);
        });
    }

    async _connect() {
        console.log('server', this._server )
        Logger.info('GO GETTEM!');
        
        mongoose.createConnection()
        await mongoose.connect(`mongodb://${this._server}/${this._database}`)
        
        console.log('Database connection successful');
    }
}