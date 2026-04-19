import { motion } from 'motion/react';
import { Coffee, Utensils, Star } from 'lucide-react';

export default function Menu() {
  const beverageCategories = [
    {
      title: 'Café de Especialidad',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { name: 'Espresso', price: '2,1€ / Iced 2,3€' },
        { name: 'Espresso especial', price: '2,7€ / Iced 2,9€' },
        { name: 'Cortado', price: '2,2€ / Iced 2,4€' },
        { name: 'Cortado doble shot', price: '2,5€ / Iced 2,7€' },
        { name: 'Café con leche', price: '2,4€ / 3,3€ / Iced 3,6€' },
        { name: 'Capuchino (cacao o canela)', price: '2,5€ / 3,3€ / Iced 3,7€' },
        { name: 'Flat white', price: '3,2€ / 3,6€ / Iced 3,5€' },
        { name: 'Batch brew', price: '4€ / 5€' },
        { name: 'Americano', price: '2,5€ / Iced 2,8€' },
        { name: 'Long black', price: '2,4€ / Iced 2,6€' },
        { name: 'Cold brew', price: '3,5€ / 4,5€' },
        { name: 'Moka', price: '4,2€ / Iced 4,8€' },
        { name: 'Dirty chai (chai + espresso)', price: '4,5€ / Iced 5€' },
      ]
    },
    {
      title: 'No solo café',
      icon: <Star className="w-6 h-6" />,
      items: [
        { name: 'Chocolate Somos (leche + vainilla Madagascar)', price: '4,8€ / Iced 5,2€' },
        { name: 'Choco Chai', price: '4€ / Iced 4,8€' },
        { name: 'Chocolate con leche', price: '4€ / Iced 4,5€' },
        { name: 'Iced Latte (vainilla/caramelo)', price: '4,4€' },
        { name: 'Matcha Latte', price: '4€ / Iced 4,8€' },
        { name: 'Matcha (vainilla/fresa)', price: '4,8€ / Iced 5,2€' },
        { name: 'Iced Lemon Matcha', price: '5€' },
        { name: 'Chai Latte', price: '4€ / Iced 4,8€' },
        { name: 'Golden Latte', price: '4€ / Iced 4,8€' },
      ]
    },
    {
      title: 'Refrescantes & Otros',
      items: [
        { name: 'Zumo de naranja', price: '4€ / 5,8€' },
        { name: 'Limonada hierbabuena', price: '4€' },
        { name: 'Pink lemonade', price: '4,8€' },
        { name: 'Smoothie de frutas', price: '5,5€' },
        { name: 'Infusiones / Té', price: '3€ / Iced 3,2€' },
        { name: 'Refrescos sodas', price: '4,5€' },
        { name: 'Cervezas Bidassoa', price: '3,5€' },
      ]
    }
  ];

  const foodItems = [
    { name: 'Huevos Benedict', price: '12,5€', desc: 'Huevos bajo temperatura con salsa holandesa casera sobre brioche artesano.' },
    { name: 'Royal Benedict', price: '12,5€', desc: 'Nuestra versión premium con salmón ahumado de calidad.' },
    { name: 'Pancakes', price: '9,5€', desc: 'Receta propia, esponjosos y cargados de sabor.' },
    { name: 'Tostada de Aguacate', price: '8€', desc: 'Aguacate hass, semillas y aceite de oliva virgen.' },
    { name: 'Tostada de Salmón', price: '11€', desc: 'Salmón ahumado, crema de queso y eneldo.' },
    { name: 'Shakshuka', price: '10€', desc: 'Huevos escalfados en salsa de tomate especiada y pimientos.' },
    { name: 'Huevos Turcos', price: '10€', desc: 'Yogurt griego, huevos, mantequilla de chili y eneldo.' },
    { name: 'Sandwich Pastrami', price: '11,5€', desc: 'Pastrami, pepinillo, mostaza y queso fundido.' },
    { name: 'Tostada de Pera', price: '9€', desc: 'Queso crema, pera caramelizada y nueces.' },
    { name: 'Bowl de Yogurt', price: '7,5€', desc: 'Granola artesana, fruta de temporada y miel.' },
    { name: 'Tostada de Champiñones', price: '10€', desc: 'Crema de trufa, champiñones salteados y huevo.' },
    { name: 'Sandwich Mixto', price: '10,5€', desc: 'Jamón ibérico y queso fundido en pan brioche.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-display font-bold text-espresso mb-6"
          >
            La Carta
          </motion.h1>
          <p className="text-xl text-espresso/60 max-w-2xl mx-auto">
            Comida real preparada al momento. Brunch servido desde las 8:00 hasta las 15:45.
          </p>
        </header>

        {/* Food Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-12">
                <Utensils className="w-8 h-8 text-espresso" />
                <h2 className="text-4xl font-display font-bold">Kitchen & Brunch</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {foodItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-espresso/10 pb-6 group"
                  >
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-2xl font-display font-bold group-hover:text-coffee transition-colors leading-tight">{item.name}</h3>
                      <span className="font-bold text-espresso ml-4 whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-espresso/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-80 bento-item !p-0 !rounded-[40px] sticky top-32 h-fit overflow-hidden">
                <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop" alt="Brunch" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso p-8 text-white">
                    <p className="font-serif font-black text-xl uppercase tracking-tight">Especialidad de la casa</p>
                    <p className="text-sm opacity-80 mt-2">Huevos Benedict preparados al momento con salsa holandesa casera.</p>
                </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-espresso/5 rounded-2xl flex items-center justify-between">
            <p className="text-espresso/80 font-medium">Extras: Huevo +2€ | Aguacate +2€ | Bacon +2€</p>
            <div className="hidden sm:block">
                <img src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=200&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
            </div>
          </div>
        </section>

        {/* Drinks Section */}
        <section className="bento-item !bg-white">
          <div className="flex items-center gap-3 mb-12">
            <Coffee className="w-8 h-8 text-coffee" />
            <h2 className="text-4xl font-serif font-black uppercase tracking-tight">Drinks</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
            {beverageCategories.map((cat, i) => (
              <div key={i} className="space-y-8">
                <h3 className="text-2xl font-serif font-black uppercase tracking-tighter flex items-center gap-2 border-b-2 border-espresso pb-2">
                  {cat.icon} {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex justify-between items-center group">
                      <span className="font-bold text-sm">{item.name}</span>
                      <div className="flex-grow border-b border-dotted border-espresso/20 mx-4 h-0" />
                      <span className="font-serif font-bold italic text-coffee whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Bakery Teaser */}
            <div className="bento-item !bg-espresso !text-beige p-12 flex flex-col justify-center text-center">
              <h3 className="text-3xl font-serif font-black uppercase mb-6">Bakery Casero</h3>
              <p className="text-lg text-beige/80 mb-8">
                Toda nuestra repostería es casera y cambia a diario. 
                <span className="block mt-4 font-semibold text-beige">Consulta la vitrina de hoy en nuestro local.</span>
              </p>
              <div className="grid grid-cols-3 gap-4">
                <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop" alt="Cookies" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1578985543813-28c3a12a02d1?q=80&w=400&auto=format&fit=crop" alt="Cake" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400&auto=format&fit=crop" alt="Bakery" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer info for menu */}
        <div className="mt-24 text-center border-t border-espresso/10 pt-12">
          <p className="text-espresso/40 text-sm">
            Si tienes alguna alergia o intolerancia, por favor dínoslo antes de pedir.
          </p>
        </div>
      </div>
    </div>
  );
}
