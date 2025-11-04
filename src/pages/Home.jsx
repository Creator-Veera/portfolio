import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Project/>
        <Skills />
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home