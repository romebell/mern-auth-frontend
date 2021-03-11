import React, { useState } from 'react';
import axios from 'axios';
require('dotenv').config()
const STOCK_API_KEY = process.env.STOCK_API_KEY

const SearchStocks = (props) => {

    const [stockss, setStock] = useState('')



    const onInputChange = (event) => {
        // the value yes event.target.value
        setStock(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        let search = stockss
        axios.get(`https://api.polygon.io/v2/reference/tickers?search=${search}&perpage=50&page=1&apiKey=${STOCK_API_KEY}`)
            .then(response => {
                console.log(response.data);
            });
        // setStock('')
    }


    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    onChange={onInputChange}
                    type="text" id="newItemDescription"
                    placeholder="New stock here"
                    value={stockss}
                />
                <button type="submit" id="addTask" className='btn'>search Stock</button>
            </form>
        </div>
    );
}

export default SearchStocks;








