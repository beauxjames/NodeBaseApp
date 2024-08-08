import { Router, Request, Response } from "express";
import UserModel from "../database/models/user.model";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    let users = await UserModel.find({});
    if(users.length === 0) {
        res.status(400).send('no results')
    } else {
        res.status(200).send(users);
    }
})

router.get('/:username', async (req: Request, res: Response) => {
    let user = await UserModel.findOne({ username: req.params.username}).lean();
    if(!user) {
        res.status(400).send('no results')
    } else {
        res.status(200).send(user)
    }
})

router.post('/', async (req: Request, res: Response) => {
    let user = await UserModel.create(req.body);
    res.status(201).send(user);
})

export default router;