import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-transparent text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">YK Engineers and Architects</div>
        <div className="hidden md:flex">
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4">About</a>
          <a href="#" className="px-4">Projects</a>
          <a href="#" className="px-4">Services</a>
          <a href="#" className="px-4">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-4 z-20">
          <button onClick={toggleMenu} aria-label="Close menu" className="absolute top-4 right-4">
            <FaTimes size={20} />
          </button>
          <a href="#" className="text-xl" onClick={toggleMenu}>Home</a>
          <a href="#" className="text-xl" onClick={toggleMenu}>About</a>
          <a href="#" className="text-xl" onClick={toggleMenu}>Projects</a>
          <a href="#" className="text-xl" onClick={toggleMenu}>Services</a>
          <a href="#" className="text-xl" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
