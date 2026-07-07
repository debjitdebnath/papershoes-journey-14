import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import campaignRouteMap from '@/assets/campaign-route-map-v2.jpg.asset.json';

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="mission" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark rounded-full mb-5 font-semibold text-sm tracking-wide">
            The Mission
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            Combine long-distance running with environmental action against plastic pollution.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            80 marathons in 80 days across India — turning endurance into action through school visits, community runs, and clean-ups.
          </p>

          <div className="relative mx-auto max-w-2xl mb-10">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sage/30 via-terracotta/20 to-earth/30 blur-sm" />
            <figure className="relative overflow-hidden rounded-2xl border-4 border-cream bg-cream shadow-xl">
              <img
                src={campaignRouteMap.url}
                alt="Paper Shoes 80 campaign route across India — 80 marathons through mountains, coastlines, and cities"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-center text-xs md:text-sm text-muted-foreground font-medium bg-cream">
                The 80-day route across India
              </figcaption>
            </figure>
          </div>

          <p className="font-serif italic text-xl md:text-2xl text-foreground/90 mb-8">
            "We run not to escape the world but to stay connected to it."
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                <Heart size={18} /> Donate
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#framework">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
