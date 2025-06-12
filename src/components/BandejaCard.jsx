import { Star, Heart } from 'lucide-react';

export default function BandejaCard({ image, title, description, price, features }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
      <div className="relative overflow-hidden">
        <div className="h-56 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
          <div className="text-6xl opacity-30">{image}</div>
        </div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <Star size={14} className="text-purple-500 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <Heart size={16} className="inline mr-2" />
          Seleccionar
        </button>
      </div>
    </div>
  );
}