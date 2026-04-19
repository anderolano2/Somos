import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carta" element={<Menu />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Fixed Mobile CTA */}
        <div className="fixed bottom-6 left-0 right-0 px-6 sm:hidden z-50">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Antonio+Gaztañeta+4,+Donostia"
            className="btn-primary w-full shadow-xl flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}
