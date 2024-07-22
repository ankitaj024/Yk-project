import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, toggleMenu, upperMargin }) => {
  const topStyle = { top: `${upperMargin}px` };

  return (
    <nav
      className={`fixed inset-0 bg-black bg-opacity-90 z-20 ${isOpen ? 'flex' : 'hidden'} md:flex md:relative md:rounded-full  mx-auto p-4 w-full md:w-[70%] md:bg-opacity-50`}
      style={topStyle}
    >
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none md:hidden"
          aria-label="Close menu"
        >
          <FaTimes className="w-8 h-8" />
        </button>
        <ul className="flex flex-col md:flex-row justify-evenly md:w-full items-center h-full">
          <li className="nav-item">
            <Link
              to="/"
              className="text-white text-2xl md:text-base hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="text-white text-2xl md:text-base hover:text-gray-400"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="text-white text-2xl md:text-base hover:text-gray-400"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="text-white text-2xl md:text-base hover:text-gray-400"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="text-white text-2xl md:text-base hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;