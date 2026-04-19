import { motion } from 'motion/react';
import { Heart, Coffee, Utensils } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl font-serif font-black text-espresso leading-[0.9] uppercase tracking-tighter">
              Más que un café de barrio.
            </h1>
            <p className="text-2xl text-espresso/70 leading-relaxed font-medium">
              Somos Kafe es una cafetería de barrio en Antiguo donde apostamos por el café de especialidad y el brunch hecho con cariño.
            </p>
            <div className="space-y-6 text-espresso/80 text-lg leading-relaxed bento-item !bg-white">
              <p>
                Nacimos con la ilusión de crear un espacio donde la calidad y el trato cercano fueran la prioridad. Cada taza de café que servimos y cada plato que sale de nuestra cocina tiene una historia detrás.
              </p>
              <p>
                Trabajamos con producto de calidad, elaboraciones caseras y una experiencia pensada para disfrutar sin prisa. Nuestra misión es simple: que te sientas como en casa, pero con el mejor café que hayas probado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex gap-4 bento-item !bg-espresso !text-white">
                <div className="bg-coffee p-3 rounded-2xl h-fit">
                  <Coffee className="w-6 h-6 text-espresso" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl mb-1 uppercase tracking-tight">Calidad</h3>
                  <p className="text-white/60 text-xs">Café de especialidad de tostadores locales y leche fresca.</p>
                </div>
              </div>
              <div className="flex gap-4 bento-item !bg-white">
                <div className="bg-coffee p-3 rounded-2xl h-fit">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl mb-1 uppercase tracking-tight">Cariño</h3>
                  <p className="text-espresso/60 text-xs text-xs">Elaboramos todo en nuestra pequeña cocina cada mañana.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
                alt="Nuestra Cafetería" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-coffee text-white p-8 rounded-[40px] shadow-xl hidden md:block max-w-xs border-8 border-beige">
              <p className="font-serif font-black text-2xl mb-2 uppercase tracking-tight">Producto Local</p>
              <p className="text-sm opacity-80">Apoyamos a productores de la zona para ofrecerte lo mejor de Donostia.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
