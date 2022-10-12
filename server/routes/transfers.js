import express from 'express'
import Transfer from '../models/transfers.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const transfers = await Transfer.find()

        res.status(200).json(transfers)
    } catch (e) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    const transfer = req.body

    const newTransfer = new Transfer(transfer)

    try {
        await newTransfer.save()
        
        res.status(201).json(newTransfer)
    } catch (e) {
        res.status(404).json({ message: e.message })
    }
})

export default router