import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, School, Building2, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pathways = [
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join cleanup drives, support marathon days, and become part of the movement in your city.',
    cta: 'Become a Volunteer',
    href: 'https://forms.gle/oKeAr6ybVt5cnTpA6',
  },
  {
    icon: School,
    title: 'Host a School Workshop',
    description: 'Bring our environmental education program to your school. We provide all materials and facilitators.',
    cta: 'Invite Us to Your School',
    href: 'https://forms.gle/aE5DMEJQEuu3WDyV7',
  },
  {
    icon: Building2,
    title: 'Corporate Partnership',
    description: 'Align your CSR initiatives with tangible impact. Sponsor marathons, fund programs, or engage employees.',
    cta: 'Partner with Us',
    href: 'https://forms.gle/f6j91sSbvW1BA8xz7',
  },
  {
    icon: Newspaper,
    title: 'Media & Press',
    description: 'Cover this world-first attempt. Access press kits, arrange interviews, and share the story.',
    cta: 'Get Press Kit',
    href: 'https://forms.gle/VHMjY9gtTTztiHqx7',
  },
];

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Join the Movement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There's a role for everyone in this mission. Find your path to impact.
          </p>
        </motion.div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-primary-foreground transition-colors duration-300">
                <pathway.icon className="w-7 h-7 text-sage group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {pathway.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {pathway.description}
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={pathway.href} target="_blank" rel="noopener noreferrer">
                  {pathway.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
