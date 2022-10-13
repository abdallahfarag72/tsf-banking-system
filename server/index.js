import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from "dotenv";

import customersRouter from './routes/customers.js'
import transfersRouter from './routes/transfers.js'

const app = express()
dotenv.config()


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/customers', customersRouter)
app.use('/transfers', transfersRouter)

app.get('/', (req, res) => {
    res.send('Hello to Banking System API')
})


const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))