import { Request, Response, NextFunction } from 'express';
import Logger from '../utilities/logger'

const Logging = (req: Request, res: Response, next: NextFunction) => {
    Logger.info(req.url, 'boo');
}

export default Logging;