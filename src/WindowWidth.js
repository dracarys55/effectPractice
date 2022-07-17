import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function updateWindoWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindoWidth);
    return () => {
      window.removeEventListener('resize', updateWindoWidth);
    };
  }, []);
  return <h1>{windowWidth}</h1>;
};

export default WindowWidth;
