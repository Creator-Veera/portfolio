import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from "./Components/Navbar";
import Home from './pages/Home'
import About from './Components/About'
import ProjectPage from './pages/ProjectPage'
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App