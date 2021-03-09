import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const amounts = transactions.map(transaction => transaction.amount);

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="incomeTracker">


            <div>
                <h5> Income </h5>
                <p className="addMoney">{income}</p>
            </div>
            <div>
                <h5>Expense </h5>
                <p className="submoney"> {expense}</p>
            </div>
        </div>
    )
}
export default IncomeExpenses;
