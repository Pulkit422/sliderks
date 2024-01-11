// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import Imageslider from './components/imageslider'
// import './App.css'
import './components/slider.css'
import Nextpage from './components/Nextpage'
import { Sliderdata } from './components/sliderdata'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'

function App() {

  return 
  <Router>
    <Routes>
      <Route path="/" element={<Imageslider slides={Sliderdata}/>}/>
      <Route path='/nextpage' element={<Nextpage/>}/>
    </Routes>
  </Router>
}

export default App 
