import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-beige min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-black text-espresso mb-6 uppercase tracking-tighter"
          >
            Hola.
          </motion.h1>
          <p className="text-2xl text-espresso/60 max-w-2xl font-medium">
            Estamos en el corazón de Antiguo, listos para prepararte tu próximo café.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bento-item !bg-espresso !text-beige p-10 md:p-16 rounded-[40px] shadow-2xl space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-black uppercase tracking-tight">Encuéntranos</h2>
              
              <div className="space-y-6">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group hover:text-coffee transition-colors"
                >
                  <div className="bg-beige/10 p-3 rounded-2xl group-hover:bg-beige/20 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-serif font-black text-xl uppercase tracking-tight">Dirección</p>
                    <p className="text-beige/60 text-sm">Antonio Gaztañeta 4, 20018 Donostia</p>
                  </div>
                </a>

                <a 
                  href="tel:+34658643157" 
                  className="flex items-start gap-5 group hover:text-coffee transition-colors"
                >
                  <div className="bg-beige/10 p-3 rounded-2xl group-hover:bg-beige/20 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-serif font-black text-xl uppercase tracking-tight">Teléfono</p>
                    <p className="text-beige/60 text-sm">+34 658 643 157</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-black uppercase tracking-tight">Horarios</h2>
              <div className="flex items-start gap-5">
                <div className="bg-beige/10 p-3 rounded-2xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-2 text-beige/60 text-sm">
                  <p><span className="text-beige font-semibold">Miércoles a Viernes:</span> 08:00 – 16:00</p>
                  <p><span className="text-beige font-semibold">Sábado y Domingo:</span> 08:30 – 15:00</p>
                  <p className="pt-2 text-red-300 font-bold uppercase tracking-wider text-[10px] italic">Lunes y Martes – Cerrado</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia" 
                target="_blank"
                className="btn-white bg-beige text-espresso text-center flex items-center justify-center gap-2 hover:bg-white text-sm"
              >
                Cómo llegar <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="tel:+34658643157" 
                className="btn-secondary border-beige text-beige text-center hover:bg-beige hover:text-espresso text-sm"
              >
                Llamar ahora
              </a>
            </div>
          </motion.div>

          {/* Map & Social */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-[40px] overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[500px] border-4 border-espresso/5 bg-cream flex items-center justify-center"
            >
              {/* Google Maps Iframe Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.123456789!2d-2.00!3d43.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51af90a5682855%3A0xc3f9464e8e2c077b!2sAntonio%20Gazta%C3%B1eta%20Kalea%2C%204%2C%2020018%20Donostia%2C%20Gipuzkoa!5e0!3m2!1ses!2ses!4v1713500000000!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </motion.div>
            
            <div className="bento-item !bg-white !p-0 rounded-[40px] flex flex-col items-center justify-center text-center overflow-hidden relative group min-h-[300px]">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&auto=format&fit=crop" alt="Bakery Close-up" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 p-10 flex flex-col items-center">
                <div className="bg-espresso p-4 rounded-full mb-4">
                  <Instagram className="w-8 h-8 text-beige" />
                </div>
                <p className="text-xl font-serif font-black uppercase tracking-tight">@somoskafe_donostia</p>
                <p className="text-espresso/60 text-sm mt-2">Síguenos para ver la vitrina del día y nuestras novedades.</p>
                <a href="#" className="mt-4 font-bold text-espresso underline underline-offset-4 hover:text-coffee transition-colors text-sm">Seguir en Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
