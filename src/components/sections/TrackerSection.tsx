import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Route as RouteIcon, Flag, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const hooks = [
  { icon: Flag, title: '80 Marathons', line: 'One a day.', accent: 'bg-sage-light text-sage-dark' },
  { icon: MapPin, title: '32 Stops', line: 'Sabarmati → Arabian Sea.', accent: 'bg-terracotta/10 text-terracotta' },
  { icon: RouteIcon, title: 'Coast·River·Hill', line: 'Every plastic reality.', accent: 'bg-beige text-foreground' },
  { icon: Calendar, title: 'Oct 1 → Dec 20', line: 'Ahmedabad → Mumbai.', accent: 'bg-sage-light text-sage-dark' },
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
            Every City. Every Step. Mapped.
          </h2>
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
