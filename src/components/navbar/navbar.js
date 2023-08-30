import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./navbar.css";
const Navbar = () => {
  useEffect(() => {
    if (window.innerWidth > 850) {
      document.getElementsByClassName("menulinks")[0].style.display =
        "inline-flex";
    }
  }, [window.innerWidth]);
  const handleopenmenu = () => {
    if (
      window.innerWidth < 850 &&
      document.getElementsByClassName("menulinks")[0].style.display === "none"
    ) {
      document.getElementsByClassName("menulinks")[0].style.display = "flex";
    } else if (window.innerWidth > 850) {
      document.getElementsByClassName("menulinks")[0].style.display =
        "inline-flex";
    } else {
      document.getElementsByClassName("menulinks")[0].style.display = "none";
    }
  };

  return (
    <div className="header">
      <div className="leftheader">
        <div className="name">YUAN.C</div>
      </div>
      <div className="bugermenu" onClick={handleopenmenu}>
        &#9776;
      </div>
      <div className="rightheader">
        <ul className="menulinks">
          <li onClick={handleopenmenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleopenmenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={handleopenmenu}>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li onClick={handleopenmenu}>
            <Link to="/portfolio">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
