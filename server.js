import express from "express";
import router from './routes/index.js';
import emailMiddleware from './middlewear/index.js'

const app = express()
const port = 3000

emailMiddleware(app, express)

app.use('/api', router)



app.listen(port, () =>
        console.log(`http://localhost:${port}`)
)