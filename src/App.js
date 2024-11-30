import './App.css';
import Header from './components/Header';
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Overview from './components/Overview';
import AboutUs from './components/Aboutus';
import Services from './components/services';
import Achievements from './components/achievements';
import Slidebar from './components/slidebar';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Verticalscroll from './components/verticalscroll';

const App = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sectionRefs = {
    overview: useRef(null),
    aboutUs: useRef(null),
    services: useRef(null),
    achievements: useRef(null),
    contact: useRef(null),
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="app-container">
        <Verticalscroll
          sectionRefs={sectionRefs}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <Header />
        <div className="sections-container">
          <div
            className="section"
            ref={sectionRefs.overview}
            style={{ display: activeSection === "overview" ? "block" : "none" }}
          >
            <Overview />
          </div>
          <div
            className="section"
            ref={sectionRefs.aboutUs}
            style={{ display: activeSection === "aboutUs" ? "block" : "none" }}
          >
            <AboutUs />
          </div>
          <div
            className="section"
            ref={sectionRefs.services}
            style={{ display: activeSection === "services" ? "block" : "none" }}
          >
            <Services />
          </div>
          <div
            className="section"
            ref={sectionRefs.achievements}
            style={{ display: activeSection === "achievements" ? "block" : "none" }}
          >
            <Achievements />
          </div>
          <div
            className="section"
            ref={sectionRefs.contact}
            style={{ display: activeSection === "contact" ? "block" : "none" }}
          >
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
