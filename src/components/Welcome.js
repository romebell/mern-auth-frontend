
import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from '../context/GlobalState';


function Account() {
    return (
        <GlobalProvider>
            <Header />
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