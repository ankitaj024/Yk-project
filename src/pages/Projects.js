import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import './About.css'; // Import custom CSS for keyframes animation
import Footer from '../components/Footer';

function Projects() {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });


  return (
      <>
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
        <Navbar upper="5" up="2" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              firstInView ? 'animate-slide-up' : 'translate-y-full'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
          </div>
        </div>
      </div>
      <div className="">
        <div>
           <h1>Experts at Creating Spectacular Homes</h1>
        </div>
        <div>
          <h1>From unique design ideas to elements that reflect the owner’s personality, the abodes we lovingly bring to life leave most speechless.</h1>
        </div>
      </div>
    </>
  )
}

export default Projects
