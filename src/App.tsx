import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Home } from './pages/Home';
import { QuemSomos } from './pages/QuemSomos';
import { Atividades } from './pages/Atividades';
import { Logistica } from './pages/Logistica';
import { Contato } from './pages/Contato';
import { Locality } from './pages/Locality';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AgricultureService",
    "name": "Agro Arkafla",
    "alternateName": "Fazenda Fundamento",
    "url": "https://www.agroarkafla.com.br/",
    "logo": "https://agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png",
    "description": "Fazenda agrícola em Castro, Paraná. Especializada em Agricultura, Pecuária e Silvicultura, com foco em Gado Holandês e Silagem Pré-Secada.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua do Rosário, 130 - Centro",
      "addressLocality": "Castro",
      "addressRegion": "PR",
      "postalCode": "84165-130",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-24.7890123",
      "longitude": "-50.0123456"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-42-3233-7456",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/grupo_arkafla/"
    ]
  };

  return (
    <Router>
      <div className="font-sans text-agri-black selection:bg-agri-green selection:text-white">
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/logistica" element={<Logistica />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/localidade/:citySlug" element={<Locality />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}
