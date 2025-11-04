import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
// import Navbar from "./Components/Navbar";
import Home from './pages/Home'
import About from './Components/About'
import ProjectPage from './pages/ProjectPage'
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App