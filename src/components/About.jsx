import React from 'react';
import profilePic from '../assets/Avatar.jpg';

function About() {
  return (
    <section id="about" className="About Me">
      <h1>Hello!</h1>
      <div className="about-me-content">
        <img src={profilePic} alt="" className="about-me-avatar" />
        <div className="about-me-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid itaque alias. Perspiciatis laboriosam laborum, modi quia, quas accusamus quibusdam blanditiis accusantium fugit, harum maxime in iste! Quas, incidunt praesentium!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
