const AppReducer = (state, action) => {
    switch (action.type) {
        case 'deleteTransactionn':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'addTransactionn':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

//change your state and send it down to your component 

export default AppReducer;