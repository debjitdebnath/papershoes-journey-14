import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    number: '01',
    title: 'Symbolic Action',
    descriptor: 'Turning endurance into awakening.',
    symbol: '●',
    accentClass: 'text-sage',
  },
  {
    number: '02',
    title: 'Community Activation',
    descriptor: 'Turning witnesses into participants.',
    symbol: '▪',
    accentClass: 'text-terracotta',
  },
  {
    number: '03',
    title: 'Data & Accountability',
    descriptor: 'Turning visibility into pressure.',
    symbol: '▲',
    accentClass: 'text-brown',
  },
  {
    number: '04',
    title: 'Youth Education',
    descriptor: 'Turning awareness into lasting habits.',
    symbol: '◆',
    accentClass: 'text-orange',
  },
  {
    number: '05',
    title: 'Legacy & Systems Change',
    descriptor: 'Turning momentum into permanence.',
    symbol: '◉',
    accentClass: 'text-sage-dark',
  },
];

const FrameworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="framework" className="py-24 bg-beige" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Our Framework
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Five Pillars of Change
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            A systems framework for how change actually happens—from emotion to institution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-soft"
        >
          <ul className="divide-y divide-border">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 md:gap-6"
              >
                <span
                  className={`${pillar.accentClass} text-lg mt-1 flex-shrink-0 leading-none w-4 text-center`}
                >
                  {pillar.symbol}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                    <span className="text-xs font-medium text-muted-foreground tracking-wide">
                      PILLAR {pillar.number}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className={`text-sm md:text-base font-medium mt-1 ${pillar.accentClass}`}>
                    {pillar.descriptor}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 pt-6 border-t border-border text-sm md:text-base text-muted-foreground text-center leading-relaxed">
            A self-reinforcing loop:{' '}
            <span className="font-semibold text-foreground">emotion</span> →{' '}
            <span className="font-semibold text-foreground">participation</span> →{' '}
            <span className="font-semibold text-foreground">accountability</span> →{' '}
            <span className="font-semibold text-foreground">habit</span> →{' '}
            <span className="font-semibold text-foreground">institution</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button asChild size="lg">
            <Link to="/five-pillars">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworkSection;
