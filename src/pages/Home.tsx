import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Star, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
  const menuHighlights = [
    { name: 'Huevos Benedict', price: '12,5€' },
    { name: 'Royal Benedict', price: '12,5€' },
    { name: 'Pancakes Sirope', price: '9,5€' },
    { name: 'Tostada Aguacate', price: '8,0€' },
    { name: 'Tostada Salmón', price: '11,0€' },
    { name: 'Shakshuka', price: '10,0€' },
    { name: 'Brioche', price: '5,0€' },
  ];

  return (
    <div className="bg-beige pt-24 pb-12">
      <main className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bento-grid">
          {/* HERO SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bento-item hero md:col-span-2 md:row-span-2 !bg-gradient-to-br from-[#f9dcc4] to-coffee text-white p-10 flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <img 
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop" 
                alt="Huevos Benedict" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="relative z-10">
              <h1 className="font-serif font-black text-4xl md:text-6xl mb-6 leading-[1.1]">
                El brunch que todo el mundo está buscando en Antiguo ☕🍳
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg font-medium">
                Café de especialidad y platos caseros que vas a querer repetir cada mañana.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white shadow-xl"
              >
                Cómo llegar
              </a>
              <Link 
                to="/carta" 
                className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-display font-bold hover:bg-white/10 text-center"
              >
                Ver carta
              </Link>
            </div>

            <div className="relative z-10 mt-12 bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 hidden md:block w-fit">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-white fill-current" />
                <span className="text-sm font-bold tracking-tight">Uno de los brunch más populares de Donostia</span>
              </div>
              <p className="text-xs opacity-80 italic">"El mejor brunch de la zona, platos brutales"</p>
            </div>
          </motion.div>

          {/* MENU HIGHLIGHTS */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bento-item md:row-span-2 !bg-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 -mr-8 -mt-8 rotate-12">
               <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif font-black text-2xl uppercase tracking-tighter">Best Sellers</h2>
                <span className="text-[10px] uppercase tracking-widest bg-beige px-2 py-1 rounded-full font-bold">Comida 8:00 – 15:45</span>
              </div>
              <div className="space-y-4">
                {menuHighlights.map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-dotted border-espresso/20 pb-2">
                    <span className="font-bold text-sm">{item.name}</span>
                    <span className="font-serif font-bold italic text-coffee">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/carta" className="relative z-10 mt-8 flex items-center justify-center gap-2 font-bold text-sm text-espresso hover:text-coffee transition-colors">
              Explorar carta completa <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="relative z-10 mt-4 text-[10px] italic opacity-60 text-center">
              * Solemos llenarnos los fines de semana. ¡Ven temprano!
            </p>
          </motion.div>

          {/* LATTE ART FEATURE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bento-item !p-0 !bg-espresso group overflow-hidden relative min-h-[160px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" 
              alt="Latte Art" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="font-serif font-black text-white text-xl uppercase tracking-tight">Latte Art</h3>
                <p className="text-white/80 text-[10px] font-medium">Café de especialidad</p>
              </div>
            </div>
          </motion.div>

          {/* PANCAKES FEATURE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bento-item !p-0 !bg-[#2a2a2a] group overflow-hidden relative min-h-[160px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=600&auto=format&fit=crop" 
              alt="Pancakes Sirope" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="font-serif font-black text-white text-xl uppercase tracking-tight">Pancakes</h3>
                <p className="text-white/80 text-[10px] font-medium">Con sirope de arce</p>
              </div>
            </div>
          </motion.div>

          {/* CONTACT & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bento-item !bg-coffee !text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
               <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 w-full">
              <h3 className="font-serif font-bold text-2xl mb-4">¿Brunch hoy?</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-1 opacity-70" />
                  <div>
                    <p className="text-xs font-bold">Antonio Gaztañeta 4, Donostia</p>
                    <p className="text-[10px] opacity-70">Barrio de Antiguo</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-4 h-4 shrink-0 mt-1 opacity-70" />
                  <div className="grid grid-cols-2 gap-4 text-[10px]">
                    <div>M-V: 08:00 - 16:00</div>
                    <div>S-D: 08:30 - 15:00</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-tighter text-espresso">CERRADO LUNES Y MARTES</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white w-full mt-6 shadow-lg text-sm relative z-10"
            >
              Cómo llegar
            </a>
          </motion.div>
        </div>
      </main>

      {/* INSTAGRAM & SOCIAL SLIDER */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
         <div className="md:col-span-1 bento-item !p-0 !rounded-3xl h-64 overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop" alt="Tostada Aguacate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
         </div>
         <div className="md:col-span-1 bento-item !p-0 !rounded-3xl h-64 overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop" alt="Bakery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
         </div>
         <div className="md:col-span-1 bento-item !p-0 !rounded-3xl h-64 overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop" alt="Smoothie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
         </div>
         <div className="md:col-span-1 bento-item !p-0 !rounded-3xl h-64 overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" alt="Coffee Vibe" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
         </div>
      </section>
    </div>
  );
}
