import { Router, Request, Response, NextFunction } from "express";
import UserModel from "../database/models/user.model";
import NotFoundError from "../errors/NotFoundError";
import BadRequestError from "../errors/BadRequestError";

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

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let user = await UserModel.create(req.body);
        res.status(201).send(user);
    } catch (err) {
        next(new BadRequestError({ message: 'Duplicate Entry', context: [err]}));
    }
    
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let user = await UserModel.findByIdAndDelete(req.params.id);    
        if(!user) {
            next(new NotFoundError({ message: 'No User Entry Found', context: [{ id: req.params.id }] }))
        } else {
            res.status(200).send(user);
        }
    } catch (err) {
        next(new BadRequestError({ message: 'No Entry Deleted', context: [err]}))
    }
});

router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userQuery =  { '_id': req.params.id };
        let user = await UserModel.findOneAndUpdate(userQuery, req.body, { upsert: false, new: true });
        res.status(200).send(user);
    } catch(err) {
        next(new BadRequestError({ message: 'Cannot Update User', context: [err]}))
    }
})
export default router;