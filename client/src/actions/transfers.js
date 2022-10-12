import * as api from "../api";

export const getTransfers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTransfers()

        dispatch({ type: 'POPULATE_TRANSFERS', transfers: data })
    } catch (e) {
        console.log(e.message);
    }

}

export const addTransfer = (transfer) => async (dispatch) => {
    try {
        const { data } = await api.createTransfer(transfer)

        dispatch({ type: 'CREATE_TRANSFER', transfer: data })
    } catch (e) {
        console.log(e.message);
    }
}