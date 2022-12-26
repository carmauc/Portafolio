import React from 'react'
import Card from './body/Card';
import Header from './navBar/Header';
import Tarjetas from './Tarjetas';
import Mousetraill from './body/Mousetraill';
// import "./fondo.css"
const Dashboard = () => {
  document.body.style = "background-color: black";

  // useScript(url)
  return (
  <div>
      <Header/>
      <Mousetraill/>
      <Card/>
  </div>
  )
}

export default Dashboard