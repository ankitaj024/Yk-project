import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';
import './About.css'; 
import Images from '../../components/Images';
import { Link } from 'react-router-dom';


const About = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='overflow-x-hidden no-scroll relative'>
      <div className="relative h-screen w-full bg-cover bg-center object-cover" style={{ backgroundImage: 'url(bg-abouts/bg-about4.jpg)' }}>
      <div className="logo absolute top-4 left-5 md:hidden">
          <Link to="/" className="text-black text-2xl font-bold">
            Logo
          </Link>
        </div>
        
        <div className="block md:hidden">
                <button onClick={toggleMenu} className="text-black absolute z-20 right-5 top-5 focus:outline-none">
                    {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-black" />}
                </button>
            </div>
            
            {/* Always show the navbar on md size and above */}
            <div className="hidden md:block">
                <Navbar upperMargin="5" isOpen={true} toggleMenu={toggleMenu} />
            </div>

            <div className='md:hidden'>
                {isOpen && <Navbar  isOpen={isOpen} toggleMenu={toggleMenu} />}
            </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              firstInView ? 'animate-slide-up' : 'translate-y-full'
            }`}
          >
            <h1 className="text-5xl  md:text-7xl  font-bold">About Us</h1>
            <p className="mt-4 text-base md:text-lg lg:text-2xl">We are passionate about delivering the best Design to your doorstep.</p>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-screen bg-cover object-cover bg-center" style={{ backgroundImage: 'url(bg-abouts/bg-about2.jpg)' }}>
        <div className="absolute top-0 inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-evenly">
          <div className='relative w-full p-4 md:w-1/2'>
            <div ref={secondRef} className={`text-white text-center flex flex-col transform transition-transform duration-1000 ${secondInView ? 'animate-slide-up' : 'translate-y-full'}`}>
              <h1 className="text-5xl md:text-7xl font-bold">Our Team</h1>
              <p className="mt-4 text-base md:text-lg lg:text-2xl">To provide fast, reliable, and innovative Architecture services.</p>
            </div>
          </div>
          <div className={`w-full md:w-1/2 p-2 ${secondInView ? 'animate-zoom-out' : ''}`}>
            <div className="relative h-[300px] sm:h-64 text-center mx-auto md:h-60 lg:h-96 m-4 rounded-lg w-[92%] bg-cover bg-center md:mb-0" style={{ backgroundImage: 'url(01.jpg)', width:'92%' }}>
             
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
      <div>
        <Images />
      </div>
      <Footer />
      </div>
      
    </div>
  );
};

export default About;