import React from 'react'
import Header from './navBar/Header';
import Section2 from './body/Section2';
import Home from './body/Home';
import Section3 from './body/Section3';
import Footer from './footer/footer';
import Contact from './body/Contact';
import Header1 from './navBar/Header1';
// import "./fondo.css"
const Dashboard = () => {
  document.body.style = "background-color: black";
  // useScript(url)
  return (
  <div className="overflow-x-hidden">
      <Header1/>
      <Home/>
      <Section2 id="section2"/>
      <Section3 id="section3"/>
      <Contact/>
      {/* <Footer/> */}
  </div>
  )
}

export default Dashboard