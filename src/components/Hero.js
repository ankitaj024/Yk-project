import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const images = [
    "url('https://as1.ftcdn.net/v2/jpg/01/98/08/14/1000_F_198081475_8z9wo4f9sC39d493CfdsWQbzCVv9EncC.jpg')",
    "url('https://images.pexels.com/photos/415574/pexels-photo-415574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    "url('https://images.pexels.com/photos/392031/pexels-photo-392031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
  ];

  const texts = [
    "Creating sustainable and innovative solutions for the future.",
    "Building dreams with precision and care.",
    "Engineering the future, one project at a time."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image and text every 4 seconds (1 second delay + 3 seconds for animation)

    // Set loaded to true after a delay to ensure initial image is visible
    const delayTimer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // 1 second delay to start carousel animation after initial load

    return () => {
      clearInterval(interval);
      clearTimeout(delayTimer);
    };
  }, [images.length]);

  return (
    <div className="h-screen overflow-hidden relative">
      <AnimatePresence>
        {loaded && (
          <motion.div
            key={currentIndex}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: images[currentIndex],
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  YK Engineers and Architects
                </h1>
                <p className="text-white text-lg md:text-2xl">
                  {texts[currentIndex]}
                </p>
              </div>
            </div>
          </motion.div>
        )}
        {!loaded && (
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: images[0], // Display the first image initially
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  YK Engineers and Architects
                </h1>
                <p className="text-white text-lg md:text-2xl">
                  {texts[0]} {/* Display corresponding text for the first image */}
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSection;
