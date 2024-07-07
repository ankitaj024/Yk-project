import React from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css'; // Import custom CSS for keyframes animation
import Images from '../components/Images';

const About = () => {
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
        <Navbar upperMargin = {'top-5'} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              firstInView ? 'animate-slide-up' : 'translate-y-full'
            }`}
          >
            <h1 className="text-5xl  md:text-7xl  font-bold">About Us</h1>
            <p className="mt-4 text-base md:text-lg lg:text-2xl">We are passionate about delivering the best food to your doorstep.</p>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full bg-cover  bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
        <div className="absolute top-0  inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row items-center justify-evenly">
          <div className='relative  w-full p-4 md:w-1/2'>
            <div ref={secondRef} className={`text-white text-center flex flex-col transform transition-transform duration-1000 ${secondInView ? 'animate-slide-up' : 'translate-y-full'}`}>
            <h1 className="text-5xl  md:text-7xl  font-bold">Our Mission</h1>
              <p className="mt-4 text-base md:text-lg lg:text-2xl">To provide fast, reliable, and delicious food delivery services.</p>
            </div>
          </div>
          <div className={`w-full md:w-1/2 p-2 ${secondInView ? 'animate-zoom-out' : ''}`}>
              <div className="relative h-[300px] sm:h-64 text-center  mx-auto md:h-60 lg:h-96 m-4  w-[92%] bg-cover bg-center  md:mb-0" style={{ backgroundImage: 'url(Image.jpg)', width:'92%' }}>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">Name 1</div>
              </div>
          </div>
        </div>
      </div>
      <Images></Images>
      <Footer />
    </div>
  );
};

export default About;
