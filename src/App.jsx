import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// React Router
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Nav/>}>
//       <Route index element={<Hero/>}/>
//       <Route />
//     </Route>
//   )
// )

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
