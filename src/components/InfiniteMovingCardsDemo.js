// src/components/InfiniteMovingCardsDemo.jsx
import React from "react";
import InfiniteLooper from '../ui/InfiniteLooper';

const testimonials = [
  {
    src: "url(Image.jpg)",
    name: 'Name1',
  },
  {
    src: "url(Image.jpg)",
    name: 'Name2',
  },
  {
    src: "url(Image.jpg)",
    name: 'Name3',
  },
  {
    src: "url(Image.jpg)",
    name: 'Name4',
  },
  {
    src: "url(Image.jpg)",
    name: 'Nme5',
  },
  // {
  //   src: "url(Image.jpg)",
  //   name: 'Name6',
  // },
  // {
  //   src: "url(Image.jpg)",
  //   name: 'Name7',
  // },
  // {
  //   src: "url(Image.jpg)",
  //   name: 'Name8',
  // },
 
];

function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteLooper speed={15} direction="right">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative m-3 rounded-lg mr-2 hover:scale-110 hover:shadow-gray-600 hover:shadow-xl hover:transition hover:ease-in-out hover:cursor-pointer hover:duration-700"
            style={{ backgroundImage: `${item.src}`, width: '350px', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute rounded-b-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
              {item.name}
            </div>
          </div>
        ))}
      </InfiniteLooper>
    </div>
  )
}

export default InfiniteMovingCardsDemo;
