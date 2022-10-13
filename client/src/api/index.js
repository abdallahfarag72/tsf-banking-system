import axios from 'axios'

const customersURL = 'https://azzam-banking-api.herokuapp.com/customers'

export const fetchCustomers = () => axios.get(customersURL)
export const updateCustomers = (senderId, receiverId, amount) => axios.patch(`${customersURL}/${senderId}?receiver=${receiverId}&amount=${amount}`)


const transfersURL = 'https://azzam-banking-api.herokuapp.com/transfers'

export const fetchTransfers = () => axios.get(transfersURL)
export const createTransfer = (transfer) => axios.post(transfersURL, transfer)