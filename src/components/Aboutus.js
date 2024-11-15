import React from "react";
import "../styles/AboutUs.css";
import ensaklogo from '../assets/ensaklogo.png';

const AboutUs = () => {
    const handleCardClick = (url) => {
        window.location.href = url;  
    };

    return (
        <div className="aboutus-container">
            <div className="text-container">
                <h1 className="title">Get to know us</h1>
                <p className="description">
                    ekje is a team of very hard-working students who enjoy making connections and are inspired to make the world better by...
                </p>
            </div>
            <div className="cards-container">
                <div
                    className="card"
                    onClick={() => handleCardClick('https://ensa.uit.ac.ma/')}  
                >
                    <div className="card-header">
                        <img src={ensaklogo} alt="ENSA" className="card-image" />
                        <div className="card-years">
                            <span className="card-years-number">+16</span>
                            <span className="card-years-text">years of success</span>
                        </div>
                    </div>
                    <p className="card-description">make my life and yours better</p>
                </div>
                
                <div
                    className="card"
                    onClick={() => handleCardClick('https://www.cjem.ma')}  
                >
                    <div className="card-header">
                        <img src={ensaklogo} alt="CJEM" className="card-image" />
                        <div className="card-years">
                            <span className="card-years-number">+8</span>
                            <span className="card-years-text">years of guidance</span>
                        </div>
                    </div>
                    <p className="card-description">make my life and yours better</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
