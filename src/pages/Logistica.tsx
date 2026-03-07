import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Truck, ShieldCheck, Clock, Mail, User } from 'lucide-react';
import { InstagramVideoSection } from '../components/InstagramVideoSection';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const Logistica = () => {
  return (
    <div className="pt-32 pb-24">
      <EnhancedSEO 
        title="Logística e Unidades | Agro Arkafla - Transarkafla"
        description="Conheça nossas unidades: Fazenda Karina e Fazenda Fundamento. Logística eficiente com a Transarkafla para transporte de silagem e grãos em Castro e região."
        canonical="/logistica"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-agri-green/10 text-agri-green px-4 py-1 rounded-full font-bold text-sm mb-4 uppercase tracking-widest">
            TRANSARKAFLA
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-4">Logística e Unidades</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A Transarkafla atua na logística e transporte agrícola (silagem e grãos), com sede no Socavão, em Castro.
          </p>
          <div className="w-24 h-2 bg-agri-green mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Fazenda Karina */}
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
              <p className="text-gray-600 mb-6">Especializada em agricultura de precisão, produção de grãos e silagem de alta qualidade.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-black text-agri-black text-sm uppercase">Localização</h4>
                  <p className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin size={16} className="text-agri-green shrink-0 mt-1" /> 
                    Estrada Tucum à Socavão<br/>84190-000 | Castro - PR
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone size={16} className="text-agri-green" /> (42) 3232-1265
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                    <Mail size={16} className="text-agri-green" /> faz.karina@agroarkafla.com.br
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-black text-agri-black text-sm uppercase">Contatos Diretos</h4>
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageCircle size={16} className="text-agri-green" /> (42) 99958-6492
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageCircle size={16} className="text-agri-green" /> (42) 99958-6380
                  </p>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="flex items-center gap-2 text-sm text-agri-green font-bold">
                      <User size={16} /> Agrônomo
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-700">
                      <MessageCircle size={16} className="text-agri-green" /> (42) 99958-6992
                    </p>
                    <p className="text-xs text-gray-500 ml-6">agronomo@agroarkafla.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fazenda Fundamento */}
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
              <p className="text-gray-600 mb-6">Referência nacional em produção leiteira de alta performance e melhoramento genético.</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-black text-agri-black text-sm uppercase">Localização</h4>
                  <p className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPin size={16} className="text-agri-black shrink-0 mt-1" /> 
                    Estrada Tucum à Socavão<br/>84190-000 | Castro - PR
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                    <Mail size={16} className="text-agri-black" /> faz.fundamento@agroarkafla.com.br
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-black text-agri-black text-sm uppercase">Contatos Diretos</h4>
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageCircle size={16} className="text-agri-black" /> (42) 99958-6467
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-700">
                    <MessageCircle size={16} className="text-agri-black" /> (42) 99958-6603
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-700 font-bold">
                    <MessageCircle size={16} className="text-agri-black" /> (42) 99958-6592
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="bg-gray-100 rounded-[2rem] overflow-hidden shadow-inner h-[400px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d2859.5716793514116!2d-49.76571692198187!3d-24.726480884112625!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x94c29398913f46f5%3A0xa7092ccd00d4b1be!2sFazenda%20Karina%20-%20Socav%C3%A3o%2C%20Castro%20-%20PR!3m2!1d-24.7265396!2d-49.7631337!5e1!3m2!1spt-BR!2sbr!4v1772889579908!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-black text-agri-green shadow-sm">
                MAPA: FAZENDA KARINA
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-[2rem] overflow-hidden shadow-inner h-[400px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m15!1m8!1m3!1d2859.47706922004!2d-49.760294!3d-24.730597!3m2!1i1024!2i768!4f13.1!4m4!3e0!4m0!4m1!2sArkafla%2C%20Unnamed%20Road%2C%20Castro%20-%20PR!5e1!3m2!1spt-BR!2sbr!4v1772889632724!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-black text-agri-black shadow-sm">
                MAPA: FAZENDA FUNDAMENTO
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Frota Transarkafla", icon: <Truck />, desc: "Transporte especializado para silagem e grãos com sede no Socavão." },
            { title: "Monitoramento", icon: <ShieldCheck />, desc: "Rastreamento total da carga para garantir prazos e integridade." },
            { title: "Agilidade Regional", icon: <Clock />, desc: "Logística otimizada para Castro, Piraí do Sul e Campos Gerais." }
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

      {/* Instagram Video Section - Before Footer on other pages */}
      <InstagramVideoSection />
    </div>
  );
};
