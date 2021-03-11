import React from 'react'
import ReactDOM from 'react-dom'
import CSVReader from 'csv-reader'

export class Importfile extends React.Component {
    constructor (props) {
        super (props)

        this.state
    }
    render() {
    return (
        <div>
            <CSVReader
            cssClass="csv-reader-input"
            label="Select CSV with secret Death Star statistics"
            onFileLoaded={this.handleForce}
            onError={this.handleDarkSideForce}
            inputId="ObiWan"
            inputStyle={{color: 'red'}}
            />
        </div>
    )
    }
}

export default Importfile
