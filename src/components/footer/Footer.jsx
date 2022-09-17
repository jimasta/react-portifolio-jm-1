import React from "react";
import "./Footer.css";
import {BsGithub,BsInstagram,BsLinkedin} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Bassarit Code
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials"> 
        <a href="http://Linkedin.com"><BsLinkedin/></a>
        <a href="http://github.com"><BsGithub/></a>
        <a href="http://instagram.com"><BsInstagram/></a>
      </div>

      <div className="footer_copyrigth">
    <small>&copy;Bassarit Code. All rights reserved</small>

      </div>
    </footer>
  );
};

export default Footer;
