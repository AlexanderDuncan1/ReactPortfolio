import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <ul className="footer-list">
        <li className="footer-item">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Github</span>
          </a>
        </li>
        <li className="footer-item">
          <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="footer-item">
          <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
