import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateCustomers } from "../actions/customers"
import { addTransfer } from "../actions/transfers"
import TransferModal from "./TransferModal"
import moment from "moment";


const TransferForm = (props) => {
    const sender = props.customer._id
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState('')
    const [modalOpen, setModalOpen] = useState(false)
    
    const dispatch = useDispatch()

    const receiverInfo = props.customers.find(customer => receiver === customer._id) || ''
    const receiverName = receiverInfo.name

    const onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}?$/gm)) {
            setAmount(amount)
        }
    }
    const onSelectChange = (e) => {
        const customer = props.customers.find(customer => e.target.value === customer.name)
        setReceiver(customer._id)
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if (!amount || receiver === '') {
            setError('Please Provide Receiver and Amount.')
        } else if (amount > props.customer.balance) {
            setError('Current Balance is Not Enough to Cover The Transfer Amount.')
        } else {
            setError('')

            dispatch(updateCustomers(sender, receiver, amount))
            dispatch(addTransfer({
                sender: props.customer.name,
                receiver: receiverName,
                amount,
                createdAt: moment().valueOf()
            }))
            
            setModalOpen(true)
        }
    }
    const handleRemoveModal = () => {
        setModalOpen(false)
        
        setTimeout(() => {
            setAmount('')
        }, 100); 
    }

    return (
        <div>
        <h3 className="form__title">Make a Transfer</h3>
        <div className="form--wrapper">
            <form className="form" onSubmit={onSubmit}>
                <div className="form__item">
                    <label>Send Money To</label>
                    <select className="select" onChange={onSelectChange} defaultValue={'default'}>
                        <option key={'disabled'} disabled value={'default'}>Choose a Customer</option>
                        {
                            props.customers
                                .filter(otherCustomer => otherCustomer !== props.customer)
                                .map(customer => <option value={customer.name} key={customer._id}>{customer.name}</option>
                                )}
                    </select>
                </div>
                <div className="form__item">
                    <label>Money to Be Transfered</label>
                    <input 
                     className="text-input"
                     value={amount} 
                     placeholder="Amount" 
                     onChange={onAmountChange}
                    /> 
                </div>
                <button className="button">Transfer Money</button>
                {error && <p className="form__error" >{error}</p>}
            </form>
            <TransferModal 
             modalOpen={modalOpen}
             handleRemoveModal={handleRemoveModal}
             sender={props.customer.name}
             amount={amount}
             receiver={receiverName}
            />
        </div>
        </div>
    )
}

export default TransferForm