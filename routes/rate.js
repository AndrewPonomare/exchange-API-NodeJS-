import { Router } from "express";
import { rate } from '../controllers/rateController.js'

const rateRouter = Router();

rateRouter.get('/', (req, res) => {
    rate(req, res)
})

export default rateRouter