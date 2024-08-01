import { Router, Request, Response } from 'express'
const User = require('../database/models/user.model')

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    
    const user = await User
    res.send((await User.findOne({ username: 'Bob' })));

   
})

export default router;