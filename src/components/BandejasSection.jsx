import BandejaCard from './BandejaCard';

export default function BandejasSection() {
  const bandejas = [
    {
      image: "🍖",
      title: "Bandeja Clásica",
      description: "Una selección tradicional de nuestros mejores jamones, quesos y embutidos artesanales.",
      price: "$25",
      features: [
        "Jamón serrano premium",
        "Quesos selectos importados", 
        "Embutidos artesanales",
        "Sirve para 4-6 personas"
      ]
    },
    {
      image: "🧀",
      title: "Bandeja Gourmet",
      description: "Una experiencia culinaria única con productos importados y preparaciones especiales.",
      price: "$45",
      features: [
        "Productos importados exclusivos",
        "Quesos madurados especiales",
        "Jamones ibéricos",
        "Sirve para 8-10 personas"
      ]
    },
    {
      image: "🥓",
      title: "Bandeja Premium",
      description: "Lo mejor de nuestra casa para ocasiones especiales y eventos importantes.",
      price: "$65",
      features: [
        "Selección premium completa",
        "Presentación de lujo",
        "Productos de alta gama",
        "Sirve para 12-15 personas"
      ]
    }
  ];

  return (
    <section id="bandejas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
              Nuestras Especialidades
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada bandeja es preparada con amor y los mejores ingredientes, perfectas para cualquier celebración
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {bandejas.map((bandeja, index) => (
            <BandejaCard key={index} {...bandeja} />
          ))}
        </div>
      </div>
    </section>
  );
}