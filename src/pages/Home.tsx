import { motion } from 'motion/react';
import { MessageCircle, Instagram, Play, Wheat, Beef, Trees, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from '../components/Typewriter';

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
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://castro.agroarkafla.com.br/assets/images/foto-fardos-palha-de-trigo-666x499.jpg" 
            alt="Fazenda em Castro PR" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-4 drop-shadow-xl">
              Fazenda Fundamento | <span className="text-agri-gold">Grupo ARKAFLA</span>
            </h1>
            <div className="h-20 md:h-24 flex items-center justify-center">
              <p className="text-xl md:text-3xl font-bold text-white drop-shadow-md">
                <Typewriter phrases={heroPhrases} />
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-2xl mx-auto mb-10 mt-6">
              <p className="text-lg md:text-xl font-bold">
                Vendas de <span className="text-agri-gold">Silagem Pré Secada</span> e <span className="text-agri-gold">Gado Holandês</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-agri-green hover:bg-agri-dark text-white px-10 py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/grupo_arkafla/" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-10 py-4 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-105"
              >
                <Instagram size={24} />
                Siga no Instagram
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white opacity-70"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

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
                Desde 1978, o Grupo Arkafla leva adiante o legado de excelência no agronegócio. Com sede em Castro, PR, somos referência na produção de leite, grãos e manejo florestal sustentável.
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
                src="https://castro.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png" 
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
              { title: "Agricultura", icon: <Wheat />, link: "/atividades#agricultura", img: "https://castro.agroarkafla.com.br/assets/images/fotos-agricultura-254x191.jpg" },
              { title: "Pecuária", icon: <Beef />, link: "/atividades#pecuaria", img: "https://castro.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png" },
              { title: "Silvicultura", icon: <Trees />, link: "/atividades#silvicultura", img: "https://castro.agroarkafla.com.br/assets/images/agro-arkafla-silvicultura-1-183x217.jpg" }
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
