import { Router } from 'express';
import thoughtsRouter from './thoughtRoutes.js';
import userRoutes from './userRoute.js';

const router = Router();

router.use('/thoughts', thoughtsRouter);
router.use('/users', userRoutes);

export default router