import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
