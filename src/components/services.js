import React from "react";
import "../styles/Services.css";

const Services = () => {
    const handleCardClick = (url) => {
        window.location.href = url;  
    };

    return (
        <div className="Services-container">
            <div className="text-container">
                <h1 className="title">SERVICES WE PROVIDE</h1>
                <p className="description">
                Share your services or product offerings here. Present them as simple headers that can lead out to their pages where you can expound on them further. You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages.                </p>
            </div>
            <div className="service-cards-container">
                <div className="service-card">
                    <div className="service-card-header">
                        <h1 className="service-card-title">
                            SOFTWARE/WEB DEV
                        </h1>
                    </div>
                   <div className="card-link" onClick={() => handleCardClick('https://www.cjem.ma')}  >
                    <span className="card-text">Learn More</span>
                   </div>
                </div>
                
                <div className="service-card">
                    <div className="service-card-header">
                        <h1 className="service-card-title">
                            UI/UX DESIGN
                        </h1>
                    </div>
                   <div className="card-link" onClick={() => handleCardClick('https://www.cjem.ma')}  >
                    <span className="card-text">Learn More</span>
                   </div>
                </div>
                <div className="service-card">
                    <div className="service-card-header">
                        <h1 className="service-card-title">
                            SOCIAL MEDIA MANAGEMENT
                        </h1>
                    </div>
                   <div className="card-link" onClick={() => handleCardClick('https://www.cjem.ma')}  >
                    <span className="card-text">Learn More</span>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
