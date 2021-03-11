import { useState, useEffect } from 'react';
import axios from 'axios'
import Stocks from './Stocks';



const REACT_APP_STOCK_API_KEY = process.env.REACT_APP_STOCK_API_KEY;

const StockUnitContainer = () => {
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        const fetchStocks = async () => {
            const response = await axios.get(`${REACT_APP_STOCK_API_KEY}/stock`);
            const data = response.data;
            setStocks(data);



        }
        fetchStocks();
    }, [])

    console.log(stocks)

    const stockList = stocks.map((stock, index) => {
        return <Stocks stock={stock} key={index} />
    });

    return (
        <div>
            {stockList}
        </div>
    )
}

export default StockUnitContainer;