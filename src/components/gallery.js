import React from "react";
import "../styles/gallery.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

const Gallery = () => {
  const images = [
    pic1, pic2, pic3, pic4,
    "https://images6.alphacoders.com/749/thumb-1920-749966.png",
    "https://images4.alphacoders.com/761/thumb-1920-761076.png",
    "https://images.alphacoders.com/682/thumb-1920-682570.png",
    "https://images4.alphacoders.com/866/thumb-1920-866812.png",
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-text-container">
        <h1 className="gallery-title">
          highlights
        </h1>
      </div>
    <div className="gallery">
      
      {images.map((src, index) => (
        <span key={index} style={{ "--i": index + 1 }}>
          <img src={src} alt={`Gallery Image ${index + 1}`} />
        </span>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
