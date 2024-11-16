import React from "react";
import '../styles/Teampage.css';
import Header from "./Header";
import Footer from "./Footer";
import youssefImg from "../assets/team/youssef.png";
import bilalImg from "../assets/team/bilal.jpg";
import younesImg from "../assets/team/younes.png";
import yasmineImg from "../assets/team/yasmine.png";
import malakImg from "../assets/team/malak.png";
import salmaImg from "../assets/team/salma.png";
import imanImg from "../assets/team/imane.jpg";
import jadImg from "../assets/team/jad.png";
import bahdouImg from "../assets/team/youness.png";

const teamMembers = [
    {
        name: "Med Youssef Qraym",
        role: "President",
        imgSrc: youssefImg,
        description: "Leading the team towards achieving goals and fostering collaboration.",
        linkedin: "https://linkedin.com/in/mohamed-youssef-qrayim-116832209"
    },
    {
        name: "Bilal Sahili",
        role: "Technical Responsible",
        imgSrc: bilalImg,
        description: "Ensuring the technical aspects of the team run smoothly and innovatively.",
        linkedin: "https://linkedin.com/in/bilal-sahili-50821b2ba"
    },
    {
        name: "Youness El Hard",
        role: "Prosperity Responsible",
        imgSrc: younesImg,
        description: "Managing financial strategies and ensuring team prosperity.",
        linkedin: "https://linkedin.com/in/yuneselhard"
    },
    {
        name: "Yasmin Zouhir",
        role: "Secretary General",
        imgSrc: yasmineImg,
        description: "Handling administrative tasks and maintaining organizational efficiency.",
        linkedin: "https://linkedin.com/in/yasmine-zouhir-504b03264"
    },
    {
        name: "Malak Rahhali",
        role: "Treasurer",
        imgSrc: malakImg,
        description: "Overseeing budget planning and financial health of the team.",
        linkedin: "https://linkedin.com/in/malak-rahhali"
    },
    {
        name: "Salma Bouka",
        role: "Vice President",
        imgSrc: salmaImg,
        description: "Supporting the president in decision-making and team coordination.",
        linkedin: "https://linkedin.com/in/salma-bouka-926b802a3"
    },
    {
        name: "Iman Hajjou",
        role: "Events Responsible",
        imgSrc: imanImg,
        description: "Organizing and managing team events with precision.",
        linkedin: "https://linkedin.com/in/iman-hajjou"
    },
    {
        name: "Med Jad Nouias",
        role: "Sponsoring Responsible",
        imgSrc: jadImg,
        description: "Building partnerships and ensuring sponsorships for team activities.",
        linkedin: "https://linkedin.com/in/med-jad-nouias"
    },
    {
        name: "Youness Bahdou",
        role: "Media Responsible",
        imgSrc: bahdouImg,
        description: "Managing media content and team communication strategies.",
        linkedin: "https://linkedin.com/in/younes-bahddou-b7392b271"
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
