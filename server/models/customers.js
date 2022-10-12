import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name: String,
    email: String,
    balance: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Balance can not be a negative number.')
            }
        }
    }
})

const Customer = mongoose.model('customer', customerSchema)

export default Customer