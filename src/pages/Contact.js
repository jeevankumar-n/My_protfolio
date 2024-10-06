import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; 
import '../styles.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    emailjs.send('service_0jqhkck', 'template_5tuxxea', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }, 'ouZoQR0YM09lHkbzn')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert(`Message from ${formData.name} has been sent!`);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email', error);
        alert(`Failed to send message: ${error.text || error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

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
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <h2>Find me on</h2>
      <ul>
  <li>
    <a href="https://github.com/jeevankumar-n" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 .198A8 8 0 0 0 0 8c0 3.536 2.292 6.54 5.47 7.595.4.073.545-.173.545-.385 0-.19-.007-.83-.013-1.5-2.052.444-2.634-.496-2.634-.496-.355-.889-.865-1.126-.865-1.126-.706-.482 0-.472 0-.472.78.054 1.191.803 1.191.803.693 1.184 1.815.842 2.26.644.071-.5.273-.842.495-1.035-1.72-.195-3.528-.86-3.528-3.83 0-.845.304-1.536.798-2.08-.08-.195-.344-.975.076-2.033 0 0 .651-.208 2.131.793a7.366 7.366 0 0 1 1.943-.261c.66.001 1.32.089 1.943.261 1.48-1.001 2.131-.793 2.131-.793.42 1.058.156 1.838.076 2.033.494.544.798 1.235.798 2.08 0 2.98-1.813 3.634-3.536 3.83.28.241.529.715.529 1.442 0 1.041-.009 1.883-.013 2.136 0 .213.144.46.547.384A8 8 0 0 0 16 8a8 8 0 0 0-8-7.802z"/>
      </svg>
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/jeevan-kumarn/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 25 25">
  <text x="5" y="20" font-family="Arial" font-size="20" fill="currentColor">in</text>
</svg>


    </a>
  </li>
  <li>
    <a href="mailto:jeevankumarn.21@gmail.com">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.584l7 4.243 7-4.243V4a1 1 0 0 0-1-1H2zm13 10V6.917l-7 4.243-7-4.243V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
      </svg>
    </a>
  </li>
</ul>


      <div className="background-box box-6"></div>
      <div className="background-box box-7"></div>
      <div className="background-box box-8"></div>
      <div className="background-box box-9"></div>
      <div className="background-box box-10"></div>
      <div className="background-box box-11"></div>
      <div className="background-box box-12"></div>
      <div className="background-box box-13"></div>
      <div className="background-box box-16"></div>
    </div>
  );
}

export default Contact;
