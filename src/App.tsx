import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
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

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans text-agri-black selection:bg-agri-green selection:text-white">
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/atividades" element={<Atividades />} />
              <Route path="/logistica" element={<Logistica />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/localidade/:citySlug" element={<Locality />} />
              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}
