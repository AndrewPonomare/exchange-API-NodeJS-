import {addEmail} from '../controllers/subscrController.js';
import { Router } from "express";

const emailRouter = Router();

emailRouter.post('/', (req, res) => {
    addEmail(req, res)
})

export default emailRouter