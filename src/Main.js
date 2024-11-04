import React from 'react'
import Nav from './Component/Nav'
import Intro from './Component/Intro'
import About from './Component/About'
import LandingPage from './Component/LandingPage'
import Footer from './Component/Footer'
import Contact from './Component/Contact'

const Main = () => {
  return (
    <div >
        <Nav></Nav>
        
       <section id="home" className="section">        <Intro></Intro> </section>
        <section id="about" className="section"><About/></section>
        
        <LandingPage/>
        <Contact></Contact>
        <Footer></Footer>
        
        
    </div>
  )
}

export default Main