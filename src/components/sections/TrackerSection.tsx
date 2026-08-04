import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Route as RouteIcon, Flag, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const hooks = [
  { icon: Flag, title: '80 Marathons', line: 'One a day, for 80 days.', accent: 'bg-sage-light text-sage-dark' },
  { icon: MapPin, title: '12 Cities', line: 'Ahmedabad → Mumbai.', accent: 'bg-terracotta/10 text-terracotta' },
  { icon: RouteIcon, title: 'Source to Sea', line: 'Rivers, cities, coastline.', accent: 'bg-beige text-foreground' },
  { icon: Calendar, title: '3,376 km', line: 'Oct 1 → Dec 19, 8+ states.', accent: 'bg-sage-light text-sage-dark' },
];

const TrackerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tracker" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-3">
            Follow the Run
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            From Source to Sea.
          </h2>
          <p className="text-muted-foreground mt-3">
            Following plastic on its own journey — from inland cities, down India&apos;s rivers, to the coastline.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto mb-8">
          {hooks.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="bg-card rounded-2xl p-5 shadow-card border border-border/50"
            >
              <div className={`w-10 h-10 rounded-xl ${h.accent} flex items-center justify-center mb-3`}>
                <h.icon className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-foreground leading-tight">{h.title}</div>
              <p className="text-xs text-muted-foreground mt-1">{h.line}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/route-plan" onClick={() => window.scrollTo(0, 0)}>
              View Full Route Plan <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrackerSection;
