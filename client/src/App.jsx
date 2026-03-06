import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Lazy load page components
const Home = lazy(() => import("./pages/home/Home"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Trainers = lazy(() => import("./pages/trainers/Trainers"));
const About = lazy(() => import("./pages/about/About"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));

// Loading component for Suspense
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    backgroundColor: 'var(--secondary-color)',
    color: 'var(--primary-color)'
  }}>
    <div className="loader-spinner"></div>
    <p style={{ marginTop: '1rem', letterSpacing: '2px', fontWeight: 'bold' }}>TITAN GYM</p>
    <style>{`
      .loader-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid var(--secondary-lighter);
        border-top: 5px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Trainers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
