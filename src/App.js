import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <Header/>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
