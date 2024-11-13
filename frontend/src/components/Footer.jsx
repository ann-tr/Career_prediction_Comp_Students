import React from "react";
import "./Footer.css";
import instagramIcon from "../assets/instagramIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import xIcon from "../assets/xIcon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; FuturePredict Company</p>
      <p>Contact us at: futurepred@gmail.com | Phone: +91-00xxxxxxx</p>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Twitter" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" />
        </a>
      </div>
      <p>Your future, our prediction.</p>
    </footer>
  );
};

export default Footer;
