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
    <section id="framework" className="py-16 md:py-20 bg-beige" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Our Framework
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif">
            Five Pillars of Change
          </h2>
          <p className="text-base max-w-xl mx-auto text-muted-foreground">
            How change actually happens — from emotion to institution.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-soft"
        >
          <ul className="grid gap-3 md:grid-cols-2">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="flex items-start gap-3 py-2">
                <span className={`${pillar.accentClass} text-lg mt-0.5 flex-shrink-0 leading-none w-4 text-center`}>
                  {pillar.symbol}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-medium text-muted-foreground tracking-wide">
                      {pillar.number}
                    </span>
                    <h3 className="text-base font-bold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className={`text-sm mt-0.5 ${pillar.accentClass}`}>{pillar.descriptor}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 pt-5 border-t border-border text-sm text-muted-foreground text-center leading-relaxed">
            <span className="font-semibold text-foreground">emotion</span> →{' '}
            <span className="font-semibold text-foreground">participation</span> →{' '}
            <span className="font-semibold text-foreground">accountability</span> →{' '}
            <span className="font-semibold text-foreground">habit</span> →{' '}
            <span className="font-semibold text-foreground">institution</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-center"
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
