import { Users, Award, Star, ChefHat } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: Users, number: "n/a+", label: "Clientes Satisfechos" },
    { icon: Award, number: "n/a", label: "Años de Experiencia" },
    { icon: Star, number: "n/a", label: "Calificación Promedio" },
    { icon: ChefHat, number: "n/a+", label: "Productos Artesanales" }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon size={32} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}