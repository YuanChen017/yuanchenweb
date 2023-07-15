import React from "react";
import self from "../images/self.jpg";
import "./home.css";
const Home = () => {
  return (
    <div className="Homepage m-auto">
      <div className="selfimg">
        <img src={self} alt="failed to load" />
      </div>
      <div className="mainhome">
        <h1>YUAN CHEN</h1>
        <p>________ </p>
        <p className="typed">
          Front-End<span> React & Node </span>Back-End Developer
        </p>
        <button className="btn btn-dark">Get in Touch</button>
      </div>
    </div>
  );
};

export default Home;
