import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Route as RouteIcon, Flag, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const hooks = [
  {
    icon: Flag,
    title: '80 Marathons',
    line: 'One every day, across two stages.',
    accent: 'bg-sage-light text-sage-dark',
  },
  {
    icon: MapPin,
    title: '32 Stops',
    line: 'From Sabarmati to the Arabian Sea.',
    accent: 'bg-terracotta/10 text-terracotta',
  },
  {
    icon: RouteIcon,
    title: 'Coast • River • Hill',
    line: 'Every plastic reality, on foot.',
    accent: 'bg-beige text-foreground',
  },
  {
    icon: Calendar,
    title: 'Oct 1 → Dec 20',
    line: 'Ahmedabad start. Mumbai finish.',
    accent: 'bg-sage-light text-sage-dark',
  },
];

const TrackerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tracker" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Follow the Run
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Every City. Every Step. Mapped.
          </h2>
          <p className="text-lg text-muted-foreground">
            The full 80-marathon route — coastlines, river towns, hill stations and metros —
            laid out city by city.
          </p>
        </motion.div>

        {/* Hook cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-10">
          {hooks.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-sage/60 hover:-translate-y-1 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl ${h.accent} flex items-center justify-center mb-4`}>
                <h.icon className="w-5 h-5" />
              </div>
              <div className="text-lg font-bold text-foreground leading-tight">{h.title}</div>
              <p className="text-sm text-muted-foreground mt-1">{h.line}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-sage to-sage-dark rounded-3xl p-8 md:p-12 text-center shadow-card relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-cream blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-terracotta blur-3xl" />
          </div>
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3">
              See the full journey before it begins.
            </h3>
            <p className="text-primary-foreground/85 max-w-xl mx-auto mb-7">
              Dates, zones, routes and marathon counts for all 32 stops — laid out as an interactive timeline.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/route-plan" onClick={() => window.scrollTo(0, 0)}>
                View Final Route Plan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackerSection;
