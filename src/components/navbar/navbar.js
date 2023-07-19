import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <div className="leftheader">
        <div className="name">YUAN.C</div>
      </div>
      <div className="rightheader">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
