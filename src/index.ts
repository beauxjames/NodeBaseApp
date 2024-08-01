import Database from "./database";
import ServerState from "./types/ServerState.type";
import 'dotenv/config';

require('./server')().then((state: ServerState) => {
    state.server.listen(process.env.PORT);
    const dbServer = process.env.MONGO_SERVER || 'localhost:27107';
    const dbDatabse = process.env.MONGO_DATABASE || `BaseApp`;
    const database = new Database(dbServer, dbDatabse);
    
})