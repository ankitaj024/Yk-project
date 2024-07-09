import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Services = () => {
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
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
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
                <Navbar upperMargin={"top-5"} isOpen={true} toggleMenu={toggleMenu} />
            </div>

            {/* Show the navbar based on isOpen state for small screens */}
            <div className='md:hidden'>
                {isOpen && <Navbar upperMargin={"top-5"} isOpen={isOpen} toggleMenu={toggleMenu} />}
            </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${firstInView ? 'animate-slide-up' : 'translate-y-full'
              }`}
          >
            <h1 className="text-5xl  md:text-7xl  font-bold">Services</h1>
          </div>
        </div>
      </div>
      {/* Residential */}
      <div class="overflow-hidden flex">
      <div class="relative h-screen w-full  bg-cover bg-center hover:scale-110 duration-500 transition-transform" style={{ backgroundImage: 'url(About.jpg)' }}>
        <div class="flex h-screen items-center justify-center bg-black bg-opacity-50">
          <div class="group hover:cursor-pointer text-white">
            <h1 class="text-5xl font-bold group-hover:hidden md:text-7xl">Residential</h1>
            <h1 class="hidden text-5xl font-bold group-hover:shadow-lg group-hover:flex md:text-7xl text-wrap text-center">Show Projects</h1>
          </div>
        </div>
      </div>
      </div>
      {/* Housing */}
      <div class="overflow-hidden flex">
      <div class="relative h-screen w-full  bg-cover bg-center hover:scale-110 duration-500 transition-transform" style={{ backgroundImage: 'url(About.jpg)' }}>
        <div class="flex h-screen items-center justify-center bg-black bg-opacity-50">
          <div class="group hover:cursor-pointer text-white">
            <h1 class="text-5xl font-bold group-hover:hidden md:text-7xl">Housing</h1>
            <h1 class="hidden text-5xl font-bold group-hover:shadow-lg group-hover:flex md:text-7xl text-wrap text-center">Show Projects</h1>
          </div>
        </div>
      </div>
      </div>
      {/* Commercial */}
      <div class="overflow-hidden flex">
      <div class="relative h-screen w-full  bg-cover bg-center hover:scale-110 duration-500 transition-transform" style={{ backgroundImage: 'url(About.jpg)' }}>
        <div class="flex h-screen items-center justify-center bg-black bg-opacity-50">
          <div class="group hover:cursor-pointer text-white">
            <h1 class="text-5xl font-bold group-hover:hidden md:text-7xl">Commercial</h1>
            <h1 class="hidden text-5xl font-bold group-hover:shadow-lg group-hover:flex md:text-7xl text-wrap text-center">Show Projects</h1>
          </div>
        </div>
      </div>
      </div>


      <Footer />
    </div>
  );
};

export default Services;
