import mongoose from 'mongoose';

export default class Database {
    private _server: String;
    private _database: String;

    constructor(server: String, database: String) {
        this._server = server;
        this._database = database;
        this._connect();
    }

    async _connect() {
        console.log('server', this._server)
        
        mongoose.createConnection()
        await mongoose.connect(`mongodb://${this._server}/${this._database}`)
        
        console.log('Database connection successful');
    }
}