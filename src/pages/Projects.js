<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Project.css'; // Import custom CSS for keyframes animation
=======
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css"; // Import custom CSS for keyframes animation
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";



>>>>>>> 08b20b34e1e4e2cabab8222293e8ebb4e0c83199

function Projects() {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateZoomOut, setAnimateZoomOut] = useState(true);
  
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const images = [
<<<<<<< HEAD
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

=======
    "About.jpg", // Replace with your actual image paths
    "About.jpg",
    "About.jpg",
    "About.jpg",
    "About.jpg",
    "About.jpg",
    "About.jpg",
    "About.jpg",
    "About.jpg",
  ];

>>>>>>> 08b20b34e1e4e2cabab8222293e8ebb4e0c83199
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimateZoomOut(false); // Disable zoom-out animation after the first render
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

<<<<<<< HEAD
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
=======

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
>>>>>>> 08b20b34e1e4e2cabab8222293e8ebb4e0c83199
    setAnimateZoomOut(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAnimateZoomOut(false);
  };

  return (
    <>
<<<<<<< HEAD
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
        <Navbar upper="5" up="2" />
=======
      <div className="relative h-screen w-full bg-cover bg-center" style={{backgroundImage: "url(About.jpg)"}}>
        <div className="logo absolute top-4 left-5 md:hidden">
          <Link to="/" className="text-black text-2xl font-bold">Logo</Link>
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-black absolute z-20 right-5 top-5 focus:outline-none">
            {" "}
            {isOpen ? ( <FaTimes className="w-6 h-6 text-white" />) : (<FaBars className="w-6 h-6 text-black" />)}
          </button>
        </div>

        
        <div className="hidden md:block">
          <Navbar upperMargin={"top-5"} isOpen={true} toggleMenu={toggleMenu} />
        </div>

        <div className="md:hidden">
           {" "} 
           {isOpen && (<Navbar upperMargin={"top-5"} isOpen={isOpen} toggleMenu={toggleMenu}/>)}
        </div>

>>>>>>> 08b20b34e1e4e2cabab8222293e8ebb4e0c83199
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div ref={firstRef} className={`text-white text-center p-6 transform transition-transform duration-1000 ${firstInView ? "animate-slide-up" : "translate-y-full"}`}>
            <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
          </div>
        </div>
      </div>
<<<<<<< HEAD
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
=======

      <div>

          <div className="text-center my-8">
            <h1 className="text-3xl font-bold">Experts at Creating Spectacular Homes</h1>
            <p className="text-xl mt-4">
              From unique design ideas to elements that reflect the owner’s
              personality, the abodes we lovingly bring to life leave most
              speechless.
            </p>
          </div>

          <div className="relative w-full h-screen overflow-hidden">
          {images.map((image, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"} ${index === currentIndex && animateZoomOut ? "slider-zoom-out" : ""}`} style={{ backgroundImage: `url(${image})`}}>
                <div className="absolute inset-0 bg-cover bg-center">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-white text-4xl font-bold">
                      Project {index + 1}
                    </h2>
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
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75" onClick={handlePrev}>
              <FaArrowLeft size={24} />
            </button>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75" onClick={handleNext}>
              <FaArrowRight size={24} />
            </button>
          </div>

      </div>

      <Footer/>
>>>>>>> 08b20b34e1e4e2cabab8222293e8ebb4e0c83199
    </>
  );
}

export default Projects;
