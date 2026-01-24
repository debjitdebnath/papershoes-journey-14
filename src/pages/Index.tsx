import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import HeroSection from '@/components/sections/HeroSection';
import MissionSection from '@/components/sections/MissionSection';
import RunnersSection from '@/components/sections/RunnersSection';
import FrameworkSection from '@/components/sections/FrameworkSection';
import PlasticCrisisPreview from '@/components/sections/PlasticCrisisPreview';
import TrackerSection from '@/components/sections/TrackerSection';
import ImpactSection from '@/components/sections/ImpactSection';
import JoinSection from '@/components/sections/JoinSection';
import ShopSection from '@/components/sections/ShopSection';
import DonateSection from '@/components/sections/DonateSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <main>
        <HeroSection />
        <MissionSection />
        <RunnersSection />
        <FrameworkSection />
        <PlasticCrisisPreview />
        <TrackerSection />
        <ImpactSection />
        <JoinSection />
        <ShopSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;