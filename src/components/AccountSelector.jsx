import React, { Component } from "react";
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

class AccountSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: undefined
    }
    this.handleAccount = this.handleAccount.bind(this);
  }
  handleAccount = (event) => {
    // Update State value from user selection.
    this.setState({value: event.target.value});
    // Return callback event to parent function
    this.props.action(event.target.value);
  }
  async componentDidMount() {
    // Get the accounts for current user
    try {
      const userAccounts = await axios.get(`${REACT_APP_SERVER_URL}/users/transaction-accounts`);
      
      // Map accounts to HTML Options elements
      const accounts = userAccounts.data.map((account) => {
        const { name, _id } = account;
        const { params } = this.props;
        // Set the initial state value to current params.id (default):
        // This will visibly update the selected option to the user,
        // This will *not* update the form value in the parent Component
        if (_id === params.id) {
          this.setState({
            value: _id
          });
          // Push params.id to parent Component via handleAccount Callback,
          // Sets a default value for submission in a larger form Component
          this.props.action(_id);
        }
        return <option key={_id} value={_id}>{name}</option>
      });
      // Set State data to array of HTML Option elements
      this.setState({
        data: accounts
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  
  render() {
    return (
      <select className="form-select" value={this.state.value} onChange={this.handleAccount}>{this.state.data}</select>
    );
  }
}

export default AccountSelector;