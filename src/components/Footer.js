import React from 'react';
import '../styles/Footer.css';
import ekjelogo from '../assets/ekjelogo.svg'; 

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-logo-contact">
                    <img src={ekjelogo} alt="Logo" className="footer-logo" />
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <a href="mailto:contact@ensakje.com" className="footer-email">contact@ensakje.com</a>
                    </div>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-location">
                    <a href="https://maps.app.goo.gl/jYBr3Vxvrav2E1HH8" target="_blank" rel="noopener noreferrer">kenitra,morocco</a>
                </div>
                <div className="footer-rights">
                    <span>&copy; {new Date().getFullYear()} Ensakje. All rights reserved.</span>
                    <span>Developped and Designed by bilal sahili</span>
                    <span>Co-designed by Med Josef Qrayim</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
