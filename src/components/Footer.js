import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black p-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <p>&copy; 2024 My Website. All rights reserved.</p>
    <div className="flex space-x-4 mt-2  md:text-2xl justify-evenly">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-black">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-black">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
