import React from 'react';


const Stocks = ({
    key,
    name,
    locale,
    currency,
}) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <h1>{key}</h1>
                    <p className='coin-symbol'>{name}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${currency}</p>
                    <p className='coin-volume'>${currency.toLocaleString()}</p></div>
                <div><p>
                </p>{locale}</div>
            </div>
        </div>
    );
};

export default Stocks;