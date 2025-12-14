import Navbar from '../../components/Navbar';
import HeroSection from './HeroSection';
import PlansPreview from './PlansPreview';
import ForTrainers from './ForTrainers';
import Footer from '../../components/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PlansPreview />
      <ForTrainers />
      <Footer />
    </div>
  );
}

export default LandingPage;
