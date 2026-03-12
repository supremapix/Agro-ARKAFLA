import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { cities, getCitySlug } from '../data/cities';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://www.agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
      alt="Agro Arkafla Logo" 
      className="h-16 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-agri-black text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-agri-gold/30 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-agri-green/5 rounded-full blur-[120px]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-agri-gold/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <Logo className="invert brightness-0 mb-10 scale-110 origin-left" />
            <p className="text-white/50 text-center lg:text-left leading-relaxed mb-10 max-w-sm font-medium text-lg">
              Referência em excelência no agronegócio, aliando tradição familiar à tecnologia de ponta para resultados de alta performance no campo.
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/agroarkafla/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-agri-gold hover:border-agri-gold transition-all duration-500 group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo do Rodapé)" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-agri-green hover:border-agri-green transition-all duration-500 group">
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-16">
            <div>
              <h4 className="text-agri-gold font-black text-[10px] uppercase tracking-[0.4em] mb-10">Navegação</h4>
              <ul className="space-y-5">
                {['Home', 'Quem Somos', 'Atividades', 'Logística', 'Galeria', 'Contato'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace('í', 'i').replace(' ', '-')}`} 
                      className="text-white/40 hover:text-white transition-all font-black text-xs uppercase tracking-widest flex items-center gap-3 group"
                    >
                      <span className="w-2 h-[1px] bg-agri-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <h4 className="text-agri-gold font-black text-[10px] uppercase tracking-[0.4em] mb-10">Atendimento Regional</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {cities.map(city => (
                  <Link 
                    key={city} 
                    to={`/localidade/${getCitySlug(city)}`}
                    className="text-white/30 hover:text-agri-green text-[11px] transition-colors font-bold uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-agri-green transition-colors"></span>
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <p>© 2024 Agro Arkafla - Todos os direitos reservados</p>
            <div className="flex gap-10">
              <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
              <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-8">
            <div className="flex items-center gap-5 bg-white/5 px-8 py-4 rounded-2xl border border-white/10 group hover:border-agri-gold/30 transition-all duration-500">
              <span className="text-white/40">Desenvolvido por</span>
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <span className="text-white font-black group-hover:text-agri-gold transition-colors text-xs tracking-widest">Suprema Sites Express</span>
                <img 
                  src="https://img.supremamidia.com/suprema-img.png" 
                  alt="Suprema Mídia" 
                  className="h-6 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
