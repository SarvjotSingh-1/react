import React from "react";

const App = () => {
  // const btnclicked = () => {
  //   console.log("butn clicked");
  // };
  // const mouseEnter = () => {
  //   console.log("mouse enter");
  // };

  const inputChange = (val) => {
    console.log(val);
  };

  return (
    <>
      App
      <h1>hello , sarvjot </h1>
      {/* <button
        onClick={btnclicked}
      >
        click here
      </button> */}
      {/* <button
        onClick={() => {
          console.log("clicked");
        }}                                                
      >
        click here
      </button> */}
      {/* <input
        type="text"
        placeholder="enter name"
        // onChange={() => {
        //   console.log("input pr click hua h ");
        // }}
        onChange={(elem)=>{
          inputChange(elem.target.value)
        }}


      ></input> */}
      {/* <div
        className="box"
        onMouseMove={(elem) => {
          console.log(elem.target.clientX);
          // console.log(elem.target.clientY , elem.target.clientX);
        }}
      ></div> */}
      {/* <div
        onWheel={(Element) => {
          if (Element.deltaY > 0) {
            console.log("up scrolling");
          } else {
            console.log("down scrolling");
          }
          // console.log('speed',Element.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div> */}
      <button
        onClick={() => {
          console.log("btn clicked");
        }}
      >
        Click
      </button>
    </>
  );
};

export default App;
