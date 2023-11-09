import React, { useRef } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import '../App.css';

import project1Image from '../assets/Project1.jpg';
import project2Image from '../assets/Project2.jpg';
import project3Image from '../assets/Project3.jpg';
import project5Image from '../assets/Project5.jpg';


const projects = [
  {
    title: 'Project 1',
    imageUrl: project1Image,
    deployedUrl: 'https://project1.com',
    repoUrl: 'https://github.com/your-username/project1',
  },
  {
    title: 'Project 2',
    imageUrl: project2Image,
    deployedUrl: 'https://project2.com',
    repoUrl: 'https://github.com/your-username/project2',
  },
  {
    title: 'Project 3',
    imageUrl: project3Image,
    deployedUrl: 'https://project2.com',
    repoUrl: 'https://github.com/your-username/project2',
  },
  {
    title: 'Project 4',
    imageUrl: project1Image,
    deployedUrl: 'https://project2.com',
    repoUrl: 'https://github.com/your-username/project2',
  },
  {
    title: 'Project 5',
    imageUrl: project5Image,
    deployedUrl: 'https://project2.com',
    repoUrl: 'https://github.com/your-username/project2',
  },
];

function Portfolio() {
  const carousel = useRef(null);

  const scroll = (scrollOffset) => {
    carousel.current.scrollLeft += scrollOffset;
  };

  return (
    <section id="portfolio">
      <h1>Projects</h1>
      <div className="carousel" ref={carousel}>
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="button demo-button">Live Demo</a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button repo-button">GitHub Repo</a>

            </div>
          ))}
        </div>
      </div>
      <button className="scroll-button left" onClick={() => scroll(-500)}>
        <FaArrowCircleLeft />
      </button>
      <button className="scroll-button right" onClick={() => scroll(500)}>
        <FaArrowCircleRight />
      </button>
    </section>
  );
}

export default Portfolio;