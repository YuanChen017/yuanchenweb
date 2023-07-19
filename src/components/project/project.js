import React from "react";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className="Project">
      <a href="https://yuanchen017.github.io/ecommerceweb/" target="_blank">
        Ecommerce web application
      </a>
      <div className="calculate m-2 p-2">
        <Link to="/portfolio/calculate">redirect to calculator PJ</Link>
      </div>
      <div className="baller">
        <Link to="/portfolio/basketball">redirect to Basketball court</Link>
      </div>
      <div className="timer">
        <Link to="/portfolio/timer">redirect to timer</Link>
      </div>
      <div className="searchauto">
        <Link to="/portfolio/searchauto">redirect to auto search</Link>
      </div>
    </div>
  );
};

export default Project;
