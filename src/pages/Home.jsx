import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ProductsSection from '../components/ProductsSection';
import BandejasSection from '../components/BandejasSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <BandejasSection />
      <CTASection />
      <Footer />
    </div>
  );
}