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
