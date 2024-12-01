import React from "react";
import "../styles/gallery.css";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";

const Gallery = () => {
  const images = [
    { src: pic1, alt: "Highlight 1" },
    { src: pic2, alt: "Highlight 2" },
    { src: pic3, alt: "Highlight 3" },
    { src: pic4, alt: "Highlight 4" },
   
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-text-container">
        <h1 className="gallery-title">Highlights</h1>
      </div>
      <div className="gallery">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
      {/*<ul className="gallery-ul">
        {images.map((image, index) => (
          <li className ='gallery-li' key={index}>
            <a className="gallery-a" href={image.link}>
              <img className='gallery-img' src={image.src} alt={image.alt} />
            </a>
          </li>
        ))}
      </ul>*/}
      </div>
    </div>
  );
};

export default Gallery;
