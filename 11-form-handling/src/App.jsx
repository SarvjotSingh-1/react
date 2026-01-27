// import React, { useState } from "react";

// const App = () => {
//   const [Num, setNum] = useState(0);

//   function increaseNum() {
//     setNum(Num + 1);
//   }

//   return (
//     <div>
//       <h1>{Num}</h1>
//       <button onClick={increaseNum}>increase</button>
//     </div>
//   );
// };

// export default App;

import React from "react";

const App = () => {
  const sumitHandeler = (e) => {
    e.preventDefault(); // mtlab ke form ka default behave ko handle kr liya jis se page reload nhi hoga
    console.log("form submited");
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          sumitHandeler(e);
        }}
      >
        <input type="text" placeholder="enter your name " /> <br />
        <button>Submit</button>
        {/* <input type="text" /> */}
      </form>
    </div>
  );
};

export default App;
