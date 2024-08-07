import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Projects.css"; // Import custom CSS for keyframes animation

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateZoomOut, setAnimateZoomOut] = useState(true);

  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const images = [
    "bg-projects/parvinji-1.jpg",
    "bg-projects/551-1.jpg",
    "bg-projects/552-1.jpg",
    "bg-projects/553-1.jpg",
    "bg-projects/o7-1.jpg",
    "bg-projects/mandir-1.jpg",
    "bg-projects/sanjayji1-1.jpg",
    "bg-projects/sanjayji2-1.jpg",
    "bg-projects/sanjayji3-1.jpg",
    "bg-projects/t-1.jpg",
    "bg-projects/wasidji-1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimateZoomOut(false); // Disable zoom-out animation after the first render
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
    setAnimateZoomOut(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAnimateZoomOut(false);
  };

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      <div
        className="relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: "url(bg-projects/bg-project.jpg)" }}
      >
        <div className="logo absolute top-4 left-5 md:hidden">
          <Link to="/" className="text-black text-2xl font-bold">
            Logo
          </Link>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black absolute z-20 right-5 top-5 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        <div className="hidden md:block">
          <Navbar upperMargin='5' isOpen={true} toggleMenu={toggleMenu} />
        </div>

        <div className="md:hidden">
          {isOpen && (
            <Navbar  isOpen={isOpen} toggleMenu={toggleMenu} />
          )}
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              firstInView ? "animate-slide-up" : "translate-y-full"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
          </div>
        </div>
      </div>

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
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } ${index === currentIndex && animateZoomOut ? "slider-zoom-out" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold">Project {index + 1}</h2>
            </div>
          </div>
        ))}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={handlePrev}
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          onClick={handleNext}
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
