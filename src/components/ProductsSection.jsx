export default function ProductsSection() {
  return (
    <section id="productos" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
            Lista de Precios
          </span>
        </h2>
        <p className="text-xl text-gray-600 italic mb-12">Para toda ocasión especial</p>
        
        {/* Quick pricing cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Bandejas Pequeñas</h3>
            <p className="text-3xl font-bold text-gray-800 mb-2">$15-25</p>
            <p className="text-gray-600">4-6 personas</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Bandejas Medianas</h3>
            <p className="text-3xl font-bold text-gray-800 mb-2">$35-45</p>
            <p className="text-gray-600">8-12 personas</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-600">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Bandejas Premium</h3>
            <p className="text-3xl font-bold text-gray-800 mb-2">$55-75</p>
            <p className="text-gray-600">15+ personas</p>
          </div>
        </div>
      </div>
    </section>
  );
}