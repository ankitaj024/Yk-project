// src/ui/InfiniteMovingCards.jsx
import React from "react";
import PropTypes from "prop-types";


export function InfiniteMovingCards({ items, direction, speed }) {
  
  const speedClass = speed === "slow" ? "animate-slow" : "animate-fast";

  return (
    <div className={`flex infinite-cards-container ${direction === "right" ? "flex-row" : "flex-row-reverse"} ${speedClass}`}>
      {items.map((item, index) => (
        <div  key={index} className="relative m-3 rounded-lg mr-2 hover:scale-110 hover:shadow-gray-600 hover:shadow-xl hover:transition hover:ease-in-out hover:cursor-pointer hover:duration-700" style={{backgroundImage:`${item.src}`, width:'350px', height:'200px'}}>
            <div className="absolute rounded-b-lg bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
                {item.name}
            </div>
        </div>
      ))}
    </div>
  );
}

InfiniteMovingCards.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    direction: PropTypes.oneOf(["right", "left"]),
    speed: PropTypes.oneOf(["slow", "fast"]),
  };
  
  InfiniteMovingCards.defaultProps = {
    direction: "right",
    speed: "slow",
  };