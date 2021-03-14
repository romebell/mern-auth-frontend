import React, { Component } from "react";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

class CurrencySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {value: undefined};
    this.handleCurrency = this.handleCurrency.bind(this);
  }
  handleCurrency (event) {
    // Update State value from user selection.
    this.setState({value: event.target.value});
    // Return callback event to parent function
    this.props.action(event.target.value);
  }
  
  async componentDidMount() {
    // Get list of all currency values from server
    const currencyRequest = await axios.get(`${REACT_APP_SERVER_URL}/currencies`);
    
    // Map currencies to HTML Options elements
    const currencies = currencyRequest.data.map((currency) => {
      const { code, name, _id } = currency;
      // Set the initial state value to USD (default):
      // This will visibly update the selected option to the user,
      // This will *not* update the form value in the parent Component
      if (code === "USD") {
        this.setState({
          value: _id
        });
        // Push USD id to parent Component via handleCurrency Callback,
        // Sets a default value for submission in a larger form Component
        this.props.action(_id);
      }
      return <option key={_id} value={_id}>{code} | {name}</option>
    });
    // Set State data to array of HTML Option elements
    this.setState({
      data: currencies
    });
  }
  render() {
    return (
      // Return an HTML Select element with currency list as Options.
      <select class="form-select" value={this.state.value} onChange={this.handleCurrency} name="currency">{this.state.data}</select>
    );
  }
}

export default CurrencySelector;