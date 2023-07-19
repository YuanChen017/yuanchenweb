import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Project from "./components/project/project";
import About from "./components//about/about";
import Navbar from "./components/navbar/navbar";
import Resume from "./components/resume/resume";
import Calcut from "./components/calct/calct";
import Basketball from "./components/basketball/basketball";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./components/timer/timer";
import Searchauto from "./components/searchauto/searchauto";
import Footer from "./components/footer/footer";
function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Project />} />
        <Route path="/portfolio/calculate" element={<Calcut />} />
        <Route path="/portfolio/basketball" element={<Basketball />} />
        <Route path="/portfolio/timer" element={<Timer />} />
        <Route path="/portfolio/searchauto" element={<Searchauto />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
