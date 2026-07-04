import { motion } from 'framer-motion';
import matteo2 from '@/assets/matteo-2.jpg.asset.json';
import nagaraju1 from '@/assets/nagaraju-1.jpg.asset.json';
import michael1 from '@/assets/michael-1.jpg.asset.json';

interface Runner {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  image: string;
  alt: string;
}

const runners: Runner[] = [
  {
    id: 'nagaraju',
    name: 'Nagaraju Vallala',
    age: 35,
    location: 'Warangal, India',
    bio: 'Adventure guide in the Himalayas. Runs to educate children on plastic pollution and inspire resilience.',
    image: nagaraju1.url,
    alt: 'Nagaraju holding a crumpled plastic bottle',
  },
  {
    id: 'matteo',
    name: 'Matteo Aglioni',
    age: 28,
    location: 'Como, Italy',
    bio: 'Personal trainer and climber. Runs to protect Mother Nature and raise awareness of plastic\'s health impact.',
    image: matteo2.url,
    alt: 'Matteo holding a plastic bottle in the Italian mountains',
  },
  {
    id: 'michael',
    name: 'Michael Boag',
    age: 53,
    location: 'Byron Bay, Australia',
    bio: 'Sustainability consultant and mentor. Initiator of Papershoes, running in memory of two lost friends.',
    image: michael1.url,
    alt: 'Michael in a Papershoes shirt near Byron Bay',
  },
];

const RunnersSection = () => {
  return (
    <section id="runners" className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Meet the Runners
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            Three runners. 80 marathons. One mission.
          </h2>
        </motion.div>


        <div className="grid gap-10 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {runners.map((runner, i) => (
            <motion.article
              key={runner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-5">
                <img
                  src={runner.image}
                  alt={runner.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
                {runner.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Age {runner.age} · {runner.location}
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                {runner.bio}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RunnersSection;
