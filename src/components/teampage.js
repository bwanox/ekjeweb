import React from "react";
import '../styles/Teampage.css';
import Header from "./Header";
import Footer from "./Footer";

const teamMembers = [
    {
        name: "Med Youssef Qraym",
        role: "President",
        imgSrc: "path/to/president.jpg",
        description: "Leading the team towards achieving goals and fostering collaboration.",
        linkedin: "https://linkedin.com/in/med-youssef-qraym"
    },
    {
        name: "Bilal Sahili",
        role: "Technical Responsible",
        imgSrc: "path/to/technical.jpg",
        description: "Ensuring the technical aspects of the team run smoothly and innovatively.",
        linkedin: "https://linkedin.com/in/bilal-sahili"
    },
    {
        name: "Youness El Hard",
        role: "Prosperity Responsible",
        imgSrc: "path/to/prosperity.jpg",
        description: "Managing financial strategies and ensuring team prosperity.",
        linkedin: "https://linkedin.com/in/youness-el-hard"
    },
    {
        name: "Yasmin Zouhir",
        role: "Secretary General",
        imgSrc: "path/to/secretary.jpg",
        description: "Handling administrative tasks and maintaining organizational efficiency.",
        linkedin: "https://linkedin.com/in/yasmin-zouhir"
    },
    {
        name: "Malak Rahhali",
        role: "Treasurer",
        imgSrc: "path/to/treasurer.jpg",
        description: "Overseeing budget planning and financial health of the team.",
        linkedin: "https://linkedin.com/in/malak-rahhali"
    },
    {
        name: "Salma Bouka",
        role: "Vice President",
        imgSrc: "path/to/vice-president.jpg",
        description: "Supporting the president in decision-making and team coordination.",
        linkedin: "https://linkedin.com/in/salma-bouka"
    },
    {
        name: "Iman Hajjou",
        role: "Events Responsible",
        imgSrc: "path/to/events.jpg",
        description: "Organizing and managing team events with precision.",
        linkedin: "https://linkedin.com/in/iman-hajjou"
    },
    {
        name: "Med Jad Nouias",
        role: "Sponsoring Responsible",
        imgSrc: "path/to/sponsoring.jpg",
        description: "Building partnerships and ensuring sponsorships for team activities.",
        linkedin: "https://linkedin.com/in/med-jad-nouias"
    },
    {
        name: "Youness Bahdou",
        role: "Media Responsible",
        imgSrc: "path/to/media.jpg",
        description: "Managing media content and team communication strategies.",
        linkedin: "https://linkedin.com/in/youness-bahdou"
    }
];


const Teampage = () => {
    return (
        <div className="Teampage-container">
            <div className="header-team">
                <Header />
                <div className="teampage-text-container">
                    <h1 className="lead-text">Meet the Team</h1>
                    <h2 className="secondary-text">Together, We Make It Happen</h2>
                </div>
            </div>
            <div className="teampage-cards-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="teampage-card">
                        <div className="teampage-card-img-wrapper">
                            <img src={member.imgSrc} alt={`${member.name}'s profile`} className="teampage-card-img" />
                            <div className="teampage-card-overlay">
                                <p className="teampage-card-description">{member.description}</p>
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="teampage-card-link">
                                    View LinkedIn
                                </a>
                            </div>
                        </div>
                        <h3 className="teampage-card-name">{member.name}</h3>
                        <p className="teampage-card-role">{member.role}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Teampage;
