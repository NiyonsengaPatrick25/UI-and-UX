import React from 'react'
import Navbar from './component/Navbar';
import Main from './component/Main';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import University from '../src/pages/University'
import Contacts from '../src/pages/Contacts' 


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/university" element={<University />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

