import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Project from "./components/project/project";
import About from "./components//about/about";
import Navbar from "./components/navbar/navbar";
import Calcut from "./components/calct/calct";
import Basketball from "./components/basketball/basketball";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./components/timer/timer";
import Searchauto from "./components/searchauto/searchauto";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/portfolio/calculate" element={<Calcut />} />
        <Route path="/portfolio/basketball" element={<Basketball />} />
        <Route path="/portfolio/timer" element={<Timer />} />
        <Route path="/portfolio/searchauto" element={<Searchauto />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
