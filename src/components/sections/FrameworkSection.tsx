import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Symbolic Action',
    descriptor: 'Turning Endurance into Awakening',
    symbol: '●',
    accentClass: 'text-sage',
    bullets: [
      'Use human limits to signal urgency rather than comfort',
      'Replace spectacle with purpose by centering responsibility over achievement',
      'Carry the message physically through streets, villages, and cities—not just online',
      'Transform repetition into resonance through consistent daily action',
      'Model the behavioural change we seek from society',
      'Create a shared emotional reference point that anchors the movement',
      'Trigger reflection before instruction, opening minds to deeper change',
    ],
  },
  {
    number: '02',
    title: 'Community Activation',
    descriptor: 'Turning Witnesses into Participants',
    symbol: '▪',
    accentClass: 'text-terracotta',
    bullets: [
      'Activate communities at each stop through clean-ups, conversations, and shared action',
      'Engage local youth as co-owners of the mission, not passive audiences',
      'Partner with schools, colleges, and local groups to anchor action locally',
      'Convert momentary inspiration into hands-on participation',
      'Create micro-leaders who continue the work after the runners leave',
      'Build local pride by demonstrating immediate, visible impact',
      'Shift the narrative from "someone else\'s problem" to "our shared responsibility"',
    ],
  },
  {
    number: '03',
    title: 'Data & Accountability',
    descriptor: 'Turning Visibility into Pressure',
    symbol: '▲',
    accentClass: 'text-brown',
    bullets: [
      'Identify and document plastic waste hotspots along the route',
      'Collect real-world data that reflects lived environmental conditions',
      'Make waste visible through public dashboards and storytelling',
      'Use transparency to create civic pressure rather than confrontation',
      'Encourage municipal response through visibility, not blame',
      'Establish a record of action taken—and inaction exposed',
      'Turn anecdotal concern into evidence-based accountability',
    ],
  },
  {
    number: '04',
    title: 'Youth Education & Behavioural Shift',
    descriptor: 'Turning Awareness into Lasting Habits',
    symbol: '◆',
    accentClass: 'text-orange',
    bullets: [
      'Engage young people where habits are still forming',
      'Replace abstract environmental concepts with lived experiences',
      'Use role models and real journeys to inspire behavioural reflection',
      'Reinforce cleanliness as cultural pride, not enforced obligation',
      'Encourage small, repeatable actions that compound over time',
      'Foster critical thinking around consumption, waste, and responsibility',
      'Equip youth to influence families, peers, and communities',
    ],
  },
  {
    number: '05',
    title: 'Legacy & Systems Change',
    descriptor: 'Turning Momentum into Permanence',
    symbol: '◉',
    accentClass: 'text-sage-dark',
    bullets: [
      'Extend the movement beyond the run through annual activations',
      'Formalise volunteer networks into long-term community structures',
      'Translate field insights into policy recommendations',
      'Align with municipal, educational, and CSR ecosystems',
      'Support scalable tools like waste mapping and reporting systems',
      'Create leadership pathways for future environmental stewards',
      'Ensure the campaign evolves from an event into a lasting institution',
    ],
  },
];

const connectiveLogic = [
  { pillar: 'Symbolic Action', effect: 'opens hearts' },
  { pillar: 'Community Activation', effect: 'mobilises people' },
  { pillar: 'Data & Accountability', effect: 'drives systems to respond' },
  { pillar: 'Youth Education', effect: 'ensures cultural continuity' },
  { pillar: 'Legacy Systems', effect: 'lock in long-term change' },
];

const FrameworkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section id="framework" className="py-24 bg-beige" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Our Framework
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Five Pillars of Change
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            A systems framework for how change actually happens—from emotion to institution.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-soft"
            >
              {/* Pillar Header */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm font-medium text-muted-foreground tracking-wide">
                    PILLAR {pillar.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className={`text-lg font-medium ${pillar.accentClass}`}>
                  {pillar.descriptor}
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {pillar.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-3">
                    <span className={`${pillar.accentClass} text-sm mt-1.5 flex-shrink-0 leading-none`}>
                      {pillar.symbol}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Connective Logic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
            How the Pillars Work Together
          </h3>

          <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-10">
            {connectiveLogic.map((item, index) => (
              <div key={item.pillar} className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{item.pillar}</span>
                <span className="text-muted-foreground">{item.effect}</span>
                {index < connectiveLogic.length - 1 && (
                  <span className="text-muted-foreground/50 mx-1">→</span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Together, these pillars form a self-reinforcing loop that moves from{' '}
            <span className="font-semibold text-foreground">emotion</span> →{' '}
            <span className="font-semibold text-foreground">participation</span> →{' '}
            <span className="font-semibold text-foreground">accountability</span> →{' '}
            <span className="font-semibold text-foreground">habit</span> →{' '}
            <span className="font-semibold text-foreground">institution</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworkSection;
