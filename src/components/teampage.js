import React from "react";
import '../styles/Teampage.css';
import Header from "./Header";
import Footer from "./Footer";
import youssefImg from "../assets/team/youssef.png";
import bilalImg from "../assets/team/bilal.jpg";
import younesImg from "../assets/team/younes.png";
import yasmineImg from "../assets/team/yasmine.png";
import malakImg from "../assets/team/malak.png";
import salmaImg from "../assets/team/salma.jpg";
import imanImg from "../assets/team/imane.jpg";
import jadImg from "../assets/team/jad.jpg";
import bahdouImg from "../assets/team/youness.png";

const teamMembers = [
    {
        name: "Med Youssef Qraym",
        role: "President",
        imgSrc: youssefImg,
        description: "Diriger l'équipe vers l'atteinte des objectifs et favoriser la collaboration.",
        linkedin: "https://linkedin.com/in/mohamed-youssef-qrayim-116832209"
    },
    {
        name: "Bilal Sahili",
        role: "Responsable Technique ",
        imgSrc: bilalImg,
        description: "Assurer le bon fonctionnement et l'innovation des aspects techniques de l'équipe.",
        linkedin: "https://linkedin.com/in/bilal-sahili-50821b2ba"
    },
    {
        name: "Youness El Hard",
        role: "Responsable Prospection ",
        imgSrc: younesImg,
        description: "Gérer les stratégies financières et assurer la prospérité de l'équipe.",
        linkedin: "https://linkedin.com/in/yuneselhard"
    },
    {
        name: "Yasmin Zouhir",
        role: "Secretaire Generale",
        imgSrc: yasmineImg,
        description: "Gérer les tâches administratives et maintenir l'efficacité organisationnelle.",
        linkedin: "https://linkedin.com/in/yasmine-zouhir-504b03264"
    },
    {
        name: "Malak Rahhali",
        role: "Tresoriere",
        imgSrc: malakImg,
        description: "Superviser la planification budgétaire et la santé financière de l'équipe.",
        linkedin: "https://linkedin.com/in/malak-rahhali"
    },
    {
        name: "Salma Bouka",
        role: "Vice Presidente",
        imgSrc: salmaImg,
        description: "Soutenir le président dans la prise de décisions et la coordination de l'équipe",
        linkedin: "https://linkedin.com/in/salma-bouka-926b802a3"
    },
    {
        name: "Iman Hajjou",
        role: "Responsable Evenements ",
        imgSrc: imanImg,
        description: "Organiser et gérer les événements de l'équipe avec précision.",
        linkedin: "https://linkedin.com/in/iman-hajjou"
    },
    {
        name: "Med Jad Nouias",
        role: "Responsable Sponsoring ",
        imgSrc: jadImg,
        description: "Établir des partenariats et assurer les sponsors pour les activités de l'équipe.",
        linkedin: "https://linkedin.com/in/med-jad-nouias"
    },
    {
        name: "Youness Bahdou",
        role: "Responsable Media ",
        imgSrc: bahdouImg,
        description: "Gérer le contenu médiatique et les stratégies de communication de l'équipe.",
        linkedin: "https://linkedin.com/in/younes-bahddou-b7392b271"
    }
];


const Teampage = () => {
    return (
        <div className="Teampage-container">
            <div className="header-team">
                <Header />
                <div className="teampage-text-container">
                    <h1 className="lead-text">Rencontrez l'equipe</h1>
                    <h2 className="secondary-text">Ensemble, nous le réalisons</h2>
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
                                    Voir LinkedIn
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
