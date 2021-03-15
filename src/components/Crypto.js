import React, { useState, useEffect } from 'react';
import Curr from './Curr';
import axios from 'axios';
// import '../style/Crypto.css'


const { CRYPTO_API } = process.env;

function Crypto() {
    const [currs, setCurrs] = useState([]);
    const [filteR, bitFilter] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
        .then(res => {
            setCurrs(res.data);
        })
    }, []);

    const filterBit = e => {
        bitFilter(e.target.value);
    };

    const filteredCurrs = currs.filter(curr =>
        curr.name.toLowerCase().includes(filteR.toLowerCase())
    );

    return (
        <div className='cpo'>
            <div className="pageheading">
                <img src="https://media.giphy.com/media/LukAHGCMfxMbK/giphy.gif" alt="bitcoin" />
                <div>  <h1>CryptoCurrency Tracker</h1>
                    <form>
                        <input className='search' type='text' onChange={filterBit} placeholder='Find Crypto Currency' /></form> </div>
            </div>
            {filteredCurrs.map(curr => {
                return (
                    <Curr
                        key={curr.id}
                        name={curr.name}
                        cur={curr.current_price}
                        ticker={curr.symbol}
                        image={curr.image}
                        low={curr.low_24h}
                        high={curr.high_24h}
                        curPercent={curr.price_change_percentage_24h}
                        rank={curr.market_cap_rank}
                    />
                );
            })}</div>
    );
}
export default Crypto;
