export const cities = [
  'Castro', 'Carambeí', 'Ponta Grossa', 'Piraí do Sul', 'Tibagi', 
  'Telêmaco Borba', 'Jaguariaíva', 'Sengés', 'Curitiba', 'Campo Largo',
  'Palmeira', 'Irati', 'Prudentópolis', 'Arapoti'
];

export const getCitySlug = (city: string) => city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
