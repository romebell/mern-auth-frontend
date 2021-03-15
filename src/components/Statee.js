import React, { createContext, useReducer } from 'react';
import ChangeState from './ChangeState';

const initialState = {
    transactions: []
}

export const Context = createContext(initialState);

export const Pro = ({ children }) => {
    const [state, aDD] = useReducer(ChangeState, initialState);

    function deleteTransaction(id) {
        aDD({
            type: "deleteTransactionnb",
            payload: id
        });
    }
    function addTransaction(transaction) {
        aDD({
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