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
        alert('World map clicked!');
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
                    <h1 className='contact-title'>Get in touch with us</h1>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            name="company" 
                            placeholder="Company name" 
                            required 
                            className="company-input"
                        />
                        <input 
                            type="text"
                            name="user_name"
                            placeholder="Name" 
                            required 
                            className="name-input"
                        />
                        <input 
                            type="email" 
                            name="user_email" 
                            placeholder="Your email address" 
                            required 
                            className="email-input"
                        />
                        <textarea 
                            name="message" 
                            placeholder="Your message" 
                            required 
                            className="message-input"
                        ></textarea>
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
