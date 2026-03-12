import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => (
  <motion.a 
    href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Encontrei seu site e gostaria de mais informações sobre a Agro Arkafla." 
    target="_blank" 
    rel="noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-agri-green text-white p-5 rounded-full shadow-[0_20px_40px_rgba(46,125,50,0.4)] flex items-center justify-center group"
  >
    <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-transform duration-300"></div>
    <MessageCircle size={32} className="relative z-10" />
    <span className="absolute right-full mr-4 bg-agri-black text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Fale Conosco
    </span>
  </motion.a>
);
