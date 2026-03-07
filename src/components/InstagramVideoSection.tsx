import { motion } from 'motion/react';
import { Instagram, ArrowRight, MessageCircle } from 'lucide-react';

export const InstagramVideoSection = () => {
  return (
    <section className="py-20 bg-agri-black overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-agri-green/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-agri-gold/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Video Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0"
          >
            <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/10 group">
              <iframe
                src="https://www.instagram.com/reels/DOMWdCiEeQH/embed/"
                className="w-full h-full border-none"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              
              {/* Overlay for premium feel */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-agri-black/20 rounded-[2.2rem]"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-agri-green/20 text-agri-green px-4 py-2 rounded-full font-black text-sm mb-6 tracking-widest uppercase">
              <Instagram size={18} />
              CONTEÚDO EXCLUSIVO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Acompanhe a <span className="text-agri-gold">Excelência</span> no Campo
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed mb-10 font-medium">
              Acompanhe o dia a dia da Fazenda Fundamento e a excelência do Grupo Arkafla em cada detalhe. Tecnologia, tradição e resultados que impulsionam o agronegócio brasileiro de forma premium e profissional.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a 
                href="https://www.instagram.com/grupo_arkafla/" 
                target="_blank"
                rel="noreferrer"
                className="group w-full sm:w-auto bg-white text-agri-black px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all hover:bg-agri-gold hover:scale-105 shadow-2xl"
              >
                Siga no Instagram
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a 
                href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá vi seu vídeo no Instagram e gostaria de saber mais sobre a Fazenda Fundamento:" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all hover:bg-white/10 hover:border-white/40"
              >
                <MessageCircle size={22} />
                Falar Conosco
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-white">45+</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Anos de História</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Profissionalismo</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-white">Premium</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Qualidade Agro</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
