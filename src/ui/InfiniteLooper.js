import React, { useState, useRef } from 'react';
import './InfiniteLooper.css';

  function InfiniteLooper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLooper;