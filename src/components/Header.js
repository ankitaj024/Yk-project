import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute z-10 w-full  top-0">
            <header className="flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-white bg-opacity-25">
                <div className="logo mb-4 md:mb-0">
                    <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/02/08131807/aa-by-mohammed-siyamand-dribbble.png" alt="Logo" className="h-10" />
                </div>
                <h1 className="flex-grow text-center text-3xl md:text-5xl text-black font-dancing-script">
                    YK Engineers and Architects
                </h1>
                <div className="block md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? <FaTimes className="w-6 h-6 text-white" /> : <FaBars className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </header>
            {/* Render Navbar only on smaller screens or if the menu is open */}
            {isOpen && <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />}
            {/* Render Navbar on larger screens */}
            {!isOpen && <div className="hidden">
                <Navbar isOpen={true} toggleMenu={toggleMenu} />
            </div>}
        </div>
    );
};

export default Header;
