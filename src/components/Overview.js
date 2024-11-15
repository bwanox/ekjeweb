import React from "react";
import '../styles/Overview.css';
import FlowerGif from '../assets/FlowerGif.gif';
import WordStyleSvg from '../assets/Ekjewordstyle.svg';

const Overview = () => {
    return (
        <section className="overview-section">
            <div className="overview-content">
                <div className="text-content">
                    <h1 className="starter-text">Lead Your Project with Passion</h1>
                    <h2 className="added-text">Every step forward is a step to success</h2>
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
