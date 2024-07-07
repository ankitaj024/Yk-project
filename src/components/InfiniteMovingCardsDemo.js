// src/components/InfiniteMovingCardsDemo.jsx
import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const testimonials = [
   {
     src:"url(Image.jpg)",
     name:'Name1',
   },
   {
    src:"url(Image.jpg)",
     name:'Name2',
   },
   {
    src:"url(Image.jpg)",
     name:'Name3',
   },
   {
     src:"url(Image.jpg)",
     name:'Name4',
   },
   {
     src:"url(Image.jpg)",
     name:'Name5',
   },
   {
     src:"url(Image.jpg)",
     name:'Name6',
   },
   {
     src:"url(Image.jpg)",
     name:'Name7',
   },
   {
     src:"url(Image.jpg)",
     name:'Name8',
   },
   {
     src:"url(Image.jpg)",
     name:'Name9',
   },
   {
     src:"url(Image.jpg)",
     name:'Name10',
   },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}
