import { Play, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const YOUTUBE_URL = 'https://youtu.be/7zzznw3fGyA?si=CQtJtK0Rhq7T6ZX6';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 bg-black text-white overflow-hidden">

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-12 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-sans font-black uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-white">80 Marathons.</span>
            <span className="block text-white">80 Days.</span>
            <span className="block text-[hsl(85,75%,55%)]">Across India.</span>
          </h1>

          <div className="inline-block mt-6 px-5 py-2 bg-[hsl(85,55%,35%)]/80 border border-[hsl(85,75%,55%)]/40">
            <p className="font-sans font-bold uppercase tracking-wide text-white text-lg md:text-xl">
              One Incredible Mission.
            </p>
          </div>

          <p className="mt-6 text-base md:text-lg text-white/90 max-w-md leading-relaxed">
            Three men. One mission. 80 marathons. Running across India to bring hope, opportunity, and change.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-[hsl(85,70%,50%)] hover:bg-[hsl(85,70%,45%)] text-black font-bold uppercase tracking-wide rounded-full px-8"
            >
              <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                <Heart size={18} />
                Donate
              </a>
            </Button>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-colors shadow-lg"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/40">
                <Play size={16} className="text-white fill-white ml-0.5" />
              </span>
              <span className="font-bold uppercase tracking-wide text-white text-sm md:text-base">
                Watch the Story
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
