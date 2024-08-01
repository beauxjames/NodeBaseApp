import { Connection } from "mongoose";
import { User, userSchema } from "./models/user.model";

const mongoose = require('mongoose');

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
        
        const conn = mongoose.createConnection()
        conn.model('User', userSchema)
        await mongoose.connect(`mongodb://${this._server}/${this._database}`)
        
        console.log('Database connection successful');
    }
}