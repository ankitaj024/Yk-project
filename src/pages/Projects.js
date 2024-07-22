import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Project.css'; // Import custom CSS for keyframes animation

function Projects() {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const images = [
    'About.jpg', // Replace with your actual image paths
    'About.jpg',
    'About.jpg',
    'About.jpg',
    'About.jpg',
    'About.jpg',
    'About.jpg',
    'About.jpg',
    'About.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateZoomOut, setAnimateZoomOut] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimateZoomOut(false); // Disable zoom-out animation after the first render
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setAnimateZoomOut(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAnimateZoomOut(false);
  };

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
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold">Experts at Creating Spectacular Homes</h1>
          <p className="text-xl mt-4">
            From unique design ideas to elements that reflect the owner’s personality, the abodes we lovingly bring to life leave most speechless.
          </p>
        </div>
        <div className="relative w-full h-screen">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } ${index === currentIndex && animateZoomOut ? 'slider-zoom-out' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-cover bg-center">
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h2 className="text-white text-4xl font-bold">Project {index + 1}</h2>
                </div>
                <div className="w-full h-full project-image hover:scale-105">
                  {/* Adjust hover scale value as needed */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <a href={`/projects/project-${index + 1}`} className="text-white text-lg bg-black bg-opacity-70 px-4 py-2 rounded">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            onClick={handlePrev}
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            onClick={handleNext}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
