import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
      alt="Agro Arkafla Logo" 
      className="h-16 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

export const Footer = () => {
  const cities = [
    'Castro', 'Carambeí', 'Ponta Grossa', 'Piraí do Sul', 'Tibagi', 
    'Telêmaco Borba', 'Jaguariaíva', 'Sengés', 'Curitiba', 'Campo Largo',
    'Palmeira', 'Irati', 'Prudentópolis', 'Arapoti'
  ];

  return (
    <footer className="bg-agri-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12 mb-12">
          <Logo className="invert brightness-0" />
          
          <div className="flex flex-wrap justify-center gap-8 font-bold">
            <Link to="/" className="hover:text-agri-gold transition-colors">Home</Link>
            <Link to="/quem-somos" className="hover:text-agri-gold transition-colors">Quem Somos</Link>
            <Link to="/atividades" className="hover:text-agri-gold transition-colors">Atividades</Link>
            <Link to="/logistica" className="hover:text-agri-gold transition-colors">Logística</Link>
            <Link to="/contato" className="hover:text-agri-gold transition-colors">Contato</Link>
          </div>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/grupo_arkafla/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-agri-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-agri-green transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Locality Links for SEO */}
        <div className="mb-12">
          <h4 className="text-agri-gold font-black text-sm uppercase tracking-widest mb-4 text-center md:text-left">Atendimento Regional</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            {cities.map(city => (
              <Link 
                key={city} 
                to={`/localidade/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white/40 hover:text-white text-xs transition-colors"
              >
                Agro Arkafla em {city}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-white/50 text-sm font-medium">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p>© 2024 Agro Arkafla - Todos os direitos reservados</p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
              <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-white/70">Desenvolvido</span>
              <span className="text-red-500 animate-heart-beat">❤️</span>
              <span className="text-white/70 text-xs">por</span>
              <a 
                href="https://supremasite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-agri-gold transition-colors"
              >
                Suprema Sites Express
              </a>
            </div>
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema Mídia" 
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
