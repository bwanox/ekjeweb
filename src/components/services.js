import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleCardClick = (url) => {
        navigate(url); // Use navigate to change the page
    };

    return (
        <div className="Services-container">
            <div className="text-container">
                <h1 className="title">Nos Services</h1>
                <p className="description">
                    Nous offrons des solutions sur mesure en développement web et logiciel, design UI/UX, ainsi qu’en gestion des médias sociaux.
                    Que ce soit pour créer des applications performantes, concevoir des interfaces intuitives ou renforcer votre présence en ligne,
                    notre équipe met son expertise à votre service pour vous accompagner dans la réussite de vos projets
                </p>
            </div>
            <div className="service-cards-container">
                <div className="service-card">
                    <div className="service-card-header">
                        <h1 className="service-card-title">SOFTWARE/WEB DEV</h1>
                    </div>
                    <div className="card-link" onClick={() => handleCardClick('/services')} >
                        <span className="card-text">Savoir plus</span>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-card-header">
                        <h1 className="service-card-title">UI/UX DESIGN</h1>
                    </div>
                    <div className="card-link" onClick={() => handleCardClick('/services')} >
                        <span className="card-text">Savoir plus</span>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-card-header">
                        <h1 className="service-card-title">SOCIAL MEDIA MANAGEMENT</h1>
                    </div>
                    <div className="card-link" onClick={() => handleCardClick('/services')} >
                        <span className="card-text">Savoir plus</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
