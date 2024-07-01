import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css'; // Import custom CSS for keyframes animation

const About = () => {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  const [secondRef, secondInView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <>
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={firstRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              firstInView ? 'animate-slide-up' : 'translate-y-full'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
            <p className="mt-4 text-lg md:text-2xl">We are passionate about delivering the best food to your doorstep.</p>
          </div>
        </div>
      </div>

      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(About.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div
            ref={secondRef}
            className={`text-white text-center p-6 transform transition-transform duration-1000 ${
              secondInView ? 'animate-slide-up' : 'translate-y-full'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold">Our Mission</h1>
            <p className="mt-4 text-lg md:text-2xl">To provide fast, reliable, and delicious food delivery services.</p>
          </div>

          <div className="container mx-auto mt-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-2/5 p-4">
                <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                    Name 1
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 lg:w-1/5 p-4">
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                    Name 2
                  </div>
                </div>
                <div className="relative h-48 mt-4 bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                    Name 3
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4 lg:w-1/5 p-4">
                <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                    Name 4
                  </div>
                </div>
                <div className="relative h-48 mt-4 bg-cover bg-center" style={{ backgroundImage: 'url(Image.jpg)' }}>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                    Name 5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
