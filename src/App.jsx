import { useRef, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const homeref = useRef(null)
  const projectref = useRef(null)
  const aboutref = useRef(null)
  const contactref = useRef(null)

  return (
    <>
      <Nav 
        scrollToHome={() => homeref.current.scrollIntoView({behavior: 'smooth' })}
        scrollToProjects={() => projectref.current.scrollIntoView({behavior: 'smooth' })}
        scrollToAbout={() => aboutref.current.scrollIntoView({behavior: 'smooth' })}
        scrollToContact={() => contactref.current.scrollIntoView({behavior: 'smooth' })}
      />
      <div ref={homeref}><Hero/></div>
      <div ref={projectref}><Project/></div>
      <div ref={aboutref}><About/></div>
      <div ref={contactref}><Contact/></div>
      <Footer/>
    </>
  )
}

export default App
