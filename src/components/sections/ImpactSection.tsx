import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Home, Users, Trash2, FileBarChart, Globe } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: '100,000+',
    label: 'Students Reached',
    description: 'Youth engaged in environmental education',
    color: 'sage',
  },
  {
    icon: Home,
    value: '1,000+',
    label: 'Households Transformed',
    description: 'Families adopting sustainable practices',
    color: 'terracotta',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Volunteer Groups',
    description: 'Community teams driving local change',
    color: 'brown',
  },
  {
    icon: Trash2,
    value: '50+',
    label: 'Tons Plastic Removed',
    description: 'Waste collected and properly processed',
    color: 'orange',
  },
  {
    icon: FileBarChart,
    value: '80',
    label: 'Municipal Reports',
    description: 'Data delivered to local governments',
    color: 'sage',
  },
  {
    icon: Globe,
    value: '10M+',
    label: 'People Reached Online',
    description: 'Global awareness through digital media',
    color: 'terracotta',
  },
];

const colorStyles = {
  sage: {
    bg: 'bg-sage-light',
    icon: 'bg-sage/10 text-sage-dark',
    accent: 'text-sage-dark',
    border: 'border-sage/20',
  },
  terracotta: {
    bg: 'bg-terracotta-light',
    icon: 'bg-terracotta/10 text-terracotta',
    accent: 'text-terracotta',
    border: 'border-terracotta/20',
  },
  brown: {
    bg: 'bg-beige-warm',
    icon: 'bg-brown/10 text-brown',
    accent: 'text-brown',
    border: 'border-brown/20',
  },
  orange: {
    bg: 'bg-orange-light',
    icon: 'bg-orange/10 text-orange',
    accent: 'text-orange',
    border: 'border-orange/20',
  },
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light text-sage-dark text-sm font-semibold rounded-full mb-6 border border-sage/20">
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
            Our Goals
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Intended <span className="text-sage-dark">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Measurable change across education, community action, and environmental restoration.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const styles = colorStyles[stat.color as keyof typeof colorStyles];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-card rounded-2xl p-8 border ${styles.border} hover:shadow-card transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-8 right-8 h-1 ${styles.bg} rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                <div className={`w-14 h-14 ${styles.icon} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <stat.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                
                <div className={`text-5xl font-bold ${styles.accent} mb-2 tracking-tight`}>
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Every step counts. <a href="#donate" className="text-sage-dark font-semibold hover:underline underline-offset-4">Join the movement →</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
