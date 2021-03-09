
import React from 'react';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';


import { GlobalProvider } from '../context/GlobalState';


function Account() {
    return (
        <GlobalProvider>
            <div className="account">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}
export default Account;