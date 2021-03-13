
import React from 'react';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import Importfile from './Importfile'

import { Pro } from './Statee';


function Account() {
    return (
        <Pro>
            <div>
                <Importfile />
            </div>
            <div className="account">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </Pro>
    );
}
export default Account;

//change to commit