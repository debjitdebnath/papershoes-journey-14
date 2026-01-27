import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import runnerMatteo from '@/assets/runner-matteo.jpg';
import runnerNagaraju from '@/assets/runner-nagaraju.jpg';
import runnerMichael from '@/assets/runner-michael.jpg';
interface Runner {
  id: string;
  name: string;
  firstName: string;
  country: string;
  age: number;
  image: string;
  quote: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    x?: string;
    email?: string;
    phone?: string;
  };
}
const runners: Runner[] = [{
  id: 'matteo',
  name: 'Matteo Aglioni',
  firstName: 'Matteo',
  country: 'Italy',
  age: 28,
  image: runnerMatteo,
  quote: 'I am running because some journeys must be felt, not explained.',
  socials: {
    instagram: '#',
    linkedin: '#',
    email: 'matteo@papershoes.org',
    phone: '#'
  }
}, {
  id: 'nagaraju',
  name: 'Nagaraju Vallala',
  firstName: 'Nagaraju',
  country: 'India',
  age: 35,
  image: runnerNagaraju,
  quote: 'Every step forward is a step toward change.',
  socials: {
    instagram: '#',
    linkedin: '#',
    email: 'nagaraju@papershoes.org',
    phone: '#'
  }
}, {
  id: 'michael',
  name: 'Michael Boag',
  firstName: 'Michael',
  country: 'Australia',
  age: 53,
  image: runnerMichael,
  quote: 'Age is just a number when you run for purpose.',
  socials: {
    instagram: '#',
    linkedin: '#',
    email: 'michael@papershoes.org',
    phone: '#'
  }
}];
const XIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;
interface RunnerCardProps {
  runner: Runner;
  index: number;
}
const RunnerCard = ({
  runner,
  index
}: RunnerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <motion.article initial={{
    opacity: 0,
    y: 40
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.6,
    delay: index * 0.15
  }} className="relative w-full max-w-[340px] h-[520px] rounded-lg overflow-hidden group cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} role="article" aria-label={`Profile of ${runner.name}, ${runner.age} years old from ${runner.country}`}>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img src={runner.image} alt={`Portrait of ${runner.name}`} className="w-full h-full object-cover object-top filter grayscale-[30%] transition-all duration-500" animate={{
        scale: isHovered ? 1.03 : 1
      }} transition={{
        duration: 0.5
      }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Top Label */}
      <div className="absolute top-4 left-4 z-10">
        <p className="text-xs font-light tracking-widest uppercase text-center text-secondary">
          {runner.country}
        </p>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {/* Name & Age */}
        <div className="mb-4">
          <h3 className="font-serif text-3xl text-cream mb-1">{runner.firstName}</h3>
          <p className="text-cream/60 text-sm tracking-wide">
            {runner.age} · {runner.country}
          </p>
        </div>

        {/* Quote */}
        <motion.p className="text-cream/70 text-sm italic leading-relaxed mb-6 transition-opacity duration-300" animate={{
        opacity: isHovered ? 1 : 0.7
      }}>
          "{runner.quote}"
        </motion.p>

        {/* Social Icons */}
        <motion.div className="flex items-center gap-4" initial={{
        opacity: 0
      }} animate={{
        opacity: isHovered ? 1 : 0
      }} transition={{
        duration: 0.3
      }}
      // Always visible on touch devices
      style={{
        opacity: 'var(--social-opacity, 0)'
      }}>
          {runner.socials.instagram && <a href={runner.socials.instagram} className="text-cream/60 hover:text-terracotta transition-colors duration-200 p-2 -m-2" aria-label={`${runner.name}'s Instagram`} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
            </a>}
          <a href="#" className="text-cream/60 hover:text-terracotta transition-colors duration-200 p-2 -m-2" aria-label={`${runner.name}'s X (Twitter)`} target="_blank" rel="noopener noreferrer">
            <XIcon />
          </a>
          {runner.socials.linkedin && <a href={runner.socials.linkedin} className="text-cream/60 hover:text-terracotta transition-colors duration-200 p-2 -m-2" aria-label={`${runner.name}'s LinkedIn`} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>}
          {runner.socials.email && <a href={`mailto:${runner.socials.email}`} className="text-cream/60 hover:text-terracotta transition-colors duration-200 p-2 -m-2" aria-label={`Email ${runner.name}`}>
              <Mail className="w-5 h-5" />
            </a>}
          {runner.socials.phone && <a href={`tel:${runner.socials.phone}`} className="text-cream/60 hover:text-terracotta transition-colors duration-200 p-2 -m-2" aria-label={`Call ${runner.name}`}>
              <Phone className="w-5 h-5" />
            </a>}
        </motion.div>
      </div>

      {/* Hover lift effect */}
      <style>{`
        @media (hover: none) {
          .group { --social-opacity: 1 !important; }
        }
        @media (hover: hover) {
          .group:hover { --social-opacity: 1; }
        }
      `}</style>
    </motion.article>;
};
const RunnersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return <section className="bg-earth-900 py-20 md:py-28 overflow-hidden" id="runners">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="font-serif md:text-5xl lg:text-6xl mb-4 text-popover-foreground text-6xl">3 Runners</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-950 text-center">80 marathons. One Mission.</p>
        </motion.div>

        {/* Desktop Layout - Three Cards */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
          {runners.map((runner, index) => <motion.div key={runner.id} whileHover={{
          y: -8
        }} transition={{
          duration: 0.3
        }}>
              <RunnerCard runner={runner} index={index} />
            </motion.div>)}
        </div>

        {/* Mobile Layout - Swipeable Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide">
            {runners.map((runner, index) => <div key={runner.id} className="snap-center flex-shrink-0 w-[85%] max-w-[340px]" onTouchStart={() => setActiveIndex(index)}>
                <RunnerCard runner={runner} index={index} />
              </div>)}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {runners.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-terracotta w-6' : 'bg-cream/30'}`} onClick={() => setActiveIndex(index)} aria-label={`Go to runner ${index + 1}`} />)}
          </div>
        </div>
      </div>

      {/* Hide scrollbar for mobile carousel */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>;
};
export default RunnersSection;