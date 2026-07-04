import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, School, Building2, Newspaper } from 'lucide-react';

const pathways = [
  { icon: Users, title: 'Volunteer', desc: 'Cleanup drives & marathon days.', href: 'https://forms.gle/oKeAr6ybVt5cnTpA6' },
  { icon: School, title: 'Schools', desc: 'Host our education workshop.', href: 'https://forms.gle/aE5DMEJQEuu3WDyV7' },
  { icon: Building2, title: 'Corporate', desc: 'CSR partnerships & sponsorship.', href: 'https://forms.gle/f6j91sSbvW1BA8xz7' },
  { icon: Newspaper, title: 'Media', desc: 'Press kits & interviews.', href: 'https://forms.gle/VHMjY9gtTTztiHqx7' },
];

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="join" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-3">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Join the Movement
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {pathways.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card rounded-2xl p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 bg-sage-light rounded-xl flex items-center justify-center mb-3 group-hover:bg-sage transition-colors">
                <p.icon className="w-5 h-5 text-sage group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
