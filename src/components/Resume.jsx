import React, { useState } from 'react';
import '../App.css';
import resumeFile from '../assets/Resume.jpg';

function Resume() {
  const [hover, setHover] = useState(false);
  const proficiencies = [
    'HTML & CSS',
    'JavaScript',
    'React',
    'Node.js',
  ];

  const handleDownloadClick = (e) => {
    const userConfirmed = window.confirm('Download Alexander Duncan\'s Resume?');
    if (!userConfirmed) {
      e.preventDefault();
    }
  };

  const linkStyle = {
    cursor: 'pointer',
    color: hover ? 'red' : 'blue',
    textDecoration: hover ? 'underline' : 'none',
  };
  

  return (
    <section id="resume" className="resume-section">
      <h3>My coding profincies at a glance</h3>
      <ul className="proficiency-list">
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
      <div className="resume-download">
        <p>Or click on my resume for a more indepth look at my skills!</p>
        <a
          href={resumeFile}
          download="Resume.jpg"
          style={linkStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleDownloadClick}
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
