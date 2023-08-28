import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
const Project = () => {
  return (
    <div className="project">
      <div className="eachpj">
        <a
          href="https://yuanchen017.github.io/ecommerceweb/"
          target="_blank"
          rel="noreferrer"
        >
          Ecommerce web application
        </a>
      </div>
      <div className="eachpj">
        <Link to="/portfolio/basketball">Basketball court</Link>
      </div>
      <div className="eachpj">
        <Link to="/portfolio/timer">Timer</Link>
      </div>
      <div className="eachpj">
        <Link to="/portfolio/searchauto">Auto Search</Link>
      </div>
    </div>
  );
};

export default Project;
