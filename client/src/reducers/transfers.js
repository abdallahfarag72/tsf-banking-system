const transfersReducer = (state = [], action) => {
    switch (action.type) {
        case 'POPULATE_TRANSFERS':
            return action.transfers
        case 'CREATE_TRANSFER':
            return [...state, action.transfer]
        default:
            return state
    }
}

export default transfersReducer