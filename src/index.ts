import ServerState from "./types/ServerState.type";
import 'dotenv/config';

require('./server')().then((state: ServerState) => {
    state.server.listen(process.env.PORT);
})