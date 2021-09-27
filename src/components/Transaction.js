import React, { useContext } from 'react';
import { Context } from './Statee';
import '../style/Trans.css'


function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '$ ' +
        p[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i, orig) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    );
}

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(Context);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li>
            {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} id="deleteButton">remove</button></li>
    )
}