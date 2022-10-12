import express from 'express'
import Customer from '../models/customers.js'

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()

        res.status(200).json(customers)
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { id: _id } = req.params
        const receiverId = req.query.receiver
        const amount = parseInt(req.query.amount)

        const sender = await Customer.findById(_id)
        const receiver = await Customer.findById(receiverId)

        if (amount < 0 || sender.balance <= 0 || sender.balance < amount) {
            return res.status(400).send()
        }

        const updatedSender = await Customer.findByIdAndUpdate(_id, { balance: sender.balance - amount }, { new: true })
        const updatedReceiver = await Customer.findByIdAndUpdate(receiverId, { balance: receiver.balance + amount }, { new: true })

        res.send([updatedSender, updatedReceiver])   
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
})

export default router