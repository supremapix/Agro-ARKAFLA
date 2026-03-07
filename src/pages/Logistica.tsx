import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Truck, ShieldCheck, Clock } from 'lucide-react';
import { InstagramVideoSection } from '../components/InstagramVideoSection';

export const Logistica = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-4">Logística e Unidades</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estrutura estratégica para atender o agronegócio com agilidade.</p>
          <div className="w-24 h-2 bg-agri-green mx-auto rounded-full mt-6"></div>
        </div>
      </div>

      {/* Instagram Video Section */}
      <InstagramVideoSection />

      <div className="container mx-auto px-4 mt-24">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:border-agri-green transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-agri-green text-white p-3 rounded-2xl">
                  <MapPin size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-agri-black">Fazenda Karina</h2>
                  <p className="text-agri-green font-bold uppercase text-xs tracking-widest">Unidade Agrícola</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Focada na produção de grãos e silagem, com infraestrutura completa de armazenamento.</p>
              <div className="space-y-3 font-bold text-gray-800">
                <p className="flex items-center gap-2"><MapPin size={18} className="text-agri-green" /> Estrada Tucum à Socavão, Castro - PR</p>
                <p className="flex items-center gap-2"><Phone size={18} className="text-agri-green" /> (42) 3232-1265</p>
                <p className="flex items-center gap-2"><MessageCircle size={18} className="text-agri-green" /> (42) 99958-6492</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 hover:border-agri-black transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-agri-black text-white p-3 rounded-2xl">
                  <MapPin size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-agri-black">Fazenda Fundamento</h2>
                  <p className="text-agri-black font-bold uppercase text-xs tracking-widest">Unidade Pecuária</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">Centro de excelência em gado leiteiro e produção de alta performance.</p>
              <div className="space-y-3 font-bold text-gray-800">
                <p className="flex items-center gap-2"><MapPin size={18} className="text-agri-black" /> Estrada Tucum à Socavão, Castro - PR</p>
                <p className="flex items-center gap-2"><MessageCircle size={18} className="text-agri-black" /> (42) 99958-6467</p>
                <p className="flex items-center gap-2"><MessageCircle size={18} className="text-agri-black" /> (42) 99958-6603</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=600&auto=format&fit=crop" 
                alt="Logística" 
                className="rounded-3xl shadow-lg h-80 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" 
                alt="Transporte" 
                className="rounded-3xl shadow-lg h-80 w-full object-cover mt-12"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frota Própria", icon: <Truck />, desc: "Transporte especializado para gado e silagem com segurança." },
            { title: "Monitoramento", icon: <ShieldCheck />, desc: "Rastreamento total da carga para garantir prazos e integridade." },
            { title: "Agilidade", icon: <Clock />, desc: "Logística otimizada para a região dos Campos Gerais e além." }
          ].map(f => (
            <div key={f.title} className="text-center p-8">
              <div className="inline-flex p-4 bg-agri-light text-agri-green rounded-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-agri-black mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
