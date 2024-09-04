import Navbar from './Compents/Navbar/Navbar'
import React from 'react'
import './index.css'
import About from './Compents/About/About'
import Services from './Compents/Services/Services'
import Project from './Compents/Project/Project'
import Content from './Compents/Content/Content'
import Foter from './Compents/Foter/Foter'
import Icons from './Compents/Icons/Icons'


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Project />
      <Content />
      <Foter />
      <Icons/>
    </div>
  )
}

export default App
