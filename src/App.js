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

// Detect iOS
const isIOS = (() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isTouchMac = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return /iPad|iPhone|iPod/.test(userAgent) || isTouchMac;
})();

// CSS Variable Keys
const CSS_VAR_KEYS = {
  BUTTON_WIDTH: '--button-width',
  BUTTON_HEIGHT: '--button-height',
};

// Apply Styles
const setButtonStyles = (isIOS) => {
  const rootStyle = document.documentElement.style;
  if (isIOS) {
    rootStyle.setProperty(CSS_VAR_KEYS.BUTTON_WIDTH, '30%');
    rootStyle.setProperty(CSS_VAR_KEYS.BUTTON_HEIGHT, '30%');
  } else {
    rootStyle.setProperty(CSS_VAR_KEYS.BUTTON_WIDTH, '30px');
    rootStyle.setProperty(CSS_VAR_KEYS.BUTTON_HEIGHT, '30px');
  }
};

setButtonStyles(isIOS);


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
