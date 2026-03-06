import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => (
  <a 
    href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all animate-bounce"
  >
    <MessageCircle size={32} />
  </a>
);
