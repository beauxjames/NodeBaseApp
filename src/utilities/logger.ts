import winston from 'winston';

const { combine, timestamp, json } = winston.format;
const timestampFormat = 'MMM-DD-YYYY HH:mm:ss';

const Logger = winston.createLogger({
    format: combine(timestamp({ format: timestampFormat }), json()),
    transports: [
        new winston.transports.Console({ format: combine(winston.format.colorize({ all: true }), winston.format.simple())}),
        new winston.transports.File({ dirname: 'logs', filename: 'baselog.txt', maxsize: 20000 })
    ],
});

export default Logger;