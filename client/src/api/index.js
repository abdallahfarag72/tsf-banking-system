import axios from 'axios'

const customersURL = 'http://localhost:5000/customers'

export const fetchCustomers = () => axios.get(customersURL)
export const updateCustomers = (senderId, receiverId, amount) => axios.patch(`${customersURL}/${senderId}?receiver=${receiverId}&amount=${amount}`)


const transfersURL = 'http://localhost:5000/transfers'

export const fetchTransfers = () => axios.get(transfersURL)
export const createTransfer = (transfer) => axios.post(transfersURL, transfer)