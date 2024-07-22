import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import './res.css'


function Residential() {
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
    <div className="relative box-border bg-opacity-50 z-50 w-screen h-screen overflow-x-hidden">
      <div
        className="relative top-0 w-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/bg-services/bg-service2.jpg)",
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

        <div className="hidden md:block">
          <Navbar upperMargin='5' isOpen={true} toggleMenu={toggleMenu} />
        </div>

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
              Residential
            </h1>
          </div>
        </div>
      </div>

      <div>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">
                Experts at Creating Spectacular Homes
              </h1>
              <p className="text-gray-700">
                From unique design ideas to elements that reflect the owner’s
                personality, the abodes we lovingly bring to life leave most
                speechless.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-200">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              {/* Project 1 */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <Link
                  to="/"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow hover-effect"
                  style={{
                    backgroundImage: "url(/divine-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Divine House
                  </h3>
                </Link>
              </div>
              {/* Project 2 */}
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <Link 
                  to="/"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 hover-effect"
                  style={{
                    backgroundImage: "url(/abeshakji-1.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                   Elegant Dwellings
                  </h3>
                </Link>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <Link
                    to="/"
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 hover-effect"
                    style={{
                      backgroundImage: "url(/lokesh-1.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Chic Abodes
                    </h3>
                  </Link>
                  <Link
                    to="/"
                    className="group hover:bg-opacity-50 relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 hover-effect"
                    style={{
                      backgroundImage: "url(/sunilji-1.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Premier Living
                    </h3>
                  </Link>
                </div>
              </div>
              {/* Project 3 */}
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <Link
                  to="/"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow hover-effect"
                  style={{
                    backgroundImage: "url(/01.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Stylish Havens
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Residential;
