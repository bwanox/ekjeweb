import React, { useState } from "react";
import '../styles/Servicepage.css';
import Header from "./Header";
import Footer from "./Footer";

const Servicepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <div className="Servicepage-container">
            <div className="header-service">
                <Header />
                <div className="servicepage-text-container">
                    <h1 className="lead-text">Liberez Votre Potentiel</h1>
                    <h2 className="secondary-text">Réalisez Vos Rêves Avec Nous</h2>
                </div>
            </div>
            <div className="teamwork-container">
                <h1 className="teamwork-title">Our Team Services</h1>
                
                <div className="service">
                    <h2 className="service-title">Mobile and Desktop App Development</h2>
                    <p className="service-description">
                        Our team specializes in building high-performance mobile and desktop applications tailored to meet your business needs. Whether you're targeting iOS, Android, or desktop platforms, we ensure a seamless user experience and intuitive designs.
                    </p>
                </div>
                
                <div className="service">
                    <h2 className="service-title">Website Development</h2>
                    <p className="service-description">
                        We craft visually stunning, responsive, and functional websites that elevate your digital presence. Our websites are optimized for SEO, mobile-friendliness, and offer a perfect balance between aesthetics and performance.
                    </p>
                </div>
                
                <div className="service">
                    <h2 className="service-title">Social Media Management</h2>
                    <p className="service-description">
                        Engage and grow your audience with our strategic social media management services. From content creation to engagement strategies, we manage your online presence, helping you build a stronger connection with your followers.
                    </p>
                </div>
                
                <div className="service">
                    <h2 className="service-title">Graphic Design</h2>
                    <p className="service-description">
                        Our creative team offers a wide range of graphic design services, including logo design, branding, and marketing materials. We focus on making your brand stand out with visually compelling designs that leave a lasting impression.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Servicepage;
