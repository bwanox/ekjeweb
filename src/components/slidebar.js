import React from "react";
import '../styles/Slidebar.css';

const Slidebar = () => {
    const words = [
        "Innovation ☆",
        "Success ☆",
        "Growth ☆",
        "Leadership ☆",
        "Strategy ☆",
        "Excellence ☆",
        "Collaboration ☆",
        "Empowerment ☆"
    ];

    return (
        <div className="slidebar-container">
            <div className="slidebar">
                {words.concat(words).map((word, index) => (
                    <div className="slidebar-item" key={index}>
                        {word}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slidebar;
