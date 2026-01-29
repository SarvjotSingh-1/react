import React from "react";

const Navbar = (props) => {
  console.log(props);

  const changeTheme = () => {
    props.setTheme("light");
  };
  return (
    <div>
      {/* <p>{props.theme}</p> */}
      <button onClick={changeTheme}>Login</button>
    </div>
  );
};

export default Navbar;
