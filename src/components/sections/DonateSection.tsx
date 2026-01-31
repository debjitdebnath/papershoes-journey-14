import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DonateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="donate" className="py-24 bg-beige" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-sage-light rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-sage" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Support Makes This Possible
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Every contribution funds education, safety equipment, logistics, and community action. 
                Whether it's providing water stations for runners, materials for school workshops, or 
                cleanup kits for volunteers — your donation directly enables this movement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-5 h-5" />
                    Donate Now
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5" />
                    Sponsor a Marathon Day
                  </a>
                </Button>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                All donations are tax-deductible under Section 80G. 
                <br className="hidden sm:block" />
                Receive detailed impact reports on how your contribution was used.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonateSection;
