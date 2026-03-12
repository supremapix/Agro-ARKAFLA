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
          "url": "https://agroarkafla.com/",
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-8 text-agri-gold"
            >
              <span className="w-1.5 h-1.5 bg-agri-gold rounded-full animate-pulse"></span>
              Fazenda Fundamento
            </motion.div>

            <h1 className="text-6xl md:text-9xl font-black mb-8 drop-shadow-2xl leading-[0.85] tracking-tighter">
              Grupo <br className="md:hidden" />
              <span className="text-agri-gold italic">ARKAFLA</span>
            </h1>
            
            <div className="h-20 md:h-24 flex items-center justify-center mb-12">
              <p className="text-xl md:text-3xl font-bold text-white/80 drop-shadow-md max-w-4xl mx-auto leading-tight">
                <Typewriter phrases={heroPhrases} />
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo da Página Inicial)" 
                target="_blank"
                rel="noreferrer"
                className="group w-full sm:w-auto bg-agri-green text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl hover:shadow-agri-green/40 hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/agroarkafla/" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                <Instagram size={20} />
                Instagram
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

      {/* Intro Section - Refined with Reveal */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-agri-green/5 text-agri-green px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                <span className="w-1.5 h-1.5 bg-agri-green rounded-full"></span>
                Grupo Arkafla
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-agri-black mb-8 leading-[0.9] tracking-tighter">
                Tradição e <span className="text-agri-green italic">Tecnologia</span> no Campo
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                A <strong>Agropecuária Arkafla</strong> é uma referência em excelência no agronegócio, com sede na região de Castro/PR. Aliamos tradição familiar à tecnologia de ponta, com forte atuação na produção leiteira de alta performance e agricultura de precisão.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/quem-somos" className="inline-flex items-center gap-3 bg-agri-black text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-agri-green transition-all group">
                  Nossa História <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/galeria" className="inline-flex items-center gap-3 border-2 border-gray-100 text-agri-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:border-agri-green hover:text-agri-green transition-all">
                  Ver Galeria
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-agri-green/10 rounded-[3rem] -z-10 blur-2xl"></div>
              <img 
                src="https://www.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png" 
                alt="Gado Holandês" 
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                <div className="text-agri-green font-black text-4xl mb-1 leading-none">45+</div>
                <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">Anos de História</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Activities - Refined Bento Grid */}
      <section className="py-32 bg-agri-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-agri-green/10 text-agri-green px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-4"
            >
              Atividades
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-agri-black mb-4 tracking-tighter">Nossas Frentes</h2>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Agricultura", icon: <Wheat />, link: "/atividades#agricultura", img: "https://www.agroarkafla.com.br/assets/images/fotos-agricultura-254x191.jpg", cols: "md:col-span-7" },
              { title: "Pecuária", icon: <Beef />, link: "/atividades#pecuaria", img: "https://www.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png", cols: "md:col-span-5" },
              { title: "Silvicultura", icon: <Trees />, link: "/atividades#silvicultura", img: "https://www.agroarkafla.com.br/assets/images/agro-arkafla-silvicultura-1-183x217.jpg", cols: "md:col-span-12" }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.cols} group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all`}
              >
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-agri-green rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tight">{item.title}</h3>
                  </div>
                  <Link to={item.link} className="inline-flex items-center gap-2 text-white/70 font-black text-xs uppercase tracking-widest hover:text-agri-gold transition-colors">
                    Ver Detalhes <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
