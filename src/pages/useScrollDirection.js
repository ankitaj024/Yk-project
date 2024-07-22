import { useState, useEffect } from 'react';

const useScrollDirection = (slidesLength) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollY > lastScrollTop && scrollY > screenHeight * (currentSlide + 0.5)) {
        // Scroll down
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesLength);
      } else if (scrollY < lastScrollTop && scrollY < screenHeight * (currentSlide - 0.5)) {
        // Scroll up
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slidesLength) % slidesLength);
      }

      setLastScrollTop(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide, lastScrollTop, slidesLength]);

  return currentSlide;
};

export default useScrollDirection;
