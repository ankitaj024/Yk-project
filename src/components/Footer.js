import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white bg-gray-700 py-8 flex flex-col justify-center items-center">
  <div className="container  flex flex-col  md:flex-row items-center justify-between lg:py-1 px-10">
    <p className='text-sm' >&copy; 2024 My Website. All rights reserved.</p>
    <div className="flex space-x-4 md:text-2xl justify-evenly ">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="fab fa-youtube"></i>
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
