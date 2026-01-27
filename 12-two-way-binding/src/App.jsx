

import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("")



  const sumitHandeler = (e) => {
    e.preventDefault(); // mtlab ke form ka default behave ko handle kr liya jis se page reload nhi hoga
    console.log("form submited by -> " , title);
    setTitle(" ")
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          sumitHandeler(e);
        }}
      >
        <input type="text" placeholder="enter your name "

        value={title}

        onChange={(e)=>{
        setTitle(e.target.value);
        }
        }
         /> 
        <br />
        <button>Submit</button>
        {/* <input type="text" /> */}
      </form>
    </div>
  );
};

export default App;
