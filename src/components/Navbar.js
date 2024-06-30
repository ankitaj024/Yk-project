import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Navbar = ({ isOpen, toggleMenu }) => {
    return (
        <nav className={`fixed inset-0 bg-black bg-opacity-90 z-20 ${isOpen ? 'flex' : 'hidden'} md:flex md:relative md:top-0 md:rounded-full mx-auto md:mt-28 p-4 w-full md:w-[70%] md:bg-opacity-50`}>
            <div className="flex flex-col md:flex-row w-full h-full justify-center items-center">
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none md:hidden">
                    <FaTimes className="w-8 h-8" />
                </button>
                <ul className="flex flex-col md:flex-row justify-evenly  md:w-full items-center h-full">
                    <li className="nav-item">
                        <a href="#" className="text-white text-2xl md:text-base hover:text-gray-400" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="text-white text-2xl md:text-base hover:text-gray-400" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="text-white text-2xl md:text-base hover:text-gray-400" onClick={toggleMenu}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="text-white text-2xl md:text-base hover:text-gray-400" onClick={toggleMenu}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="text-white text-2xl md:text-base hover:text-gray-400" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
