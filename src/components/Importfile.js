import React, { useState } from "react";
import * as XLSX from "xlsx";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { render } from "@testing-library/react";
import axios from 'axios'

const { REACT_APP_SERVER_URL } = process.env;

function Importfile() {
  //initial state is an empty array 
  const [excelData, setExcelData] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        console.log("========> BufferArray")
        console.log(bufferArray)

        //wb = work book
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        console.log("========> WB")
        console.log(wb)

        //wsname = work sheet name
        const wsname = wb.SheetNames[0];
        console.log("========> WS NAME")
        console.log(wsname)

        //ws = work sheet
        const ws = wb.Sheets[wsname];
        console.log("========> WS")
        console.log(ws)

        //data is converted from xlsx format to json
        const data = XLSX.utils.sheet_to_json(ws);
        console.log("========> DATA")
        console.log(data)

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((data) => {
      setExcelData(data);
      handleFile(data);
    });
  };

  //Handle form submission and creation of Transaction Account
  const handleFile = async (data) => {
    
    console.log("HANDLE FILE")
    console.log(data) 
    
    const process = async (d) => {        
      const payee = d.payee
      const amount = d.amount
      const currency = d.currency
      const exchange_rate = d.exchange_rate
      const type = d.type
      const category = d.category
      const memo = d.memo
      const transactionDate = d.date
      const account = d.account

      const transactionValues = { payee, amount, currency, exchange_rate, type, memo, transactionDate };
      console.log("*****HANDLE FILE****")
      console.log(transactionValues)
      try {
        const newTransaction = await axios.post(`${REACT_APP_SERVER_URL}/accounts/update-account`, transactionValues);
        console.log(newTransaction.data);
      } catch (error) {
        if (typeof error.response.data !== "string") {
          const errorsArray = error.response.data
          for (const e of errorsArray) {
            console.error(`${e.name}: ${e.message}`)
          }
        } else {
          console.error(`${error.name}: ${error.message}`)
        }
      }
    }

    //separating map function so async and await work within one function
    data.map(item => process(item))

  }


render()
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          e.preventDefault();
          const file = e.target.files[0];
          readExcel(file)
        }}
      />

      <table class="table container">
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Amount</th>
            <th scope="col">Payee</th>
            <th scope="col">Type</th>
            <th scope="col">Date</th>
          </tr>
          <tr>
            {excelData.map((d) => (
              <tr key={d.currency}>
                <td>{d.currency}</td>
                <td>{d.amount}</td>
                <td>{d.payee}</td>
                <td>{d.type}</td>
                <td>{d.date}</td>
              </tr>
            ))}
          </tr>
      </table>
    </div>
  );
}

export default Importfile;

// import React, { Component } from 'react';
// import axios from "axios";
// import { CSVReader } from "react-papaparse";
// const { REACT_APP_SERVER_URL } = process.env;


// class Importfile extends Component {
//   constructor (props) {
//     super(props);
//     this.textInput = React.createRef();
//     this.handleOnDrop = this.handleOnDrop.bind(this);
//   }
//   handleOnDrop = (upload) => {
//     console.log(upload)
//   }
//   handleOnError = (err, file, inputElem, reason) => {
//     console.log(err);
//   };
//   handleOnRemoveFile = (data) => {
//     console.log('---------------------------');
//     console.log(data);
//     console.log('---------------------------');
//   };
//   render() {
//     return (
//       <div className="">
//         <input type="file" ref={this.textInput} />
//           <CSVReader
//           onDrop={this.handleOnDrop}
//           onError={this.handleOnError}
//           addRemoveButton
//           onRemoveFile={this.handleOnRemoveFile}
//         >
//           <span>Drop CSV file here or click to upload.</span>
//         </CSVReader>
//       </div>
//     );
//   }
// }
// export default Importfile;