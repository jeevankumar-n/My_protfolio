import React, { useEffect } from 'react';
import '../styles.css'; // Import styles for background boxes and general layout

function About() {
  useEffect(() => {
    // Function to animate boxes based on mouse movement
    const handleMouseMove = (e) => {
      const boxes = document.querySelectorAll('.background-box');

      boxes.forEach((box, i) => {
        const speed = (i + 1) * 2; // Varying speed for each box
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        // Applying transform to each box
        box.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to wrap each letter in a span, preserving spaces
  const wrapTextInSpans = (text) => {
    return text.split('').map((letter, index) => {
      // Wrap spaces in a span with a different class
      if (letter === ' ') {
        return <span key={index} className="space" />;
      }
      return <span key={index} className="bubbling-letter">{letter}</span>;
    });
  };

  return (
    <div className="about">
      <p className="about-description">
        {wrapTextInSpans("I'm a full-stack developer with a deep passion for building intuitive    and dynamic web applications. My love for coding and problem-solving drives me to constantly learn and improve, staying on the cutting     edge of technology. Whether it's crafting seamless user interfaces or developing robust backend systems, I thrive on creating impactful     digital solutions.")}
      </p>
      <h1>Skills</h1>
      <ul className="skills">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>MongoDB</li>
        <li>Git & GitHub</li>
      </ul>

      {/* 3D animated background boxes */}
      <div className="background-box box-1"></div>
      <div className="background-box box-2"></div>
      <div className="background-box box-5"></div>
      <div className="background-box box-9"></div>
      <div className="background-box box-13"></div>
      <div className="background-box box-14"></div>
      <div className="background-box box-16"></div>
    </div>
  );
}

export default About;
