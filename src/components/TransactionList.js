import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { Context } from './Statee';

export const TransactionList = () => {
    const { transactions } = useContext(Context);

    return (
        <>
            <h3>Transactions </h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}
//comment to commit
