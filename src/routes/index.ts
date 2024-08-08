import { Router } from 'express';
import homeRouter from './home.route';
import userRouter from './user.route';

const router = Router();

router.use('/', homeRouter);
router.use('/users', userRouter)

export default router;