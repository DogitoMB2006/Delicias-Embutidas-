import { useState } from 'react';
import { Menu, Phone, MapPin, Clock, ChefHat, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-800 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(809) 555-0123</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <MapPin size={14} />
              <span>Santo Domingo, RD</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Clock size={14} />
            <span>Lun-Sáb: 8:00AM - 6:00PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <ChefHat className="text-white" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
                  Delicias <span className="italic">Embutidas</span>
                </div>
                <div className="text-xs text-gray-500">Calidad Premium desde 2025</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
              <li><a href="#inicio" className="hover:text-purple-600 transition-colors border-b-2 border-transparent hover:border-purple-600 pb-1">Inicio</a></li>
              <li><a href="#productos" className="hover:text-purple-600 transition-colors border-b-2 border-transparent hover:border-purple-600 pb-1">Productos</a></li>
              <li><a href="#bandejas" className="hover:text-purple-600 transition-colors border-b-2 border-transparent hover:border-purple-600 pb-1">Bandejas</a></li>
              <li><a href="#contacto" className="hover:text-purple-600 transition-colors border-b-2 border-transparent hover:border-purple-600 pb-1">Contacto</a></li>
            </ul>

            {/* CTA Button */}
            <button className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <ShoppingCart size={16} className="inline mr-2" />
              Pedir Ahora
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <ul className="space-y-3 text-gray-700">
                <li><a href="#inicio" className="block hover:text-purple-600">Inicio</a></li>
                <li><a href="#productos" className="block hover:text-purple-600">Productos</a></li>
                <li><a href="#bandejas" className="block hover:text-purple-600">Bandejas</a></li>
                <li><a href="#contacto" className="block hover:text-purple-600">Contacto</a></li>
              </ul>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">
                Pedir Ahora
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}