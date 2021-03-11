import React, { createContext, useReducer } from 'react';
import ChangeState from './ChangeState';

const initialState = {
    transactions: []
}

export const Context = createContext(initialState);

export const Pro = ({ children }) => {
    const [state, dispatch] = useReducer(ChangeState, initialState);

    //actions that make call to reducer 
    function deleteTransaction(id) {
        dispatch({
            type: "deleteTransactionnb",
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: "addTransactionn",
            payload: transaction
        });
    }

    return (<Context.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </Context.Provider>);

}