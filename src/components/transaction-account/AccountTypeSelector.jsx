import React, { Component } from 'react';

class AccountTypeSelector extends Component {
  constructor (props) {
    super(props);
    this.state = {option: undefined};
    this.handleAccountType = this.handleAccountType.bind(this);
  }
  
  handleAccountType (event) {
    // Update State value from user selection.
    this.setState({option: event.target.value});
    // Return callback event to parent function
    this.props.action(event.target.value);
  }
  
  
  render() {
    const options = this.props.options.map(( option, index ) => {
      return <option key={index}>{option}</option>
    });
    return (
      // Return an HTML Select element with account type list as Options.
      <select className="form-select" value={this.state.option} onChange={this.handleAccountType} name="account_type">{options}</select>
    );
  } 
}

export default AccountTypeSelector;