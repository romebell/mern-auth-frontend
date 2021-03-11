

const Stocks = (props) => {
    const { ticker, name, currency } = props.stocks;

    return (
        <div className="ss">
            <ul>
                <li> {ticker}</li>
                <li>{name}</li>
                <li>{currency}</li>
            </ul>
        </div>
    )
}

export default Stocks;
