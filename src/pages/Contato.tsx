import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Mail, Instagram } from 'lucide-react';
import { InstagramVideoSection } from '../components/InstagramVideoSection';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const Contato = () => {
  return (
    <div className="pt-32 pb-24">
      <EnhancedSEO 
        title="Contato | Agro Arkafla - Fale Conosco"
        description="Entre em contato com a Agro Arkafla. Informações sobre vendas de silagem, gado holandês e parcerias agrícolas em Castro e região."
        canonical="/contato"
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-agri-black mb-4">Contato</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Estamos à disposição para atender suas necessidades e parcerias.</p>
          <div className="w-24 h-2 bg-agri-green mx-auto rounded-full mt-6"></div>
        </div>

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
                      <div className="flex flex-col">
                        <a href="tel:4232337456" className="font-medium hover:text-agri-gold transition-colors">(42) 3233-7456</a>
                        <a href="tel:4132337456" className="font-medium hover:text-agri-gold transition-colors">(41) 3233-7456</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-agri-gold shrink-0" />
                      <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de falar com o Administrativo." target="_blank" rel="noreferrer" className="font-medium hover:text-agri-gold transition-colors">(42) 99958-6858 (Adm)</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-agri-gold shrink-0" />
                      <a href="mailto:adm@agroarkafla.com.br" className="font-medium hover:text-agri-gold transition-colors">adm@agroarkafla.com.br</a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-agri-gold font-black text-xl mb-4 uppercase tracking-widest">Unidades de Produção</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-agri-gold/30 pl-4">
                      <p className="font-black text-sm text-agri-gold uppercase mb-2">Fazenda Karina (Agrícola)</p>
                      <a href="tel:4232321265" className="text-sm mb-1 block hover:text-agri-gold transition-colors">(42) 3232-1265</a>
                      <a href="mailto:faz.karina@agroarkafla.com.br" className="text-sm mb-1 block hover:text-agri-gold transition-colors">faz.karina@agroarkafla.com.br</a>
                      <a href="https://api.whatsapp.com/send?phone=5542999586492&text=Olá! Vi seu site e gostaria de falar com a Fazenda Karina." target="_blank" rel="noreferrer" className="text-sm font-bold text-white/70 hover:text-agri-gold transition-colors">WhatsApp: (42) 99958-6492</a>
                    </div>
                    <div className="border-l-2 border-agri-gold/30 pl-4">
                      <p className="font-black text-sm text-agri-gold uppercase mb-2">Fazenda Fundamento (Pecuária)</p>
                      <a href="mailto:faz.fundamento@agroarkafla.com.br" className="text-sm mb-1 block hover:text-agri-gold transition-colors">faz.fundamento@agroarkafla.com.br</a>
                      <a href="https://api.whatsapp.com/send?phone=5542999586467&text=Olá! Vi seu site e gostaria de falar com a Fazenda Fundamento." target="_blank" rel="noreferrer" className="text-sm font-bold text-white/70 hover:text-agri-gold transition-colors">WhatsApp: (42) 99958-6467</a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-agri-gold font-black text-xl mb-4 uppercase tracking-widest">Financeiro e Compras</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="text-agri-gold shrink-0" />
                      <a href="https://api.whatsapp.com/send?phone=5542999581944&text=Olá! Vi seu site e gostaria de falar com o Financeiro." target="_blank" rel="noreferrer" className="font-medium hover:text-agri-gold transition-colors">(42) 99958-1944 (Financeiro)</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-agri-gold shrink-0" />
                      <a href="mailto:financeiro@agroarkafla.com.br" className="font-medium hover:text-agri-gold transition-colors">financeiro@agroarkafla.com.br</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="text-agri-gold shrink-0" />
                      <a href="mailto:compras@agroarkafla.com.br" className="font-medium hover:text-agri-gold transition-colors">compras@agroarkafla.com.br</a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  <a href="https://www.instagram.com/agroarkafla/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-agri-gold transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo da Página de Contato)" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-agri-green transition-colors">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:w-3/5 p-12 md:p-16">
              <h3 className="text-3xl font-black text-agri-black mb-8">Envie uma Mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                const text = `Olá! Meu nome é ${name} (${email}). Gostaria de falar sobre ${subject}: ${message}`;
                window.open(`https://api.whatsapp.com/send?phone=5542999586858&text=${encodeURIComponent(text)}`, '_blank');
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-gray-700">Nome Completo</label>
                    <input 
                      name="name"
                      type="text" 
                      placeholder="Seu nome" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-gray-700">E-mail</label>
                    <input 
                      name="email"
                      type="email" 
                      placeholder="seu@email.com" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-gray-700">Assunto</label>
                  <select name="subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors appearance-none">
                    <option>Informações Gerais</option>
                    <option>Vendas (Silagem/Gado)</option>
                    <option>Financeiro</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-gray-700">Mensagem</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    placeholder="Como podemos ajudar?" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 outline-none focus:border-agri-green transition-colors resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-agri-green hover:bg-agri-dark text-white font-black py-5 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95">
                  Enviar via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Video Section - Before Footer on other pages */}
      <InstagramVideoSection />
    </div>
  );
};
