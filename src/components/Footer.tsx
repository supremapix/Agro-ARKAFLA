import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { cities, getCitySlug } from '../data/cities';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://castro.agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
      alt="Agro Arkafla Logo" 
      className="h-16 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-agri-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-agri-green/50 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-agri-green/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <Logo className="invert brightness-0 mb-8" />
            <p className="text-white/60 text-center lg:text-left leading-relaxed mb-8 max-w-sm font-medium">
              Referência em excelência no agronegócio, aliando tradição familiar à tecnologia de ponta para resultados de alta performance no campo.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/agroarkafla/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-agri-gold hover:border-agri-gold transition-all duration-300 group">
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo do Rodapé)" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-agri-green hover:border-agri-green transition-all duration-300 group">
                <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-agri-gold font-black text-sm uppercase tracking-widest mb-8">Navegação</h4>
              <ul className="space-y-4">
                {['Home', 'Quem Somos', 'Atividades', 'Logística', 'Galeria', 'Contato'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace('í', 'i').replace(' ', '-')}`} 
                      className="text-white/60 hover:text-white transition-colors font-bold text-sm uppercase tracking-wider flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-agri-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2">
              <h4 className="text-agri-gold font-black text-sm uppercase tracking-widest mb-8">Atendimento Regional</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                {cities.map(city => (
                  <Link 
                    key={city} 
                    to={`/localidade/${getCitySlug(city)}`}
                    className="text-white/40 hover:text-agri-green text-xs transition-colors font-medium"
                  >
                    Agro Arkafla {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p>© 2024 Agro Arkafla - Todos os direitos reservados</p>
            <div className="flex gap-8">
              <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
              <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10 group hover:border-agri-gold/50 transition-colors">
              <span className="text-white/50">Desenvolvido por</span>
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="text-white font-black group-hover:text-agri-gold transition-colors">Suprema Sites Express</span>
                <img 
                  src="https://img.supremamidia.com/suprema-img.png" 
                  alt="Suprema Mídia" 
                  className="h-5 w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all"
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
