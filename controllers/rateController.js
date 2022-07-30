import { getRate } from '../services/rate.service.js'


export async function rate(req, res) {
    const result = await getRate()
    
    if (result.status === 'fail') {
        res.status(400).send('Invalid status value')
        return
    }
    
    res.header('Content-Type','application/json').status(200).send(result.value)
}