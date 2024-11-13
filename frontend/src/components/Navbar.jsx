import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-logo" onClick={() => navigate('/')}>
        <h1 className="logo-text"><b>FuturePredict</b></h1>
      </div>
      <div className="nav-items">
        <ul>
          <li onClick={() => navigate('/testform')}>Take Test</li>
          <li onClick={() => navigate('./testimonies')}>Give Reviews</li>
          <li onClick={() => navigate('./about-us')}>About Us</li>
          <li onClick={() => navigate('./contact-us')}>Contact Us</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
