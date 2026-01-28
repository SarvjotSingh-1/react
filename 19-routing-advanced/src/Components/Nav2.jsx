import React from "react";
import { useNavigate } from "react-router-dom";

const Nav2 = () => {
  let navigate = useNavigate("/");
  // const btnClicked = () => {
  //   // console.log("button is clicked");
  //   navigate("/");
  // };

  return (
    <div className=" px-2 bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-orange-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-105"
      >
        Return to Home Page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-orange-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-105"
      >
        Back
      </button>

            <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-orange-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-105"
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
