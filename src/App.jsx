import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './landingPage/LandingPage';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Feeds from './pages/Feeds';
import Footer from './components/Footer';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default App
