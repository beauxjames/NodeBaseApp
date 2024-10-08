import express, { Express } from 'express';
import bodyParser from 'body-parser';
import appRoutes from './routes';
import ServerState from './types/ServerState.type';
import { errorHandler } from './middleware/errors';
import Logging from './middleware/logging';

module.exports = function() {
    
    const app: Express = express();
    
    // configure middleware body-parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // establish routes
    app.use(appRoutes);
    app.use(errorHandler);
    app.use(Logging)
    
    const statePromise: Promise<ServerState> =  new Promise((resolve, reject) => {
        resolve({server: app})
    });

    return statePromise;
}

