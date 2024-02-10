import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './landingPage/LandingPage';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='' element={ <LandingPage/> }/>
      </Routes>
    </Router>
  )
}

export default App
