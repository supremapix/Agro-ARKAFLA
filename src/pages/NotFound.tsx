import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <EnhancedSEO 
        title="Página Não Encontrada | Agro Arkafla"
        description="A página que você está procurando não existe ou foi movida."
      />
      
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block mb-8">
            <span className="text-9xl font-black text-agri-green/10 select-none">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-agri-gold rounded-full flex items-center justify-center shadow-lg">
                <Home className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-agri-black mb-4">
            Página Não Encontrada
          </h1>
          
          <p className="text-agri-gray mb-10 leading-relaxed">
            Desculpe, a página que você está procurando não existe ou foi movida para um novo endereço.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-agri-green text-white rounded-xl font-semibold hover:bg-agri-green-dark transition-all shadow-md hover:shadow-lg group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Voltar ao Início
            </Link>
            
            <Link 
              to="/contato"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-agri-green text-agri-green rounded-xl font-semibold hover:bg-agri-green hover:text-white transition-all"
            >
              Fale Conosco
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
