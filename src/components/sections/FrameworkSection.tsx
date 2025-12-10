import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Feather, Users, Building2, Brain, TreePine } from 'lucide-react';

const frameworks = [
  {
    icon: Feather,
    title: 'Symbolic Act',
    description: 'Eighty marathons in eighty days — not for records or glory, but as a human-powered symbol of love, responsibility, and urgency — a message carried on foot to awaken a nation. This act of endurance reminds us that when individuals push their limits for the Earth, we too can change the habits that shape our shared future. A single symbolic step, repeated again and again, has the power to stir millions.',
  },
  {
    icon: Users,
    title: 'Empowering Youth',
    description: 'At every stop, we engage students in hands-on environmental education. Through habit-trackers, workshops, and peer-led initiatives, we equip the next generation with tools to become lifelong stewards of the planet.',
  },
  {
    icon: Building2,
    title: 'Activating Communities',
    description: 'Local volunteer groups join each marathon for community cleanups, tree plantings, and awareness drives. We catalyze grassroots action, turning passive observers into active participants in environmental change.',
  },
  {
    icon: Brain,
    title: 'Behavioural Science',
    description: 'Our approach is grounded in proven behaviour change methodologies. From nudges to habit formation frameworks, we design interventions that create lasting shifts in how communities interact with their environment.',
  },
  {
    icon: TreePine,
    title: 'Long-Term Legacy',
    description: 'Beyond the 80 days, we establish monitoring systems, ongoing curricula, and municipal partnerships. Every city we visit gains resources and relationships that continue driving impact for years to come.',
  },
];

const FrameworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="framework" className="py-24 bg-beige" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Five Pillars of Change
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive framework designed for lasting environmental transformation.
          </p>
        </motion.div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((framework, index) => (
            <motion.div
              key={framework.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6">
                <framework.icon className="w-7 h-7 text-sage" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {framework.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {framework.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
