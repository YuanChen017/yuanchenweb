import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import comingsoon from "../images/comingsoon.png";
const Project = () => {
  return (
    <div className="project">
      <div className="eachpj">
        <img src={comingsoon} alt="coming soon" />
        <br />
        <a
          href="https://yuanchen017.github.io/ecommerceweb/"
          target="_blank"
          rel="noreferrer"
        >
          E-commerce web application
        </a>
      </div>
      <div className="eachpj">
        <img src={comingsoon} alt="coming soon" />
        <br />
        <a href="#" target="_blank" rel="noreferrer">
          E-commerce Admin Dashboard
        </a>
      </div>
      <div className="eachpj">
        <img src={comingsoon} alt="coming soon" />
        <Link to="/portfolio/basketball">Basketball court</Link>
      </div>
      <div className="eachpj">
        <img src={comingsoon} alt="coming soon" />
        <Link to="/portfolio/timer">Timer</Link>
      </div>
      <div className="eachpj">
        <img src={comingsoon} alt="coming soon" />
        <Link to="/portfolio/searchauto">Auto Search</Link>
      </div>
    </div>
  );
};

export default Project;
