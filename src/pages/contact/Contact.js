import React, { useState, useEffect} from "react";
import Navbar from "../../components/Navbar"; // Assuming you have a predefined Navbar component
import Footer from "../../components/Footer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MessageForm from "../../components/MessageForm";


function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  

 


  return (
    <div className=" relative box-border  w-screen h-screen overflow-x-hidden">
      <div
        className="relative top-0 w-screen  h-screen bg-black bg-opacity-50 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(bg-contact.jpg)",
        }}
      >
        <div className="logo absolute top-4 left-5 md:hidden">
          <Link to="/" className="text-black text-2xl font-bold">
            Logo
          </Link>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black absolute right-5 top-5 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Always show the navbar on md size and above */}
        <div className="hidden md:block">
          <Navbar upperMargin="5" isOpen={true} toggleMenu={toggleMenu} />
        </div>

        {/* Show the navbar based on isOpen state for small screens */}
        <div className="md:hidden">
          {isOpen && (
            <Navbar
              
              isOpen={isOpen}
              toggleMenu={toggleMenu}
            />
          )}
        </div>

        <div className="flex items-center justify-center h-full">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              firstInView ? "animate-slide-up" : "translate-y-full"
            }`}
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-opacity-50 bg-white-800 pt-14 md:pb-5 flex justify-center  bg-gray-200 ">
        <div className="flex flex-col gap-3 md:flex-row w-full  md:gap-10  max-w-5xl">
          <div className="w-full md:w-1/2  h-96  md:h-auto ">
          <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7247188498865!2d75.2671406!3d27.8501338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cb4c08ea9131d%3A0x18a7b98c22e9dc13!2sYK%20Engineering%20Services!5e0!3m2!1sen!2sin!4v1623170610161!5m2!1sen!2sin"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
          </div>
          <div className="w-full md:w-1/2">
            <MessageForm></MessageForm>
          </div>
        </div>
      </div>

      <div className="w-full flex  flex-col sm:flex-row items-center bg-gray-200 justify-between space-y-2 py-10 px-32">
        <div className="flex flex-col items-center md:items-start  space-y-2 w-screen sm:w-[200px]">
          <h1 className="text-3xl font-semibold">Address</h1>
          <p>YK Engineers And Architecture, Nawalgarh,Rajasthan, India, 333042</p>
        </div>
        <div className=" w-screen sm:w-[180px]">
          <div className="flex flex-col items-center md:items-start  space-y-2">
            <h1 className="text-3xl font-semibold">Email</h1>
            <p>Ykengineeringservices@gmail.com </p>
          </div>
          <div className="flex flex-col items-center md:items-start  space-y-2">
            <h1 className="text-3xl font-semibold">Phone</h1>
            <p>+91 8005528285</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
