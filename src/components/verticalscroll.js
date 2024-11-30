import React from "react";
import "../styles/verticalscroll.css";

const Verticalscroll = ({ sectionRefs, activeSection, onSectionChange }) => {
  const handleScrollToSection = (section) => {
    const sectionRef = sectionRefs[section];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      onSectionChange(section);
    }
  };

  const sections = Object.keys(sectionRefs);

  return (
    <div className="vertical-scroll-container">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`scroll-button ${activeSection === section ? "active" : ""}`}
          onClick={() => handleScrollToSection(section)}
        />
      ))}
    </div>
  );
};

export default Verticalscroll;
