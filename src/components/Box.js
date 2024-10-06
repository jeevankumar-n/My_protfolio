import React, { useRef, useEffect } from 'react';
import './Box.css'; // Ensure to create this CSS file

function Box() {
  const boxRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const box = boxRef.current;
      const rect = box.getBoundingClientRect();
      const boxX = rect.left + rect.width / 2;
      const boxY = rect.top + rect.height / 2;

      const x = (e.clientX - boxX) / box.offsetWidth;
      const y = (e.clientY - boxY) / box.offsetHeight;

      // Apply the 3D transform effect
      box.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="box" ref={boxRef}></div>;
}

export default Box;
