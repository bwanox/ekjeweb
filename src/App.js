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

const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isiOS) {
  document.documentElement.style.setProperty('--button-width', '1000%');
  document.documentElement.style.setProperty('--button-height', '1000%');
} else {
  document.documentElement.style.setProperty('--button-width', '30px');
  document.documentElement.style.setProperty('--button-height', '30px');
}

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
    // Preload the background image
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    // Path to your background image
    const backgroundImageSrc = './assets/background-gif.gif';

    // Wait for the background image to load
    preloadImage(backgroundImageSrc)
      .then(() => {
        setIsLoading(false); // Set loading to false once the image is loaded
      })
      .catch((error) => {
        console.error('Failed to load background image:', error);
        setIsLoading(false); // Still proceed if there's an error
      });
  }, []);

  if (isLoading) {
    return <LoadingComponent />; // Show the loading screen while the app is loading
  }

  return (
    <Router>
      <div className="app-con tainer">
        <Routes>
          <Route
            path="/"
            element={
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
