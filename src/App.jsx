import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Navbar/>  
     <Intro/>
     <Skills/>
     <Works/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
