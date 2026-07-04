import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Home, Users, Trash2, FileBarChart, Globe } from 'lucide-react';

const stats = [
  { icon: GraduationCap, value: '100K+', label: 'Students Reached', color: 'sage' },
  { icon: Home, value: '1K+', label: 'Households Transformed', color: 'terracotta' },
  { icon: Users, value: '500+', label: 'Volunteer Groups', color: 'brown' },
  { icon: Trash2, value: '50+ t', label: 'Plastic Removed', color: 'orange' },
  { icon: FileBarChart, value: '80', label: 'Municipal Reports', color: 'sage' },
  { icon: Globe, value: '10M+', label: 'Reached Online', color: 'terracotta' },
];

const colorStyles: Record<string, { icon: string; accent: string; border: string }> = {
  sage: { icon: 'bg-sage/10 text-sage-dark', accent: 'text-sage-dark', border: 'border-sage/20' },
  terracotta: { icon: 'bg-terracotta/10 text-terracotta', accent: 'text-terracotta', border: 'border-terracotta/20' },
  brown: { icon: 'bg-brown/10 text-brown', accent: 'text-brown', border: 'border-brown/20' },
  orange: { icon: 'bg-orange/10 text-orange', accent: 'text-orange', border: 'border-orange/20' },
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-3">
            Our Goals
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Intended <span className="text-sage-dark">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {stats.map((s, i) => {
            const st = colorStyles[s.color];
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`bg-card rounded-2xl p-5 border ${st.border}`}
              >
                <div className={`w-10 h-10 ${st.icon} rounded-xl flex items-center justify-center mb-3`}>
                  <s.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div className={`text-2xl md:text-3xl font-bold ${st.accent} leading-tight`}>{s.value}</div>
                <div className="text-sm text-foreground mt-1">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
