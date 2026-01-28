import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-8 bg-cyan-900">
      <h2 className="text-xl font-bold">Web Page</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to="/">
          home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          about
        </Link>
        <Link className="text-lg font-medium" to="/Courses">
          Courses
        </Link>
        <Link className="text-lg font-medium" to="/product">
          product
        </Link>

        {/*<a className="text-lg font-medium" href="/">
          home
        </a>
        <a className="text-lg font-medium" href="/about">
          about
        </a>
        <a className="text-lg font-medium" href="/product">
          product
        </a>*/}
      </div>
    </div>
  );
};

export default Navbar;
