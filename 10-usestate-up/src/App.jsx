// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [num, setNum] = useState({ userName: "Amit", age: 22 });
//   // const [num, setNum] = useState([10, 20, 30]);

//   // with object
//   // const btnClicked = () => {
//   //   const newNum = { ...num };
//   //   newNum.userName = "Aman";
//   //   newNum.age = 24;
//   //   setNum(newNum);
//   // };

//   // with array
//   // const btnClicked = () => {
//   //   const newNum = [...num];
//   //   newNum.push(99);
//   //   setNum(newNum);
//   // };

//   const btnClicked = () => {
//     setNum((prev) => ({ ...prev, age: 50 }));
//   };

//   return (
//     <div>
//       {/* <h1>{num}</h1> */}
//       <h1>
//         {num.userName}, {num.age}
//       </h1>
//       <button onClick={btnClicked}>Cick</button>
//     </div>
//   );
// };

// export default App;

// Batch update

import React from "react";

import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  //batch update
  const btnclicked = () => {
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>Clicked</button>
    </div>
  );
};

export default App;
