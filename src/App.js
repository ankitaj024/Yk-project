import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Projects from './pages/project/Projects';
import Services from './pages/service/Services';
import Residential from './pages/service/Residential';
import Housing from './pages/service/Housing'
import Commerical from './pages/service/Commerical'


function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} ></Route>
          <Route path="/services/residential" element={<Residential/>} />
          <Route path="/services/housing" element={<Housing/>} />
          <Route path="/services/commerical" element={<Commerical/>} />

        </Routes>
   );
}

export default App;
