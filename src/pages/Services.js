import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='overflow-x-hidden no-scroll relative'>
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
       <Navbar upperMargin = {'top-5'} />
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
