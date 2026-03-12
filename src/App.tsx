import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Atividades } from './pages/Atividades';
import { Logistica } from './pages/Logistica';
import { Contato } from './pages/Contato';
import { Locality } from './pages/Locality';
import { Galeria } from './pages/Galeria';
import { NotFound } from './pages/NotFound';
import { PageTransition } from './components/PageTransition';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/quem-somos" element={<PageTransition><QuemSomos /></PageTransition>} />
          <Route path="/atividades" element={<PageTransition><Atividades /></PageTransition>} />
          <Route path="/logistica" element={<PageTransition><Logistica /></PageTransition>} />
          <Route path="/contato" element={<PageTransition><Contato /></PageTransition>} />
          <Route path="/galeria" element={<PageTransition><Galeria /></PageTransition>} />
          <Route path="/localidade/:citySlug" element={<PageTransition><Locality /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans text-agri-black selection:bg-agri-green selection:text-white">
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen">
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}
