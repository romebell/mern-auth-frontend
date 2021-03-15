import React, { Component } from 'react';

class Transaction extends Component {
  render() {
    const {
      amount,
      payee,
      category,
      date,
      type,
      image_url,
      currency
    } = this.props.transaction
    
    const handleDate = () => {
      // Convert Date string to Date Object
      const dateObject = new Date(date);
      
      // Date / Time formatting options
      const options = {
        date: { 
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        },
        time: {
          hour: '2-digit',
          minute: '2-digit'
        }
      }
      
      // Convert output to US standard
      const output = {
        date: dateObject.toLocaleDateString("en-US", options.date),
        time: dateObject.toLocaleTimeString("en-US", options.time)
      }
      
      // Return formatted date and time
      return `${output.date} @ ${output.time}`;
    }
    
    const handleIcon = () => {
      if (image_url) {
          return <img src={image_url} alt={`Transaction Icon with ${payee} logo`} />
      } else {
        const icon = () => {
          switch (type) {
          case "income":
            return "bi-plus-circle";
          case "expense":
            return "bi-dash-circle";
          case "transfer":
            return "bi-share";
          default:
            return undefined;
        }
      }
        return <i className={`bi ${icon()}`}></i>
      }
    }
    return (
      <article className="transaction">
        <header>
          <div className="transaction-icon">{handleIcon()}</div>
          <div>
            <h3>{ payee || category || "Transaction" }</h3>
            <p className="transaction-date">{handleDate()}</p>
          </div>
        </header>
        <p>{currency.symbol}{amount}</p>
      </article>
    );
  }
}

export default Transaction;