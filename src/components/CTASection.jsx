import { Phone, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para ordenar?</h2>
        <p className="text-xl mb-8 opacity-90">
          Haz tu pedido ahora y disfruta de la mejor calidad en embutidos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Phone size={20} className="inline mr-3" />
            Llamar Ahora
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            <MapPin size={20} className="inline mr-3" />
            Visitar Tienda
          </button>
        </div>
      </div>
    </section>
  );
}