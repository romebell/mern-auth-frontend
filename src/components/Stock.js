import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stocks from "./Stocks"


const { REACT_APP_STOCK_API_KEY } = process.env;

function Stock() {
    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                `https://api.polygon.io/v2/reference/tickers?search=&perpage=50&page=1&apiKey=${REACT_APP_STOCK_API_KEY}`
            )
            .then(res => {
                console.log(res.data.tickers);
                setStocks(res.data.tickers);

            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };
    console.log(stocks)
    const filteredStocks = stocks.filter(stock =>
        stock.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>StockMarket Tracker</h1>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>

            {stocks.map((stock, i) => {
                { console.log(stock.tickers) }
                return (
                    <Stocks
                        key={stock.tickers}
                        name={stock.name}
                        locale={stock.locale}
                        currency={stock.currency}
                    />
                )


            })}
        </div >
    );
}


export default Stock;
