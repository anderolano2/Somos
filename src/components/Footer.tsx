import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-beige pt-16 pb-32 md:pb-16 border-t border-beige/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="bg-beige p-1.5 rounded-lg">
              <Coffee className="w-5 h-5 text-espresso" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Somos Kafe</span>
          </Link>
          <p className="text-beige/70 text-sm leading-relaxed max-w-xs">
            Especialistas en café y brunch en el corazón de Antiguo. Comida real, momentos reales.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-coffee transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-coffee transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Explora</h4>
          <ul className="space-y-3 text-beige/70">
            <li><Link to="/" className="hover:text-beige transition-colors">Inicio</Link></li>
            <li><Link to="/carta" className="hover:text-beige transition-colors">La Carta</Link></li>
            <li><Link to="/nosotros" className="hover:text-beige transition-colors">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-beige transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Encuéntranos</h4>
          <ul className="space-y-4 text-beige/70">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-beige/50" />
              <span className="text-sm">Antonio Gaztañeta 4, Donostia</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 shrink-0 text-beige/50" />
              <span className="text-sm">+34 658 643 157</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display font-bold text-lg mb-6">Horarios</h4>
          <ul className="space-y-3 text-beige/70">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 shrink-0 text-beige/50" />
              <div className="text-sm">
                <p>Mié - Vie: 08:00 - 16:00</p>
                <p>Sáb - Dom: 08:30 - 15:00</p>
                <p className="mt-1 font-semibold text-red-400">Lunes y Martes: Cerrado</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-beige/10 text-center text-xs text-beige/40">
        <p>© {new Date().getFullYear()} Somos Kafe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
