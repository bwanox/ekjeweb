import React from "react";
import '../styles/Overview.css';
import FlowerGif from '../assets/FlowerGif.gif';
import WordStyleSvg from '../assets/Ekjewordstyle.svg';

const Overview = () => {
    return (
        <section className="overview-section">
            <div className="overview-content">
                <div className="text-content">
                    <h1 className="starter-text">Menez votre projet avec passion</h1>
                    <h2 className="added-text">Chaque étape en avant est une étape vers le succès</h2>
                </div>
                
                <div className="media-content">
                    <div className="wordstyle-svg">
                        <img src={WordStyleSvg} alt="Decorative SVG" className="svg-image" />
                    </div>
                    <div className="overview-gif">
                        <img src={FlowerGif} alt="Inspiring project leadership animation" className="gif-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
