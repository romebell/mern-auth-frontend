import React, { useState, useContext } from 'react'
import { Context } from './Statee';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(Context);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 20000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"></label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction Description" />
                </div>
                <div className="form">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="$$" />
                </div>
                <button className="addButton">Add Income/Expense</button>
            </form>
        </>
    )
}