import React, { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
   <>
    <Hero/>
    <Services/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
