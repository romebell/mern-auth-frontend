import React, { useState } from "react";
import * as XLSX from "xlsx";
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { render } from "@testing-library/react";

function Importfile() {
  const [items, setItems] = useState([]);

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

    promise.then((d) => {
      setItems(d);
    });
  };

render()
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Expenses</th>
            <th scope="col">Income</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.Expenses}>
              <th>{console.log("EXPENSES:", d.0)}</th>
              <td>{d.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Importfile;