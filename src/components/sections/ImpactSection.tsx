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
  },
  {
    icon: Home,
    value: '1,000+',
    label: 'Households Transformed',
    description: 'Families adopting sustainable practices',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Volunteer Groups',
    description: 'Community teams driving local change',
  },
  {
    icon: Trash2,
    value: '50+',
    label: 'Tons Plastic Removed',
    description: 'Waste collected and properly processed',
  },
  {
    icon: FileBarChart,
    value: '80',
    label: 'Municipal Reports',
    description: 'Data delivered to local governments',
  },
  {
    icon: Globe,
    value: '10M+',
    label: 'People Reached Online',
    description: 'Global awareness through digital media',
  },
];

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 bg-sage" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/20 text-primary-foreground text-sm font-medium rounded-full mb-4">
            Our Goals
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Intended Impact
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Measurable change across education, community action, and environmental restoration.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/15 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
