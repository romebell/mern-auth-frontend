
// import React, { useState } from 'react';
// import axios from 'axios';
// const { REACT_APP_STOCK_API_KEY } = process.env;

// const SearchStocks = (props) => {
//   const [stockss, setStock] = useState('')
//   const onInputChange = (event) => {
//     // the value yes event.target.value
//     setStock(event.target.value)
//   }

//   const onFormSubmit = async (event) => {
//     event.preventDefault()
//     let search = stockss
//     // fetch(`https://api.polygon.io/v2/reference/tickers?search=${search}&perpage=50&page=1&apiKey=${REACT_APP_STOCK_API_KEY}`)
//     fetch(`https://api.polygon.io/v1/open-close/AAPL/${date}?unadjusted=true&apiKey=*`)
//       .then(response => {
//         console.log(response.data);
//       });
//     // setStock('')
//   }
  
//   return (
//     <div>
//       <form onSubmit={onFormSubmit}>
//         <input
//           onChange={onInputChange}
//           type="text" id="newItemDescription"
//           placeholder="New stock here"
//           value={stockss}
//         />
//         <button type="submit" id="addTask" className='btn'>search Stock</button>
//       </form>
//     </div>
//   );
// }

// export default SearchStocks;
// =======
// import axios from 'axios';
// const { REACT_APP_STOCK_API_KEY } = process.env;


//  const SearchStocks = (props) => {
//    const [stockss, setStock] = useState('')
//    const onInputChange = (event) => {
//      // the value yes event.target.value
//      setStock(event.target.value)
//    }

//    const onFormSubmit = async (event) => {
//      event.preventDefault()
//      let search = stockss
//      fetch(`https://api.polygon.io/v2/reference/tickers?search=${search}&perpage=50&page=1&apiKey=${REACT_APP_STOCK_API_KEY}`)
//        .then(response => {
//          console.log(response.data);
//        });
//      // setStock('')
//    }
  

//   return (
//     <div>
//       <form onSubmit={onFormSubmit}>
//         <input
//           onChange={onInputChange}
//           type="text" id="newItemDescription"
//           placeholder="New stock here"
//           value={stockss}
//         />
//         <button type="submit" id="addTask" className='btn'>search Stock</button>
//       </form>
//     </div>
//   );

// }

//  export default SearchStocks;
// >>>>>>> 58f5045b209f96ab7cc368ef196e97c11a6f564b
