import React, { useEffect } from 'react';
import '../styles.css';
import myImage from '../pages/photo (1).jpg';

function Home() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const boxes = document.querySelectorAll('.background-box');

      boxes.forEach((box, i) => {
        const speed = (i + 1) * 2;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        box.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="home">
      <div className="background-box box-1"></div>
      <div className="background-box box-2"></div>
      <div className="background-box box-3"></div>
      <div className="background-box box-4"></div>
      <div className="background-box box-5"></div>
      <div className="background-box box-6"></div>
      <div className="background-box box-7"></div>
      <div className="background-box box-8"></div>
      <div className="background-box box-9"></div>
      <div className="background-box box-10"></div>
      <div className="background-box box-11"></div>
      <div className="background-box box-12"></div>
      <div className="background-box box-13"></div>
      <div className="background-box box-14"></div>
      <div className="background-box box-15"></div>
      <div className="background-box box-16"></div>

      <div className="content-container">
        <div className="text-section">
          <h1>
            {Array.from('Jeevan Kumar N').map((char, index) => (
              <span key={index}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p>
            {Array.from('Hello! I\'m a full-stack developer with a passion for building web applications, I thrive on transforming innovative ideas into functional digital solutions.').map((char, index) => (
              <span key={index}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
        </div>
        <div className="image-section">
          <img className="toggle-image" src={myImage} alt="Jeevan Kumar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
