import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; 
import worldMap from '../assets/worldmap.png'; // Import the image
import '../styles/Contact.css'; 

const Contact = () => {
    const form = useRef(); // Reference to the form

    const sendEmail = (e) => {
        e.preventDefault(); // Prevent default form submission

        emailjs.sendForm('service_czyb0kf', 'template_138di3c', form.current, 'xL88zue1nD5v_le4I')
        .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('An error occurred. Please try again.');
            });

        // Reset the form after submission
        form.current.reset();
    };

    const handleMapClick = () => {
        window.location.href = 'https://maps.app.goo.gl/jYBr3Vxvrav2E1HH8';
    };

    return (
        <div className="Contact-container">
            <img 
                src={worldMap} 
                alt="World Map" 
                className="worldmap-image" 
                onClick={handleMapClick} 
            />
            <div className="contact-content">
                <div className="contact-text-container">
                    <h1 className='contact-title'>Contactez-nous</h1>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            name="company" 
                            placeholder="Nom de l'entreprise" 
                            required 
                            className="company-input"
                        />
                        <input 
                            type="text"
                            name="user_name"
                            placeholder="Nom" 
                            required 
                            className="name-input"
                        />
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder="votre address mail" 
                            required 
                            className="email-input"
                        />
                        <textarea 
                            name="message" 
                            placeholder="Votre message" 
                            required 
                            className="message-input"
                        ></textarea>
                        <button type="submit" className="send-button">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
