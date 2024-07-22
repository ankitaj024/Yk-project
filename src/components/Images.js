import React from "react";
import "../pages/about/About.css";

function Images() {
  
  return (
    <div className="overflow-x-hidden relative flex justify-center no-scroll items-center h-screen">
      <div
        className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(bg-abouts/bg-about3.jpg)",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="container scroll-container mx-auto px-5 py-2 md:px-8 md:py-4 lg:px-10 lg:pt-8 flex items-center relative z-10">
        <div className="scroll-content -m-1 flex flex-row sm:flex-wrap md:-m-2">
          <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
            <div className="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="lokesh-1.jpg"
              />
            </div>
            <div className="w-full lg:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="sunilji-1.png"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                src="abeshakji-1.jpg"
              />
            </div>
          </div>
          <div className="flex w-full sm:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="abeshakji-2.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="ajayji-1.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src="ajayji-2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
