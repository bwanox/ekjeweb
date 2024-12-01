import './App.css';
import Header from './components/Header';
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import AboutUs from './components/Aboutus';
import Services from './components/services';
import Contact from './components/Contact';
import Teampage from './components/teampage';
import Verticalscroll from './components/verticalscroll';
import Gallery from './components/gallery';
import Servicepage from './components/Servicepage';

const App = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sectionRefs = {
    overview: useRef(null),
    aboutUs: useRef(null),
    services: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
          path='/'
          element={
          <>
          <div className="first-page">
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
            ref={sectionRefs.gallery}
            style={{ display: activeSection === "gallery" ? "block" : "none" }}
          >
            <Gallery />
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
        </>
        
        }
        
        />
        {/* Service Page (/services) */}
        <Route path="/services" element={<Servicepage />} />

        {/* Team Page (/about-team) */}
        <Route path="/about" element={<Teampage />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
