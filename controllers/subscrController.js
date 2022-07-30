import { saveEmail } from '../services/subscription.service.js'

export async function addEmail(req, res) {

    const result = await saveEmail(req.body.email)

    if (result === true) {
        res.header('Content-Type', 'application/json').status(200).send('E-mail додано')
    } else {
        res.header('Content-Type', 'application/json').status(409).send('E-mailʼ вже знаходиться в базі')
    }

}