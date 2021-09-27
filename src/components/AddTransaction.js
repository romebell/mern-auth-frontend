import React, { useState, useContext } from 'react'
import { Context } from './Statee';
import axios from 'axios';
import '../style/Trans.css';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(Context);

    const onSubmit = e => {
        e.preventDefault();
        //console.log('puuuuuuuuuut!!')

        // axios.post('http://localhost:3000/addTransaction/add/', addTransaction)
        //    .then(res => {
        //   })

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
                <div>
                    <label htmlFor="text"></label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction Description" />
                </div>
                <div className="amount">
                    <label htmlFor="amount">Amount <br />
                    </label> <input type="number" id="inputAmount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="$$" /></div>
                <button className="addButton">Add Income/Expense</button>
            </form>
        </>
    )
}