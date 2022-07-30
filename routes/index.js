import  rateRouter  from './rate.js';
import { Router } from "express";
import emailRouter from './subscription.js'
import mailRouter from './mail.js';
const router = Router();

router.use('/rate', rateRouter)
router.use('/subscribe', emailRouter)
router.use('/sendEmails', mailRouter)

export default router