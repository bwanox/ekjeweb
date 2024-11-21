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
            <div className="service-page-cards-container">
                <div className="service-page-card" onClick={() => openModal("Web development is the backbone of modern online businesses. It’s not just about creating a website; it’s about crafting digital experiences that captivate and engage.  I specialize in building interactive, visually stunning websites tailored to your unique needs. Whether you're looking for a sleek business portfolio, an engaging e-commerce platform, or a dynamic interactive site, I bring your vision to life.Beyond development, I offer hosting solutions and comprehensive website maintenance, ensuring your site runs smoothly, securely, and efficiently. From optimizing performance to implementing the latest features, I handle it all so you can focus on your business. Let’s transform your online presence into something extraordinary!")}>
                    <h1 className="service-page-cardtitle">Web Development</h1>
                </div>
                <div className="service-page-card" onClick={() => openModal('Software development focuses on building robust applications that power businesses.')}>
                    <h1 className="service-page-cardtitle">Software Development</h1>
                </div>
                <div className="service-page-card" onClick={() => openModal('UI/UX design focuses on creating intuitive and engaging user experiences.')}>
                    <h1 className="service-page-cardtitle">UI/UX Design</h1>
                </div>
                <div className="service-page-card" onClick={() => openModal('Social media management helps brands reach and engage with their target audience.')}>
                    <h1 className="service-page-cardtitle">Social Media Management</h1>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
                    <div className="modal">
                        <button className="close-btn" onClick={closeModal}>X</button>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default Servicepage;
