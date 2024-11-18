import React, { useState } from "react";
import logo from "../assets/img/logo.webp";
import { Link } from "react-router-dom";

export const Title = () => (
  <Link to={"/"}>
    <div>
      <img alt="Logo" src={logo} className="imageIcon"></img>
    </div>
  </Link>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link> 
          </li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li>Cart</li>
          <li>
            {" "}
            {isLoggedIn == true ? (
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

// we need to export this also

export default HeaderComponent;
