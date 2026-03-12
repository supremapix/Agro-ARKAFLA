import { motion } from 'motion/react';
import { Camera, LayoutGrid, Filter } from 'lucide-react';
import { useState } from 'react';
import { InstagramVideoSection } from '../components/InstagramVideoSection';
import { EnhancedSEO } from '../components/EnhancedSEO';

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'identidade', name: 'Identidade Visual' },
  { id: 'pecuaria', name: 'Pecuária / Gado' },
  { id: 'agricultura', name: 'Agricultura' },
  { id: 'silvicultura', name: 'Silvicultura' },
  { id: 'produtos', name: 'Silagem / Produtos' },
];

const images = [
  // Identidade
  { 
    url: "https://www.agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png", 
    category: 'identidade', 
    title: 'Logo Principal Agro Arkafla' 
  },
  // Pecuária
  { 
    url: "https://www.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png", 
    category: 'pecuaria', 
    title: 'Gado Holandês no Pasto' 
  },
  // Agricultura
  { 
    url: "https://www.agroarkafla.com.br/assets/images/foto-colheita-trigo-254x191.jpg", 
    category: 'agricultura', 
    title: 'Colheita de Trigo' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/fotos-agricultura-254x191.jpg", 
    category: 'agricultura', 
    title: 'Plantação de Soja/Milho' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/fotos-agricultura-2-254x191.jpg", 
    category: 'agricultura', 
    title: 'Tratores na Lavoura' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/fotos-agricultura-4-254x191.jpg", 
    category: 'agricultura', 
    title: 'Broto Nascendo' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/fotos-agricultura-6-254x191.jpg", 
    category: 'agricultura', 
    title: 'Vista da Fazenda' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/foto-palha-de-trigo-254x191.jpg", 
    category: 'agricultura', 
    title: 'Palha de Trigo' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/foto-pulverizao-area-254x232.jpg", 
    category: 'agricultura', 
    title: 'Pulverização Aérea' 
  },
  // Silvicultura
  { 
    url: "https://www.agroarkafla.com.br/assets/images/agro-arkafla-silvicultura-1-183x217.jpg", 
    category: 'silvicultura', 
    title: 'Área de Silvicultura' 
  },
  // Produtos
  { 
    url: "https://www.agroarkafla.com.br/assets/images/silagem-pre-secada-castro-agro-arkafla-254x337.jpg", 
    category: 'produtos', 
    title: 'Silagem no Campo' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/silagem-pr-secada-embalada-254x165.jpg", 
    category: 'produtos', 
    title: 'Silagem Embalada' 
  },
  { 
    url: "https://www.agroarkafla.com.br/assets/images/agro-arkafla-castro-pr-castro-silagem-pre-secada-1-794x523.png", 
    category: 'produtos', 
    title: 'Máquina de Silagem' 
  },
];

export const Galeria = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24">
      <EnhancedSEO 
        title="Galeria de Fotos | Agro Arkafla - Registros do Campo"
        description="Confira as fotos da Fazenda Fundamento, nosso rebanho de Gado Holandês, plantações e estrutura tecnológica no agronegócio."
        canonical="/galeria"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-agri-green/10 text-agri-green px-4 py-1 rounded-full font-bold text-sm mb-4">
            REGISTROS DO CAMPO
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-6">Galeria Agro Arkafla</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura, rebanho e plantações através de registros reais do dia a dia na Fazenda Fundamento.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat.id 
                  ? 'bg-agri-green text-white shadow-lg scale-105' 
                  : 'bg-white text-agri-black hover:bg-agri-light border border-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.url + index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-video rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-agri-gold font-black text-xs uppercase tracking-widest mb-1">
                  {categories.find(c => c.id === img.category)?.name}
                </span>
                <h3 className="text-white font-black text-xl">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <Camera size={64} className="mx-auto mb-4 opacity-20" />
            <p className="text-xl font-bold">Nenhuma imagem encontrada nesta categoria.</p>
          </div>
        )}
      </div>

      {/* Instagram Video Section - Before Footer on other pages */}
      <InstagramVideoSection />
    </div>
  );
};
