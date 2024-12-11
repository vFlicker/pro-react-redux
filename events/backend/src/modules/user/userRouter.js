import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { userController } from './userController.js';

export const userRouter = Router();

userRouter.post('/register', asyncHandler(userController.create));
userRouter.post('/login', asyncHandler(userController.login));
