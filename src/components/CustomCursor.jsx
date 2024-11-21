import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [cursorSize, setCursorSize] = useState(40);
  const [cursorHover, setCursorHover] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      setPosition(newPosition);
      
      setTrail(prev => {
        const newTrail = [...prev, newPosition];
        return newTrail.slice(-10);
      });
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        setCursorSize(60);
        setCursorHover(true);
      } else if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        setCursorSize(50);
        setCursorHover(true);
      }
    };

    const handleMouseLeave = () => {
      setCursorSize(40);
      setCursorHover(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {trail.map((trailPos, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            width: `${cursorSize - index * 3}px`,
            height: `${cursorSize - index * 3}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, 
              rgba(128,0,128,${0.8 - index * 0.07}) 0%, 
              rgba(75,0,130,${0.6 - index * 0.05}) 50%, 
              rgba(0,0,0,${0.3 - index * 0.02}) 100%)`,
            transform: 'translate(-50%, -50%)',
            left: `${trailPos.x}px`,
            top: `${trailPos.y}px`,
            pointerEvents: 'none',
            zIndex: 9999,
            boxShadow: `0 0 10px ${cursorHover ? 'rgba(255,255,255,0.5)' : 'rgba(128,0,128,0.5)'}`
          }}
        />
      ))}

      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, 
            rgba(128,0,128,0.9) 0%, 
            rgba(75,0,130,0.7) 50%, 
            rgba(0,0,0,0.4) 100%)`,
          transform: 'translate(-50%, -50%)',
          left: `${position.x}px`,
          top: `${position.y}px`,
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: `0 0 15px ${cursorHover ? 'rgba(255,255,255,0.7)' : 'rgba(128,0,128,0.7)'}`
        }}
      />
    </>
  );
};

export default CustomCursor;