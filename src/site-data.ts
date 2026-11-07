export const SITE = 'https://www.agroarkafla.com';
export const PHONE = '5542999586858';
export const INSTAGRAM = 'https://www.instagram.com/agroarkafla/';
export const images = {
 logo:'/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png',
 cows:'/images/agro-gado-holandes-castro-pr-castro-fazenda-de-gado-794x523.png',
 field:'/images/foto-fardos-palha-de-trigo-666x499.jpg',
 wheat:'/images/foto-colheita-trigo-254x191.jpg',
 crops:'/images/fotos-agricultura-254x191.jpg',
 forest:'/images/agro-arkafla-silvicultura-1-183x217.jpg',
 silage:'/images/agro-arkafla-castro-pr-castro-silagem-pre-secada-1-794x523.png',
 packed:'/images/silagem-pr-secada-embalada-254x165.jpg'
};
export const cities = ['Castro','Carambeí','Ponta Grossa','Piraí do Sul','Tibagi','Telêmaco Borba','Jaguariaíva','Sengés','Curitiba','Campo Largo','Palmeira','Irati','Prudentópolis','Arapoti'];
export const slug = (s:string)=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'-');
export const wa = (message:string,phone=PHONE)=>'https://wa.me/'+phone+'?text='+encodeURIComponent(message);
export const nav = [['/','Início'],['/quem-somos','Quem somos'],['/atividades','Atividades'],['/logistica','Logística'],['/galeria','Galeria'],['/contato','Contato']];
export type Meta = { title:string; description:string; heading:string; eyebrow:string; noindex?:boolean };
export const pages:Record<string,Meta> = {
 '/':{title:'Agro Arkafla | Agricultura e pecuária em Castro, PR',description:'Conheça a Agro Arkafla, as fazendas Fundamento e Karina, a produção agrícola, o gado Holandês e a silagem pré-secada em Castro, Paraná.',heading:'Raízes no campo. Olhar para o futuro.',eyebrow:'Castro · Paraná · Campos Gerais'},
 '/quem-somos':{title:'Quem somos | Agro Arkafla e Fazenda Fundamento',description:'Conheça a história familiar da Agro Arkafla, a origem do nome e as fazendas Fundamento e Karina em Castro, nos Campos Gerais do Paraná.',heading:'Uma história que se cultiva em família.',eyebrow:'Nossa essência'},
 '/atividades':{title:'Agricultura, pecuária e silvicultura | Agro Arkafla',description:'Produção agrícola, pecuária leiteira com gado Holandês e silvicultura. Conheça as atividades da Agro Arkafla e consulte a disponibilidade de silagem.',heading:'Do solo ao rebanho, atividades que se conectam.',eyebrow:'O que fazemos'},
 '/logistica':{title:'Fazendas e logística em Castro, PR | Agro Arkafla',description:'Localização das fazendas Karina e Fundamento, na região de Socavão, em Castro. Consulte contatos, acesso e condições de retirada ou transporte.',heading:'O caminho até a nossa produção.',eyebrow:'Unidades e logística'},
 '/galeria':{title:'Galeria de fotos da Agro Arkafla | Castro, PR',description:'Registros da Agro Arkafla: gado Holandês, lavouras, silagem e silvicultura. Veja fotos das atividades e acompanhe o perfil oficial no Instagram.',heading:'O campo, em cada detalhe.',eyebrow:'Galeria de registros'},
 '/contato':{title:'Contato e WhatsApp | Agro Arkafla em Castro, PR',description:'Fale com o administrativo, Fazenda Karina, Fazenda Fundamento, financeiro e compras da Agro Arkafla. Escritório em Castro, Paraná.',heading:'Vamos conversar sobre o que você precisa.',eyebrow:'Contato direto'},
 '/silagem-pre-secada':{title:'Silagem pré-secada de aveia e azevém | Agro Arkafla',description:'Informações sobre a silagem pré-secada da Agro Arkafla em Castro, PR. Consulte disponibilidade, quantidade, armazenamento e logística com a equipe.',heading:'Silagem pré-secada. Uma conversa que começa no campo.',eyebrow:'Produção agrícola'},
 '/privacidade':{title:'Privacidade e uso de dados | Agro Arkafla',description:'Saiba como funcionam os contatos pelo WhatsApp, os links externos e o carregamento opcional de vídeos neste site da Agro Arkafla.',heading:'Privacidade com clareza.',eyebrow:'Informações do site'},
 '/termos':{title:'Informações de uso do site | Agro Arkafla',description:'Informações sobre o conteúdo institucional, consultas comerciais e links externos do site da Agro Arkafla.',heading:'Informações sobre o uso do site.',eyebrow:'Transparência'}
};
for(const city of cities) pages['/localidade/'+slug(city)]={title:city==='Castro'?'Agro Arkafla em Castro, PR | Fazendas e contatos':'Consulte a Agro Arkafla a partir de '+city+' | Paraná',description:'Informações para quem está em '+city+' e deseja falar com a Agro Arkafla, sediada em Castro. Consulte produtos, disponibilidade e condições de logística.',heading:city==='Castro'?'Nossa base em Castro, nos Campos Gerais.':'Está em '+city+'? Converse com a Agro Arkafla.',eyebrow:'Conexão regional'};
export const notFound:Meta={title:'Página não encontrada | Agro Arkafla',description:'O endereço informado não foi encontrado. Acesse as atividades ou entre em contato com a Agro Arkafla.',heading:'Este caminho não leva a uma página.',eyebrow:'Erro 404',noindex:true};
export const faqs = [
 {q:'Onde fica a Agro Arkafla?',a:'A Agro Arkafla está sediada em Castro, no Paraná. O escritório fica na Rua do Rosário, 130, Centro. As fazendas Karina e Fundamento estão na região de Socavão. Combine o acesso com a equipe antes de uma visita.'},
 {q:'Quais são as atividades da empresa?',a:'As frentes apresentadas pela Agro Arkafla são agricultura, pecuária leiteira e silvicultura, com produção de grãos e silagem e criação de gado Holandês.'},
 {q:'Como consultar silagem ou animais?',a:'Fale com a Fazenda Karina para silagem e produção agrícola, ou com a Fazenda Fundamento para assuntos da pecuária. Disponibilidade, características, condições comerciais e transporte são confirmados diretamente pela equipe.'},
 {q:'A Agro Arkafla entrega em outras cidades?',a:'Consulte a equipe informando cidade, quantidade e produto. A viabilidade, o prazo, o frete e as condições de retirada ou entrega precisam ser avaliados para cada pedido.'}
];
export const photos=[
 {src:images.cows,title:'Rebanho Holandês',category:'Pecuária'},
 {src:images.field,title:'Fardos no campo',category:'Agricultura'},
 {src:images.silage,title:'Produção de silagem',category:'Silagem'},
 {src:images.crops,title:'Lavouras da Agro Arkafla',category:'Agricultura'},
 {src:images.wheat,title:'Colheita de trigo',category:'Agricultura'},
 {src:images.forest,title:'Silvicultura',category:'Silvicultura'},
 {src:images.packed,title:'Silagem embalada',category:'Silagem'},
 {src:'/images/fotos-agricultura-2-254x191.jpg',title:'Atividades na lavoura',category:'Agricultura'},
 {src:'/images/foto-palha-de-trigo-254x191.jpg',title:'Palha de trigo',category:'Agricultura'},
 {src:'/images/silagem-pre-secada-castro-agro-arkafla-254x337.jpg',title:'Silagem no campo',category:'Silagem'}
];
