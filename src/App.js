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
  const [isMobile, setIsMobile] = useState(false); // State to manage mobile view
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view for screen width <= 768px
    };

    // Initial check and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  useEffect(() => {
    const preloadGif = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          console.log(`GIF successfully loaded: ${src}`);
          resolve();
        };
        img.onerror = (error) => {
          console.error(`Failed to load GIF: ${src}`, error);
          reject(error);
        };
      });
    };
  
    const gifSrc = isMobile 
      ? './assets/background-gif-phone.gif' // Mobile version of the GIF
      : './assets/background-gif.gif'; // Desktop version of the GIF
  
    preloadGif(gifSrc)
      .then(() => {
        setIsLoading(false); // Stop loading after the appropriate GIF is fully loaded
      })
      .catch(() => {
        setIsLoading(false); // Handle error by hiding the loader
      });
  }, [isMobile]);
  
  
  

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
              <div className="first-page">
                {!isMobile && (
                  <Verticalscroll
                    sectionRefs={sectionRefs}
                    activeSection={activeSection}
                    onSectionChange={handleSectionChange}
                  />
                )}
                <Header />
                <div className="sections-container">
                  <div
                    className="section"
                    ref={sectionRefs.overview}
                    style={{
                      display: isMobile || activeSection === "overview" ? "block" : "none",
                    }}
                  >
                    <Overview />
                  </div>
                  <div
                    className="section"
                    ref={sectionRefs.aboutUs}
                    style={{
                      display: isMobile || activeSection === "aboutUs" ? "block" : "none",
                    }}
                  >
                    <AboutUs />
                  </div>
                  <div
                    className="section"
                    ref={sectionRefs.services}
                    style={{
                      display: isMobile || activeSection === "services" ? "block" : "none",
                    }}
                  >
                    <Services />
                  </div>
                  <div
                    className="section"
                    ref={sectionRefs.gallery}
                    style={{
                      display: isMobile || activeSection === "gallery" ? "block" : "none",
                    }}
                  >
                    <Gallery />
                  </div>
                  <div
                    className="section"
                    ref={sectionRefs.contact}
                    style={{
                      display: isMobile || activeSection === "contact" ? "block" : "none",
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
