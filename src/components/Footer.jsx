import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Delicias Embutidas</h3>
            <p className="text-gray-400 mb-4">
              Tradición familiar desde 2025, ofreciendo los mejores embutidos artesanales.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <Heart size={16} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Phone size={16} className="mr-2" /> (809) 555-0123</p>
              <p className="flex items-center"><MapPin size={16} className="mr-2" /> Santo Domingo, RD</p>
              <p className="flex items-center"><Clock size={16} className="mr-2" /> Lun-Sáb: 8:00AM - 6:00PM</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lunes - Viernes: 8:00AM - 6:00PM</p>
              <p>Sábados: 8:00AM - 4:00PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Delicias Embutidas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}