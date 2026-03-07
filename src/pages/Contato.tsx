import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Mail, Instagram } from 'lucide-react';
import { InstagramVideoSection } from '../components/InstagramVideoSection';

export const Contato = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-4">Contato</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estamos à disposição para atender suas necessidades e parcerias.</p>
          <div className="w-24 h-2 bg-agri-green mx-auto rounded-full mt-6"></div>
        </div>
      </div>

      {/* Instagram Video Section */}
      <InstagramVideoSection />

      <div className="container mx-auto px-4 mt-24">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Info Column */}
            <div className="lg:w-2/5 bg-agri-dark text-white p-12 md:p-16">
              <h2 className="text-3xl font-black mb-10">Canais de Atendimento</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-agri-gold font-black text-xl mb-4 uppercase tracking-widest">Escritório Central</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-agri-gold shrink-0 mt-1" />
                      <p className="font-medium">Rua do Rosário, 130 - Centro<br />CEP: 84165-130 - Castro - Paraná</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-agri-gold shrink-0" />
                      <p className="font-medium">(42) 3233-7456</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-agri-gold shrink-0" />
                      <p className="font-medium">(42) 99958-6858 (Adm)</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-agri-gold shrink-0" />
                      <p className="font-medium">adm@agroarkafla.com.br</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-agri-gold font-black text-xl mb-4 uppercase tracking-widest">Financeiro e Compras</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-agri-gold shrink-0" />
                      <p className="font-medium">(42) 99958-1944 (Financeiro)</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-agri-gold shrink-0" />
                      <p className="font-medium">financeiro@agroarkafla.com.br</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-agri-gold shrink-0" />
                      <p className="font-medium">compras@agroarkafla.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  <a href="https://www.instagram.com/grupo_arkafla/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-agri-gold transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-agri-green transition-colors">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-3/5 p-12 md:p-16">
              <h3 className="text-3xl font-black text-agri-black mb-8">Envie uma Mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-gray-700">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Seu nome" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-gray-700">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-gray-700">Assunto</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors appearance-none">
                    <option>Informações Gerais</option>
                    <option>Vendas (Silagem/Gado)</option>
                    <option>Financeiro</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-gray-700">Mensagem</label>
                  <textarea 
                    rows={4} 
                    placeholder="Como podemos ajudar?" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-agri-green hover:bg-agri-dark text-white font-black py-5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
