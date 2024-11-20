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
                <h1 className="title">Decouvrez-nous</h1>
                <p className="description">
                    
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
                            <span className="card-years-text">Années de succès</span>
                        </div>
                    </div>
                    <p className="card-description">L'École Nationale des Sciences Appliquées de Kénitra 
                        se distingue par son excellence académique et son engagement à former des ingénieurs de haut niveau, 
                        prêts à relever les défis technologiques du futur.</p>
                </div>
                
                <div
                    className="card"
                    onClick={() => handleCardClick('https://www.cjem.ma')}  
                >
                    <div className="card-header">
                        <img src={ensaklogo} alt="CJEM" className="card-image" />
                        <div className="card-years">
                            <span className="card-years-number">+8</span>
                            <span className="card-years-text">Années de conseils</span>
                        </div>
                    </div>
                    <p className="card-description">La Conférence des Junior-Entreprises du Maroc (CJEM) est un événement remarquable qui met en lumière l'innovation, 
                        l'entrepreneuriat et le leadership des jeunes talents marocains, 
                        créant ainsi des opportunités exceptionnelles pour le développement professionnel des étudiants.
                        </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
