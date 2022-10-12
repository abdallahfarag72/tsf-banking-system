import * as api from "../api";

export const getCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCustomers() 
        
        dispatch({ type: 'POPULATE_CUSTOMERS', customers: data })
    } catch (e) {
        console.log(e.message);
    }

}

export const updateCustomers = (senderId, receiverId, amount) => async (dispatch) => {
    try {
        const { data } = await api.updateCustomers(senderId, receiverId, amount)

        dispatch({ type: 'UPDATE_CUSTOMERS', customers: data })
    } catch (e) {
        console.log(e.message);
    }
}