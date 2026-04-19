import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Carta', path: '/carta' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-beige/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif font-black text-2xl tracking-tighter uppercase">Somos Kafe</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-medium transition-colors hover:text-coffee ${location.pathname === link.path ? 'text-espresso' : 'text-espresso/70'}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-5 text-sm"
          >
            Cómo llegar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-espresso"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige border-t border-espresso/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-xl font-display font-semibold ${location.pathname === link.path ? 'text-espresso' : 'text-espresso/60'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
              >
                Cómo llegar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
