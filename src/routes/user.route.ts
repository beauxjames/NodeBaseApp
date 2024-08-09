import { Router, Request, Response, NextFunction } from "express";
import UserModel from "../database/models/user.model";
import NotFoundError from "../errors/NotFoundError";

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    let users = await UserModel.find({});
    if(users.length === 0) {
        return next(new NotFoundError({ message: 'No Users Found' }))
    } else {
        res.status(200).send(users);
    }
});

router.get('/:username', async (req: Request, res: Response, next: NextFunction) => {
    let user = await UserModel.findOne({ username: req.params.username}).lean();
    if(!user) {
        return next(new NotFoundError({ message: 'User Not Found', context: [req.params.username]}))
    } else {
        res.status(200).send(user);
    }
});

router.post('/', async (req: Request, res: Response) => {
    let user = await UserModel.create(req.body);
    res.status(201).send(user);
});

router.delete('/:id', async (req: Request, res: Response) => {
    let user = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
})

export default router;