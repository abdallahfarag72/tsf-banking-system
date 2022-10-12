const customersReducer = (state = [], action) => {
    switch (action.type) {
        case 'POPULATE_CUSTOMERS':
            return action.customers
        case 'UPDATE_CUSTOMERS':
            return state.map(customer => {
                const updatedCustomers = action.customers.find(updatedCustomer => updatedCustomer._id === customer._id)
                return updatedCustomers ? { ...customer, ...updatedCustomers } : customer
            })
            // return state.map(customer => {
            //     if (customer.name === action.name) {
            //         return customer.amount = action.amount
            //     }
            // })
        default:
            return state
    }
}

export default customersReducer