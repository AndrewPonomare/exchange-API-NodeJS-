import { nodeMailer } from '../services/mail.service.js'

export async function sendEmail(req, res) {

    const result = await nodeMailer()
    if (result === true) {
        res.header('Content-Type', 'application/json').status(200).send('E-mailʼи відправлено')
    } else {
        res.header('Content-Type', 'application/json').status(409).send('E-mailʼ не відправлено')
    }

}