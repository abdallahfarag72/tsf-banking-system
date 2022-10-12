import mongoose from "mongoose";

const transferSchema = mongoose.Schema({
    sender: String,
    receiver: String,
    amount: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Balance can not be a negative number.')
            }
        }
    },
    createdAt: Number
})

const Transfer = mongoose.model('transfer', transferSchema)

export default Transfer