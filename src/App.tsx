import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Technology from './components/Technology';
import About from './components/About';
// import Testimonials from './components/Testimonials'; // Removed per user request
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stats from './components/Stats';
import ServiceDetail from './pages/ServiceDetail';
import IndustryDetail from './pages/IndustryDetail';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Industries />
      <Technology />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#E41B13] focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      <div className={`min-h-screen font-inter transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
            <Route path="/servicios/:serviceId/:subpage" element={<ServiceDetail />} />
            <Route path="/industrias/:industryId" element={<IndustryDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
