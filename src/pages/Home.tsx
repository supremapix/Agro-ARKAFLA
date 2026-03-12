import { motion } from 'motion/react';
import { MessageCircle, Instagram, Play, Wheat, Beef, Trees, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from '../components/Typewriter';
import { InstagramVideoSection } from '../components/InstagramVideoSection';
import { FeaturedVideoSection } from '../components/FeaturedVideoSection';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const Home = () => {
  const heroPhrases = [
    "Excelência no Agronegócio.",
    "Tradição desde 1978.",
    "Referência em Gado Holandês.",
    "Produção de Leite de Alta Performance.",
    "Silagem Pré-Secada de Qualidade.",
    "Tecnologia no Campo.",
    "Sustentabilidade na Silvicultura.",
    "Fazenda Fundamento em Castro, PR.",
    "Compromisso com a Terra.",
    "Inovação na Agricultura.",
    "Genética Leiteira de Ponta.",
    "Manejo Florestal Sustentável.",
    "Qualidade em Cada Grão.",
    "Tradição da Família Arkafla.",
    "O Melhor para o seu Rebanho.",
    "Liderança no Setor Agrícola.",
    "Paixão pelo que Fazemos.",
    "Resultados que Alimentam o Mundo.",
    "Eficiência e Produtividade.",
    "Respeito ao Meio Ambiente.",
    "Parceria com o Produtor Rural.",
    "Excelência em Silagem de Azevém.",
    "Gado Holandês PO de Linhagem.",
    "Futuro do Agro é Aqui.",
    "Grupo Arkafla: Força no Campo."
  ];

  return (
    <div>
      <EnhancedSEO 
        title="Agro Arkafla | Fazenda Fundamento - Castro, Paraná"
        description="Referência em agronegócio no Paraná. Especialistas em Gado Holandês, Silagem Pré-Secada e Agricultura de Precisão na Fazenda Fundamento."
        canonical="/"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "AgricultureService",
          "name": "Agro Arkafla",
          "alternateName": "Fazenda Fundamento",
          "url": "https://www.agroarkafla.com.br/",
          "logo": "https://www.agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png",
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
            "https://www.instagram.com/agroarkafla/"
          ]
        }}
      />
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://www.agroarkafla.com.br/assets/images/foto-fardos-palha-de-trigo-666x499.jpg" 
            alt="Fazenda em Castro PR" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-agri-black"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-agri-green/20 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] mb-8 text-agri-gold"
            >
              <span className="w-2 h-2 bg-agri-gold rounded-full animate-pulse"></span>
              Fazenda Fundamento
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 drop-shadow-2xl leading-[0.9] tracking-tighter">
              Grupo <span className="text-agri-gold italic">ARKAFLA</span>
            </h1>
            
            <div className="h-24 md:h-32 flex items-center justify-center mb-8">
              <p className="text-2xl md:text-4xl font-bold text-white/90 drop-shadow-md max-w-4xl mx-auto">
                <Typewriter phrases={heroPhrases} />
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo da Página Inicial)" 
                target="_blank"
                rel="noreferrer"
                className="group w-full sm:w-auto bg-agri-green text-white px-12 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(46,125,50,0.4)] hover:shadow-[0_25px_50px_rgba(46,125,50,0.5)] hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/agroarkafla/" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                <Instagram size={24} />
                Siga no Instagram
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-agri-gold rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Instagram Video Section - Right after Hero on Home */}
      <InstagramVideoSection />

      {/* Featured Video Section - O Código da Genética */}
      <FeaturedVideoSection />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-block bg-agri-green/10 text-agri-green px-4 py-1 rounded-full font-bold text-sm mb-4">
                GRUPO ARKAFLA
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-agri-black mb-6 leading-tight">
                Tradição e Tecnologia no Campo
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A <strong>Agropecuária Arkafla</strong> é uma referência em excelência no agronegócio, com sede na região de Castro/PR. Aliamos tradição familiar à tecnologia de ponta, com forte atuação na produção leiteira de alta performance e agricultura de precisão.
              </p>
              <Link to="/quem-somos" className="inline-flex items-center gap-2 font-black text-agri-green text-lg hover:gap-4 transition-all">
                Conheça nossa história <ArrowRight />
              </Link>
              <div className="mt-4">
                <Link to="/galeria" className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-agri-green transition-all">
                  Ver galeria de fotos <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            <div className="lg:w-1/2">
              <img 
                src="https://www.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png" 
                alt="Gado Holandês" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Activities */}
      <section className="py-24 bg-agri-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-agri-black mb-4">Nossas Frentes de Trabalho</h2>
            <div className="w-24 h-2 bg-agri-green mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Agricultura", icon: <Wheat />, link: "/atividades#agricultura", img: "https://www.agroarkafla.com.br/assets/images/fotos-agricultura-254x191.jpg" },
              { title: "Pecuária", icon: <Beef />, link: "/atividades#pecuaria", img: "https://www.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png" },
              { title: "Silvicultura", icon: <Trees />, link: "/atividades#silvicultura", img: "https://www.agroarkafla.com.br/assets/images/agro-arkafla-silvicultura-1-183x217.jpg" }
            ].map(item => (
              <Link key={item.title} to={item.link} className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-agri-green">{item.icon}</div>
                    <span className="text-xl font-black text-agri-black">{item.title}</span>
                  </div>
                  <ArrowRight className="text-agri-green group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
