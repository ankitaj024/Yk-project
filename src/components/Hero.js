import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a delay to ensure initial content is visible
    const delayTimer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // 1 second delay to start animation after initial load

    return () => {
      clearTimeout(delayTimer);
    };
  }, []);

  return (
    <div className="h-[100vh] md:h-[72vh] lg:h-[76vh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="video.mp4" // Replace with your video URL
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <AnimatePresence>
          {loaded && (
            <motion.div
              key="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className="text-center mt-5"
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="text-white text-lg md:text-xl mb-2"
              >
                Welcome to YKEA
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
                className="text-yellow-100 text-5xl  md:text-9xl  mb-2"
              >
                We
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
                className="text-white text-2xl md:text-4xl  flex flex-col gap-3 justify-center items-center"
              >
                <motion.p className="text-center">
                  Make Spaces Better
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeroSection;
