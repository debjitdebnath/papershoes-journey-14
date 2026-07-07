import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlasticCrisisPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-14 md:py-16 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-95" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full mb-4">
            <BarChart3 className="w-3.5 h-3.5" /> Data Dashboard
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            The Plastic Crisis, Visualised
          </h2>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { value: '400M+', label: 'tonnes/yr' },
              { value: '9%', label: 'recycled' },
              { value: '11M', label: 'to oceans' },
              { value: '0', label: 'degrades' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3">
                <div className="text-lg md:text-2xl font-bold text-orange">{s.value}</div>
                <p className="text-[11px] text-white/60">{s.label}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/plastic-crisis-visualised" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-2">
              Explore the Data <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlasticCrisisPreview;
