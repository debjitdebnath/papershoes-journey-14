import { Play, Heart, Footprints, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroLandscape from '@/assets/hero-team-landscape.png.asset.json';
import heroPortrait from '@/assets/hero-team-portrait.png.asset.json';

const YOUTUBE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 bg-black text-white overflow-hidden">
      {/* Background image */}
      <picture>
        <source media="(max-width: 768px)" srcSet={heroPortrait.url} />
        <img
          src={heroLandscape.url}
          alt="Three Papershoes runners standing together at sunset across India"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* Overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 md:bg-none" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-12 md:pt-20 pb-40 md:pb-32">
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
                Support the Mission
              </a>
            </Button>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/80 group-hover:bg-white/10 transition-colors">
                <Play size={20} className="text-white fill-white ml-0.5" />
              </span>
              <span className="font-bold uppercase tracking-wide text-white text-sm md:text-base">
                Watch the Story
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-6 left-4 right-4 md:left-6 md:right-6">
        <div className="container mx-auto">
          <div className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-2xl px-4 md:px-8 py-4 md:py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
            <Stat icon={<Footprints className="text-[hsl(85,75%,55%)]" size={28} />} value="80" label="Marathons" />
            <Stat icon={<Calendar className="text-[hsl(85,75%,55%)]" size={28} />} value="80" label="Days" />
            <Stat icon={<MapPin className="text-[hsl(85,75%,55%)]" size={28} />} value="Across" label="India" />
            <Stat icon={<Heart className="text-[hsl(85,75%,55%)]" size={28} />} value="Countless" label="Lives Impacted" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="shrink-0">{icon}</div>
    <div className="leading-tight">
      <div className="font-black text-white text-xl md:text-2xl uppercase">{value}</div>
      <div className="text-white/70 text-xs md:text-sm uppercase tracking-wide">{label}</div>
    </div>
  </div>
);

export default HeroSection;
