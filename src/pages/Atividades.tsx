import { motion } from 'motion/react';
import { Wheat, Beef, Trees, ChevronRight } from 'lucide-react';
import { InstagramVideoSection } from '../components/InstagramVideoSection';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const Atividades = () => {
  const atividades = [
    {
      id: "agricultura",
      title: "Agricultura",
      icon: <Wheat className="w-12 h-12" />,
      image: "https://castro.agroarkafla.com.br/assets/images/foto-colheita-trigo-254x191.jpg",
      description: "Safra de verão (soja, milho, feijão) e inverno (trigo, aveia branca, azevém). Parte da produção é transformada em silagem para o rebanho.",
      details: [
        "Agricultura de precisão para máxima qualidade nutricional",
        "Uma das maiores produtoras de pré-secado de aveia e azevém do Brasil",
        "Produção de silagem de grão úmido de milho",
        "Rotação de culturas e manejo integrado de pragas"
      ],
      color: "bg-agri-gold"
    },
    {
      id: "pecuaria",
      title: "Pecuária de Leite",
      icon: <Beef className="w-12 h-12" />,
      image: "https://castro.agroarkafla.com.br/assets/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png",
      description: "Produção de reprodutores, matrizes, embriões e prenhezes HPB PO. Garantia de 10.000kg de leite aos 305 dias de lactação no 1º parto.",
      details: [
        "Genética de ponta com uso de Clarifide® para melhoramento",
        "Protocolos sanitários avançados (Excede® da Zoetis)",
        "Nutrição balanceada com silagem própria de alta performance",
        "450 vacas em ordenha gerando 18.000 litros de leite/dia"
      ],
      color: "bg-agri-black"
    },
    {
      id: "silvicultura",
      title: "Silvicultura",
      icon: <Trees className="w-12 h-12" />,
      image: "https://castro.agroarkafla.com.br/assets/images/agro-arkafla-silvicultura-1-183x217.jpg",
      description: "Cultivo de florestas de eucalipto para madeira e pinus para resina em áreas recuperadas, auxiliando na biodiversidade.",
      details: [
        "Reflorestamento em áreas estratégicas",
        "Extração sustentável de resina de pinus",
        "Produção de madeira para diversos fins",
        "Preservação de áreas de mata nativa"
      ],
      color: "bg-agri-green"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <EnhancedSEO 
        title="Atividades e Produção | Agro Arkafla"
        description="Conheça nossas frentes de atuação: Agricultura de precisão, Pecuária leiteira de alta performance e Silvicultura sustentável na Fazenda Fundamento."
        canonical="/atividades"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-4">Nossas Atividades</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Excelência produtiva em todas as frentes do agronegócio.</p>
          <div className="w-24 h-2 bg-agri-green mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-32">
          {atividades.map((item, index) => (
            <section key={item.id} id={item.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <div className={`inline-flex p-4 rounded-3xl ${item.color} text-white mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h2 className="text-4xl font-black text-agri-black mb-6">{item.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {item.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.details.map(detail => (
                    <li key={detail} className="flex items-center gap-2 font-bold text-gray-800">
                      <div className="w-2 h-2 bg-agri-green rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="lg:w-1/2">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </section>
          ))}
        </div>

        {/* Silagem Detailed Section */}
        <section id="silagem" className="mt-32 bg-agri-dark text-white rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20">
              <div className="inline-block bg-agri-gold text-agri-black px-4 py-1 rounded-full font-black text-sm mb-6">
                PRODUTO EM DESTAQUE
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Silagem Pré-Secada de Azevém</h2>
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  O Azevém (Lolium multiflorium) é uma gramínea forrageira de alto valor nutritivo. Pela excelente adaptação ao clima da região de Castro, tornou-se a melhor opção de produção de forragem durante o inverno.
                </p>
                <p>
                  Nossa silagem é produzida com rigoroso controle de qualidade, garantindo alta proteína e palatabilidade para o rebanho.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-agri-gold">60%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/50">Matéria Seca</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-agri-gold">Alta</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/50">Proteína Bruta</div>
                </div>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá gostaria de saber mais sobre a Silagem Pré-Secada:" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-agri-green hover:bg-white hover:text-agri-green text-white px-8 py-4 rounded-full font-black mt-12 transition-all"
              >
                Solicitar Orçamento <ChevronRight />
              </a>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://castro.agroarkafla.com.br/assets/images/agro-arkafla-castro-pr-castro-silagem-pre-secada-1-794x523.png" 
                alt="Silagem Agro Arkafla" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Silagem Embalada Section */}
        <section className="mt-24 bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black text-agri-black mb-6">Praticidade e Logística: Silagem Embalada</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Nossa silagem pré-secada é embalada em fardos de alta densidade, protegidos por filme stretch especial. Isso permite o armazenamento a céu aberto e facilita o transporte para qualquer região, mantendo as propriedades nutricionais por longos períodos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-agri-green/10 text-agri-green rounded-xl flex items-center justify-center shrink-0">
                    <ChevronRight size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-agri-black">Fácil Armazenamento</h4>
                    <p className="text-sm text-gray-500">Pode ser mantida ao ar livre sem perda de qualidade.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-agri-green/10 text-agri-green rounded-xl flex items-center justify-center shrink-0">
                    <ChevronRight size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-agri-black">Zero Desperdício</h4>
                    <p className="text-sm text-gray-500">Fardos individuais que facilitam o manejo diário.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://castro.agroarkafla.com.br/assets/images/silagem-pr-secada-embalada-254x165.jpg" 
                alt="Silagem Embalada" 
                className="rounded-3xl shadow-lg w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Instagram Video Section - Before Footer on other pages */}
      <InstagramVideoSection />
    </div>
  );
};
