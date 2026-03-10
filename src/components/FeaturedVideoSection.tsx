import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';

export const FeaturedVideoSection = () => {
  return (
    <section className="py-24 bg-agri-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-agri-green/5 skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-agri-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5 w-full"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 group">
              <iframe
                src="https://www.youtube.com/embed/D1hz-MQL0Fs"
                title="O Código da Genética - Episódio 1 Fazenda Fundamento"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-agri-gold/20 rounded-[40px] -z-10 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/5 w-full text-white"
          >
            <div className="inline-flex items-center gap-2 bg-agri-gold/10 border border-agri-gold/20 px-4 py-1 rounded-full text-agri-gold font-bold text-xs uppercase tracking-widest mb-6">
              <Play size={14} fill="currentColor" />
              Websérie em Destaque
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
              “O Código da Genética” <br />
              <span className="text-agri-gold italic">Episódio 1: Fazenda Fundamento</span>
            </h2>
            
            <div className="space-y-4 text-white/80 text-lg leading-relaxed mb-8">
              <p>
                Você já parou pra pensar no que realmente está por trás das decisões genéticas mais assertivas da pecuária leiteira moderna? 🧬🐄
              </p>
              <p>
                É isso que a ABS mostra em <strong>“O Código da Genética”</strong>, a nova websérie que revela como estratégias personalizadas, baseadas em dados e nos objetivos de cada fazenda, estão mudando a forma de fazer gestão genética no leite.
              </p>
              <p>
                Ao longo dos episódios, a série mergulha em temas como genômica aplicada, índices genéticos customizados, assistência técnica direcionada e o uso estratégico da genética para construir rebanhos mais eficientes e alinhados ao planejamento de longo prazo. Tudo com casos reais de propriedades referência no Brasil.
              </p>
              <p className="text-sm italic text-white/60">
                Disponível nos canais digitais da ABS e do MilkPoint.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.youtube.com/watch?v=D1hz-MQL0Fs" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-agri-black px-8 py-4 rounded-full font-black hover:bg-agri-gold hover:text-white transition-all shadow-xl"
              >
                Assistir no YouTube <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
