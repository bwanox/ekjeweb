import './App.css';
import Header from './components/Header';
import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import AboutUs from './components/Aboutus';
import Services from './components/services';
import Contact from './components/Contact';
import Teampage from './components/teampage';
import Verticalscroll from './components/verticalscroll';
import Gallery from './components/gallery';
import Servicepage from './components/Servicepage';
import LoadingComponent from './components/Loading'; // Import the loading component

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading
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

  useEffect(() => {
    // Simulate a delay for loading (e.g., API calls or component initialization)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (isLoading) {
    return <LoadingComponent />; // Show the loading screen while the app is loading
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
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
                      style={{
                        display: activeSection === "overview" ? "block" : "none",
                      }}
                    >
                      <Overview />
                    </div>
                    <div
                      className="section"
                      ref={sectionRefs.aboutUs}
                      style={{
                        display: activeSection === "aboutUs" ? "block" : "none",
                      }}
                    >
                      <AboutUs />
                    </div>
                    <div
                      className="section"
                      ref={sectionRefs.services}
                      style={{
                        display: activeSection === "services" ? "block" : "none",
                      }}
                    >
                      <Services />
                    </div>
                    <div
                      className="section"
                      ref={sectionRefs.gallery}
                      style={{
                        display: activeSection === "gallery" ? "block" : "none",
                      }}
                    >
                      <Gallery />
                    </div>
                    <div
                      className="section"
                      ref={sectionRefs.contact}
                      style={{
                        display: activeSection === "contact" ? "block" : "none",
                      }}
                    >
                      <Contact />
                    </div>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/services" element={<Servicepage />} />
          <Route path="/about" element={<Teampage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
