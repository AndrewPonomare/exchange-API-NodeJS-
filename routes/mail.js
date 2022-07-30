import { Router } from "express";
import { sendEmail } from '../controllers/mailController.js'

const mailRouter = Router();

mailRouter.post('/', (req, res) => {
    sendEmail(req, res)
})

export default mailRouter