import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/works/Works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    Aos.init({duration: 700,
    once:true,
    offset:120,
    easing:"ease-in-out",});
  } , []);

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
