import "../styles/AboutUs.css";
import ensaklogo from '../assets/ensaklogo.svg';
import React, { useState, useEffect,useRef } from 'react';


const AboutUs = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the container is visible
            }
        );
    
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
    
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    
    const handleCardClick = (url) => {
        window.location.href = url;  
    };

    
    
    return (
        <div  className="aboutus-container" ref={containerRef}>
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
