import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/hero_ic.jpg';
import './Hero.css';

const Hero = () => {
const navigate = useNavigate();
return (
    <div className="site-container">
    <img 
        src={hero} 
        alt="Image of  a programmer" 
        className="programmer-photo"
    />
    <div className="site-info">
        <div className="site-content">
        <h1 className="site-main-quote">
         Explore Endless Possibilities – Your Dream Awaits!!
        </h1>
            <button className="check-site-button" onClick={() => navigate('/testform')}>Take test</button>
        </div>
        <div className="know-more">
        <p className="wanna-know">
        Not Sure What Comes Next? Let Us Predict Your Perfect Career!
        Your future career awaits you. Take our test to find out more.
        </p>
        </div>
    </div>
    </div>
);
};

export default Hero;