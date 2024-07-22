<<<<<<< HEAD
import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar'; // Assuming you have a predefined Navbar component

function App() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
      <Navbar />
      
      <div className="flex items-center justify-center h-full">
        <div className="text-center animate-fade-up">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-opacity-50 bg-white-800 flex justify-center">
        <div className="flex w-full max-w-4xl space-y-10">
          <div className="w-full md:w-1/2 h-64 md:h-auto pr-4 md:pr-8"> {/* Added padding to the right */}
            <iframe
              title="Google Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509062!2d144.95373531531588!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9c25fa6843b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600056073848!5m2!1sen!2sau"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2">
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Your Phone Number" />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
=======
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a predefined Navbar component
import Footer from '../components/Footer';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import MessageForm from '../components/MessageForm';



function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    } 

    const [firstRef, firstInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    return (
        <div className="relative top-0 h-screen bg-cover  bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>

        <div className="logo absolute top-4 left-5 md:hidden">
            <Link to="/" className="text-black text-2xl font-bold">
              Logo
            </Link>
        </div>

            <div className="block md:hidden">
                <button onClick={toggleMenu} className="text-black absolute right-5 top-5 focus:outline-none">
                    {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-black" />}
                </button>
            </div>
            
            {/* Always show the navbar on md size and above */}
            <div className="hidden md:block">
                <Navbar upperMargin = {"top-5"} isOpen={true} toggleMenu={toggleMenu} />
            </div>

            {/* Show the navbar based on isOpen state for small screens */}
            <div className='md:hidden'>
                {isOpen && <Navbar upperMargin = {"top-5"} isOpen={isOpen} toggleMenu={toggleMenu} />}
            </div>
            


            <div className="flex items-center justify-center h-full">
                <div             ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${firstInView ? 'animate-slide-up' : 'translate-y-full'
              }`}>
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                </div>
            </div>
      
            <div className="bg-opacity-50 bg-white-800 flex justify-center ">
                <div className="flex flex-col gap-3 md:flex-row w-full  md:gap-10  max-w-5xl">
                    <div className="w-full md:w-1/2  h-96  md:h-auto ">
                        <iframe
                            title="Google Map"
                            className="w-full h-full border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509062!2d144.95373531531588!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f9c25fa6843b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600056073848!5m2!1sen!2sau"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                    <div className="w-full md:w-1/2">
                      <MessageForm></MessageForm>
                    </div>
                </div>
            </div>
            
            <div className='w-full flex  flex-col sm:flex-row items-center justify-between space-y-2 py-10 px-32' >
                <div className='flex flex-col items-center md:items-start  space-y-2 w-screen sm:w-[200px]'>
                    <h1 className='text-3xl font-semibold'>Address</h1>
                    <p>Nawalgarh, India, 162012</p>
                </div>
                <div className=" w-screen sm:w-[180px]">
                    <div className='flex flex-col items-center md:items-start  space-y-2'>
                       <h1 className='text-3xl font-semibold'>Email</h1>
                       <p>abc@gmail.com</p>
                    </div>
                    <div className='flex flex-col items-center md:items-start  space-y-2'>
                        <h1 className='text-3xl font-semibold'>Phone</h1>
                        <p>+91 45436474574</p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Contact;
>>>>>>> 08b20b34e1e4e2cabab8222293e8ebb4e0c83199
