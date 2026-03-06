import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, ChevronRight, Wheat, Beef, Trees } from 'lucide-react';

export const Locality = () => {
  const { citySlug } = useParams();
  const cityName = citySlug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Região';

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-agri-dark text-white rounded-[3rem] p-12 md:p-20 mb-24 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-block bg-agri-gold text-agri-black px-4 py-1 rounded-full font-black text-sm mb-6 uppercase tracking-widest">
              Atendimento em {cityName}
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Agro Arkafla: Excelência no Agronegócio para <span className="text-agri-gold">{cityName}</span> e Região
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10">
              O Grupo Arkafla estende sua tradição e tecnologia para {cityName}. Somos parceiros dos produtores rurais da região, oferecendo o melhor em Silagem Pré-Secada, Gado Holandês e soluções agrícolas de alta performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`https://api.whatsapp.com/send?phone=5542999586858&text=Olá gostaria de saber sobre o atendimento em ${cityName}:`} 
                target="_blank"
                rel="noreferrer"
                className="bg-agri-green hover:bg-white hover:text-agri-green text-white px-8 py-4 rounded-full font-black transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} /> Falar com Especialista
              </a>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img 
              src="https://agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
              alt="Decoration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-4">
            <div className="text-agri-green"><Wheat size={48} /></div>
            <h3 className="text-2xl font-black text-agri-black">Agricultura de Precisão</h3>
            <p className="text-gray-600">Levamos nossa expertise em grãos para {cityName}, garantindo produtividade e sustentabilidade no campo.</p>
          </div>
          <div className="space-y-4">
            <div className="text-agri-green"><Beef size={48} /></div>
            <h3 className="text-2xl font-black text-agri-black">Genética Leiteira</h3>
            <p className="text-gray-600">Fornecimento de Gado Holandês PO de alta linhagem para criadores de {cityName} que buscam excelência.</p>
          </div>
          <div className="space-y-4">
            <div className="text-agri-green"><Trees size={48} /></div>
            <h3 className="text-2xl font-black text-agri-black">Silagem de Qualidade</h3>
            <p className="text-gray-600">Logística eficiente para entrega de Silagem Pré-Secada de Azevém em toda a região de {cityName}.</p>
          </div>
        </div>

        <div className="bg-agri-light rounded-[3rem] p-12 text-center">
          <h2 className="text-3xl font-black text-agri-black mb-6">Por que escolher o Grupo Arkafla em {cityName}?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              "Tradição desde 1978",
              "Tecnologia de Ponta",
              "Logística Própria",
              "Suporte Especializado"
            ].map(item => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow-md font-bold text-agri-black flex items-center justify-center gap-2">
                <ChevronRight className="text-agri-green" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
