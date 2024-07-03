import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <nav className="bg-gray-200 w-full py-4  px-8 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-black text-2xl font-bold">
            Logo
          </Link>
        </div>
        {/* Menu toggle button for small screens */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none px-3 py-2"
          >
            {isOpen ? (
              <FaTimes size={24} className="text-black fixed md:block right-6 top-5 z-10" />
            ) : (
              <FaBars size={24} className="text-black" />
            )}
          </button>
        </div>
        {/* Menu items */}
        <ul
          className={`${
            isOpen
              ? 'flex fixed top-0 left-0 h-full w-full bg-gray-200 flex-col items-center justify-center'
              : 'hidden'
          } lg:flex lg:space-x-8 lg:items-center gap-10 flex-col lg:flex-row font-dancing-script`}
        >
          <li className="nav-item">
            <Link
              to="/"
              className="text-black text-2xl  hover:text-gray-600 py-2  lg:py-0"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="text-black text-2xl  hover:text-gray-600 py-2 lg:py-0"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="text-black text-2xl  hover:text-gray-600 py-2 lg:py-0"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className="text-black text-2xl  hover:text-gray-600 py-2 lg:py-0"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="text-black text-2xl  hover:text-gray-600 py-2 lg:py-0"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
