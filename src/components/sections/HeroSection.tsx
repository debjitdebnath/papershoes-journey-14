import { useRef } from 'react';
import { Play, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroLandscape from '@/assets/hero-team-landscape.png.asset.json';
import heroPortrait from '@/assets/hero-team-portrait.png.asset.json';

const YOUTUBE_URL = 'https://youtu.be/7zzznw3fGyA?si=CQtJtK0Rhq7T6ZX6';

const RevealText = ({
  children,
  className,
  scrollStart = 0,
  scrollEnd = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  scrollStart?: number;
  scrollEnd?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={sectionRef} className="relative min-h-screen pt-20 bg-black text-white overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[115%]">
          <picture className="block w-full h-full">
            <source media="(max-width: 768px)" srcSet={heroPortrait.url} />
            <img
              src={heroLandscape.url}
              alt="Three Papershoes runners standing together at sunset across India"
              className="w-full h-full object-cover object-top md:object-center"
            />
          </picture>
        </motion.div>
      </div>

      {/* Overlays for text legibility */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 md:bg-none" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-12 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-sans font-black uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <RevealText className="block">
              <span className="block text-white">80 Marathons.</span>
            </RevealText>
            <RevealText className="block">
              <span className="block text-white">80 Days.</span>
            </RevealText>
            <RevealText className="block">
              <span className="block text-[hsl(85,75%,55%)]">Across India.</span>
            </RevealText>
          </h1>

          <RevealText>
            <div className="inline-block mt-6 px-5 py-2 bg-[hsl(85,55%,35%)]/80 border border-[hsl(85,75%,55%)]/40">
              <p className="font-sans font-bold uppercase tracking-wide text-white text-lg md:text-xl">
                One Incredible Mission.
              </p>
            </div>
          </RevealText>

          <RevealText>
            <p className="mt-6 text-base md:text-lg text-white/90 max-w-md leading-relaxed">
              Three men. One mission. 80 marathons. Running across India to bring hope, opportunity, and change.
            </p>
          </RevealText>

          <RevealText>
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
          </RevealText>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
