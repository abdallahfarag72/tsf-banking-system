import axios from 'axios'

const customersURL = 'https://tsf-banking-app-api.vercel.app/customers'

export const fetchCustomers = () => axios.get(customersURL)
export const updateCustomers = (senderId, receiverId, amount) => axios.patch(`${customersURL}/${senderId}?receiver=${receiverId}&amount=${amount}`)


const transfersURL = 'https://tsf-banking-app-api.vercel.app/transfers'

export const fetchTransfers = () => axios.get(transfersURL)
export const createTransfer = (transfer) => axios.post(transfersURL, transfer)