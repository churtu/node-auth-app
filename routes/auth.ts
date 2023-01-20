
import {Router} from 'express';
import { googleAuth } from '../controllers';

export const authRouter = Router();

authRouter.post('/google', googleAuth);