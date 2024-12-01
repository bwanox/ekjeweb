import React, { useState, useEffect } from "react";
import "../styles/verticalscroll.css";
import ScrollIcon from "../assets/mouse-scroll.svg"; // Update the path to your SVG file

const Verticalscroll = ({ sectionRefs, activeSection, onSectionChange }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [startTouchY, setStartTouchY] = useState(null); // To track the start position of touch
  const sections = Object.keys(sectionRefs);

  const handleWheelScroll = (event) => {
    if (isScrolling) return;

    const currentIndex = sections.indexOf(activeSection);

    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1]);
    } else if (event.deltaY < 0 && currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1]);
    }
  };

  const handleTouchStart = (event) => {
    // Record the touch start position
    setStartTouchY(event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    if (startTouchY === null) return;

    const touchMoveY = event.touches[0].clientY;
    const deltaY = startTouchY - touchMoveY;
    const scrollThreshold = 80; 

    if (Math.abs(deltaY) > scrollThreshold) {
      if (deltaY > 0) {
        scrollToSection(sections[Math.min(sections.indexOf(activeSection) + 1, sections.length - 1)]);
      } else {
        scrollToSection(sections[Math.max(sections.indexOf(activeSection) - 1, 0)]);
      }
      setStartTouchY(null); // Reset after a scroll action
    }
  };

  const scrollToSection = (section) => {
    const sectionRef = sectionRefs[section];
    if (sectionRef && sectionRef.current) {
      setIsScrolling(true);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      onSectionChange(section);

      setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeSection, isScrolling, startTouchY]);

  return (
    <>
      <div className="vertical-scroll-container">
        {sections.map((section, index) => (
          <button
            key={index}
            className={`scroll-button ${activeSection === section ? "active" : ""}`}
            onClick={() => scrollToSection(section)}
          />
        ))}
      </div>
      <div className="scroll-icon-container">
        <img
          src={ScrollIcon}
          alt="Scroll Icon"
          className="scroll-icon"
        />
        <div className="scroll-label">Scroll</div>
      </div>
    </>
  );
};

export default Verticalscroll;
