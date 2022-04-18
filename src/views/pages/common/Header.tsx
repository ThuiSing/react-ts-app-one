import logo from "assets/images/logo.png";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container mx-auto bg-gray-200 flex justify-between items-center py-2">
      <div className="w-56">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="pr-2">
        <Link to="/login" className=" font-semibold mr-5">
          login
        </Link>
        <input type="text" className="w-72  p-2" placeholder="search here" />
      </div>
    </div>
  );
};

export default Header;
