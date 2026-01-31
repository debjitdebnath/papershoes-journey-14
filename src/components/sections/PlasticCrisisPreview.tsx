import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlasticCrisisPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-earth text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-earth via-brown to-earth opacity-90" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-6">
            <BarChart3 className="w-4 h-4" />
            Data Dashboard
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Plastic Crisis, Visualised
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            400+ million tonnes produced yearly. Only 9% recycled. Explore the data that reveals why systemic change matters.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: '400M+', label: 'tonnes/year' },
              { value: '9%', label: 'recycled' },
              { value: '11M', label: 'to oceans' },
              { value: '0', label: 'degradation' },
            ].map((stat) => (
              <div key={stat.label} className="bg-primary-foreground/10 rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/plastic-crisis-visualised" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlasticCrisisPreview;
