import './App.css';
import Header from './components/Header';
import React, { Suspense } from 'react';
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
const AboutUs = React.lazy(() => import('./components/Aboutus'));
const Services = React.lazy(() => import('./components/services'));
const Achievements = React.lazy(() => import('./components/achievements'));
const Slidebar = React.lazy(() => import('./components/slidebar'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Overview = React.lazy(() => import('./components/Overview'));
const Servicepage = React.lazy(() => import('./components/Servicepage'));
const Teampage = React.lazy(() => import('./components/teampage'));



const LazyLoadComponent = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<Loading />}>{children}</Suspense>
      ) : (
        <div style={{ height: '300px' }}>
          <Loading />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
              <div className='mainview-container'>
                <Header />
                <Suspense fallback={<Loading />}>
                  <Overview />
                </Suspense>
                </div>
                <LazyLoadComponent>
                  <AboutUs />
                </LazyLoadComponent>
                <LazyLoadComponent>
                  <Services />
                </LazyLoadComponent>
                <LazyLoadComponent>
                  <Achievements />
                </LazyLoadComponent>
                <LazyLoadComponent>
                  <Slidebar />
                </LazyLoadComponent>
                <LazyLoadComponent>
                  <Contact />
                </LazyLoadComponent>
                <LazyLoadComponent>
                  <Footer />
                </LazyLoadComponent>
              </>
            }
          />
        </Routes>

        <Routes>
          <Route 
            path="/services" 
            element={
              <Suspense fallback={<Loading />}>
                <Servicepage />
              </Suspense>
            }
          />
          <Route 
            path="/about" 
            element={
              <Suspense fallback={<Loading />}>
                <Teampage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
