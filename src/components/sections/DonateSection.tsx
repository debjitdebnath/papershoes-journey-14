import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DonateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="donate" className="py-16 md:py-20 bg-beige" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-elevated text-center"
        >
          <div className="w-14 h-14 bg-sage-light rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Heart className="w-7 h-7 text-sage" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Your Support Makes This Possible
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-6">
            Every contribution funds education, safety gear, and community action.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                <Heart className="w-5 h-5" /> Donate Now
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" /> Sponsor a Day
              </a>
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Tax-deductible under Section 80G.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
