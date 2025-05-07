import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">SKills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact" className="contact-btn">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
