import { motion } from 'motion/react';
import { Play, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export const QuemSomos = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-agri-green/10 text-agri-green px-4 py-1 rounded-full font-bold text-sm mb-4">
              NOSSA HISTÓRIA
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-6 leading-tight">
              Legado e <span className="text-agri-green">Inovação</span>
            </h1>
            <div className="text-lg text-gray-700 leading-relaxed mb-8 space-y-4">
              <p>
                Em 1978 o jovem casal Armando de Paula Carvalho e Maria Helena de Albuquerque, recém-casados, passa a morar na Fazenda Invernada da Pedra. A base dos negócios era a Pecuária de Corte, mas por iniciativa de Armando, iniciaram a atividade agrícola dando os primeiros passos no novo negócio.
              </p>
              <p>
                Armando e Maria Helena tiveram três filhos: <strong>Armando, Flávio e Karina</strong>. A partir da primeira sílaba do nome destes três irmãos que se originou o nome <strong>ARKAFLA</strong>.
              </p>
              <p>
                Este grupo continua levando adiante o legado dos pioneiros, seguindo os princípios de honestidade e trabalho duro. Hoje, a Fazenda Fundamento em Castro, PR, conta com 2200 vacas produzindo 88.000 litros de leite por dia, suplementadas com alta tecnologia para máxima saúde e rentabilidade.
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com/watch?v=qks0BVCIb3k" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-red-600 font-black text-xl hover:text-red-700 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={20} />
              </div>
              Assista ao Vídeo Institucional
            </a>
          </motion.div>

          <div className="lg:w-1/2 relative">
            <img 
              src="https://castro.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png" 
              alt="Fazenda Fundamento" 
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-agri-gold/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { label: "Vacas em Produção", value: "2.200", color: "text-agri-green" },
            { label: "Litros de Leite/Dia", value: "88.000L", color: "text-agri-gold" },
            { label: "Anos de Tradição", value: "45+", color: "text-agri-black" },
            { label: "Colaboradores", value: "100+", color: "text-agri-green" }
          ].map(stat => (
            <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
