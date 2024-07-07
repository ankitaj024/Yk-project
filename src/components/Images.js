import React from "react";
import { useInView } from "react-intersection-observer";
import "../pages/About.css"; // Ensure the correct path to your CSS file

import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

function Images() {
  const [firstRef, firstInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [secondRef, secondInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="overflow-x-hidden no-scroll bg-black bg-opacity-50 relative">
      <div className="relative border-2 border-orange-500 h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url(about.jpg)"}}>
        <div className="absolute bg-black bg-opacity-50 w-full mx-auto py-5 border-2 border-cyan-500">
          <div className="text-5xl md:text-7xl text-center font-bold text-white">Our Team</div>
        </div>

        <div className="absolute bg-black bg-opacity-50  w-screen border-2 border-cyan-500 top-20 md:top-28 flex flex-col  justify-center items-center">
            {/* <div className="flex justify-between border-box border-2 border-black w-[70%] flex-col items-center md:flex-row">
                <div className="relative m-3 rounded-lg mr-2 hover:scale-110 hover:shadow-gray-600 hover:shadow-xl hover:transition hover:ease-in-out hover:cursor-pointer hover:duration-700 " style={{backgroundImage: "url(about.jpg)", width:'350px', height:'200px'}}>
                    <div className="absolute rounded-b-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                        Name 2
                    </div>
                </div>
                <div  className="relative m-3 rounded-lg hover:scale-110 hover:shadow-gray-600 hover:shadow-xl hover:transition hover:ease-in-out hover:cursor-pointer hover:duration-700"  style={{backgroundImage: "url(about.jpg)", width:'350px', height:'200px'}}>
                    <div  className="absolute rounded-b-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                      Name 3
                    </div>
                </div>
            </div>
            <div className="flex justify-between border-2 border-box border-black w-[70%] flex-col items-center md:flex-row">
                <div className="relative md:m-3 mx-auto rounded-lg hover:scale-110 hover:shadow-gray-600 hover:shadow-xl hover:transition hover:ease-in-out hover:cursor-pointer hover:duration-700"  style={{backgroundImage: "url(about.jpg)", width:'350px', height:'200px'}}>
                    <div className="absolute rounded-b-lg  bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                       Name 4
                    </div>
                </div>
                <div className="relative m-3  md:m-3 mx-auto rounded-lg hover:scale-110 hover:shadow-gray-600 hover:shadow-xl hover:transition hover:ease-in-out hover:cursor-pointer hover:duration-700"  style={{backgroundImage: "url(about.jpg)", width:'350px', height:'200px'}}>
                    <div className="absolute rounded-b-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                       Name 5
                    </div>
                </div>
            </div> */}
            
            <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
        </div>
      </div>
    </div>
  );
}

export default Images;
