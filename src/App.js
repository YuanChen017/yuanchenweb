import React from "react";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Project from "./components/project/project";
import About from "./components//about/about";
import Navbar from "./components/navbar/navbar";
import Basketball from "./components/basketball/basketball";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./components/timer/timer";
import Searchauto from "./components/searchauto/searchauto";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
function App() {
  return (
    <HashRouter baseline="/">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/portfolio/basketball" element={<Basketball />} />
        <Route path="/portfolio/timer" element={<Timer />} />
        <Route path="/portfolio/searchauto" element={<Searchauto />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
