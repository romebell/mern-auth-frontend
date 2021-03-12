import React from 'react';

const Curr = ({ rank, image, name, ticker, cur, low, high, curPercent }) => {
  return (
    <div className='container'>
      <div className='align'>
        <div className='crypto'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='cryptoT'>{ticker}</p>
        </div>
        <div className='crp'>
          <p id='cur'>${cur}</p>
          <p id='low'>${low}</p>
          <p id='high'>${high}</p>
          {curPercent < 0 ? (
            <p id='low'>{curPercent.toFixed(3)}%</p>
          ) : (
              <p id='high'>{curPercent.toFixed(3)}%</p>
            )}



        </div>
      </div>
    </div>
  );
};

export default Curr;
