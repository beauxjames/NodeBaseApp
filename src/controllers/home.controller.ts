import { Router, Request, Response } from 'express'
import UserModel from '../database/models/user.model'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    let users = await UserModel.find({});
    res.status(200).send(users);
})

export default router;