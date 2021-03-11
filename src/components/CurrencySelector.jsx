import React, { Component } from "react";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "604952e93d4a9573dbf9f408" };
    this.handleCurrency = this.handleCurrency.bind(this);
  }
  handleCurrency (event) {
    this.setState({value: event.target.value});
    this.props.action(event.target.value);
  }
  
  async componentDidMount() {
    const currencyRequest = await axios.get(`${REACT_APP_SERVER_URL}/currencies`);
    
    const currencies = currencyRequest.data.map((currency) => {
      const { code, name, _id } = currency;
      return <option key={_id} value={_id}>{code} | {name}</option>
    });
    this.setState({ data: currencies });
  }
  render() {
    return (
      <select value={this.state.value} defaultValue="604952e93d4a9573dbf9f408" onChange={this.handleCurrency} name="currency">{this.state.data}</select>
    );
  }
}

export default CurrencySelector;