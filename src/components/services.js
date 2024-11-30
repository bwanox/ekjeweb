import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";
import WebDevLogo from "../assets/software-dev.svg";
import UIDesignLogo from "../assets/ui-ux.svg";
import SocialMediaLogo from "../assets/sc-management.svg";

const Services = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [isVisible, setIsVisible] = useState(false); // State to track visibility
    const servicesRef = useRef(null); // Reference to the Services container

    // Function to handle logo click navigation
    const handleLogoClick = (url) => {
        navigate(url);
    };

    // Observer to detect when the section comes into or leaves the view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Section enters the viewport
                    } else {
                        setIsVisible(false); // Section leaves the viewport
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is in view
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current); // Start observing the section
        }

        // Cleanup observer when component unmounts
        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    const services = [
        {
            title: "SOFTWARE/WEB DEV",
            logo: WebDevLogo,
            alt: "Web Development",
            url: "/services/web-dev"
        },
        {
            title: "UI/UX DESIGN",
            logo: UIDesignLogo,
            alt: "UI/UX Design",
            url: "/services/ui-ux-design"
        },
        {
            title: "SOCIAL MEDIA MANAGEMENT",
            logo: SocialMediaLogo,
            alt: "Social Media Management",
            url: "/services/social-media-management"
        }
    ];

    return (
        <div 
            className={`Services-container ${isVisible ? 'visible' : ''}`} 
            ref={servicesRef}
        >
            <div className="text-container">
                <h1 className="title">Nos Services</h1>
                <p className="description">
                    Nous offrons des solutions sur mesure en développement web et logiciel, design UI/UX, ainsi qu’en gestion des médias sociaux.
                    Que ce soit pour créer des applications performantes, concevoir des interfaces intuitives ou renforcer votre présence en ligne,
                    notre équipe met son expertise à votre service pour vous accompagner dans la réussite de vos projets.
                </p>
            </div>

            <div className="service-cards-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-card-header">
                            <div 
                                className="service-card-logo-container"
                                onClick={() => handleLogoClick(service.url)}
                            >
                                <img 
                                    src={service.logo} 
                                    alt={service.alt} 
                                    className="service-card-logo" 
                                />
                            </div>
                            <h1 className="service-card-title">{service.title}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
