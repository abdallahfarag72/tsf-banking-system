const customersReducer = (state = [], action) => {
    switch (action.type) {
        case 'POPULATE_CUSTOMERS':
            return action.customers
        case 'UPDATE_CUSTOMERS':
            return state.map(customer => {
                const updatedCustomers = action.customers.find(updatedCustomer => updatedCustomer._id === customer._id)
                return updatedCustomers ? { ...customer, ...updatedCustomers } : customer
            })
        default:
            return state
    }
}

export default customersReducer