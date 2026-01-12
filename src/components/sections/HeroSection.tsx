import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background Video */}
      <div className="flex-1 relative">
        <video src={heroVideo} autoPlay muted loop playsInline className="w-full h-full object-cover" />
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;