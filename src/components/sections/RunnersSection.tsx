import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import matteo1 from '@/assets/matteo-1.png.asset.json';
import matteo2 from '@/assets/matteo-2.jpg.asset.json';
import nagaraju1 from '@/assets/nagaraju-1.jpg.asset.json';
import michael1 from '@/assets/michael-1.jpg.asset.json';
import michael2 from '@/assets/michael-2.jpg.asset.json';
import michael3 from '@/assets/michael-3.jpg.asset.json';

interface Runner {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  images: { src: string; alt: string }[];
}

const runners: Runner[] = [
  {
    id: 'nagaraju',
    name: 'Nagaraju Vallala',
    age: 35,
    location: 'Warangal, Telangana, India',
    bio: 'Nagaraju is an adventure tour guide in the Himalayas with a deep passion for nature, wellness, and community. He joins the Papershoes 80 Marathons in 80 Days – Plastic Free Challenge to help educate children about plastic pollution while promoting health, resilience, and a better future for the next generation.',
    images: [
      { src: nagaraju1.url, alt: 'Nagaraju holding a crumpled plastic bottle' },
    ],
  },
  {
    id: 'matteo',
    name: 'Matteo Aglioni',
    age: 28,
    location: 'Como, Italy',
    bio: 'Matteo is a personal trainer, avid hiker, rock climber, and passionate nature lover. Inspired by the beauty of the natural world and a love for adventure, he is joining the Papershoes challenge to help protect Mother Nature, promote fitness, and raise awareness about the growing health impacts of plastic pollution.',
    images: [
      { src: matteo1.url, alt: 'Matteo holding a plastic bottle in front of Italian mountains' },
      { src: matteo2.url, alt: 'Matteo at a trail race start line' },
    ],
  },
  {
    id: 'michael',
    name: 'Michael Boag',
    age: 53,
    location: 'Byron Bay, Australia',
    bio: 'Michael is a sustainability consultant and men\'s mental health mentor. He initiated the Papershoes campaign to promote sustainable living, inspire environmental responsibility, and honour the memory of his two best friends who are no longer here.',
    images: [
      { src: michael1.url, alt: 'Michael wearing a Papershoes shirt in a field near Byron Bay' },
      { src: michael2.url, alt: 'Michael smiling with a glass bottle at sunset in the Australian countryside' },
      { src: michael3.url, alt: 'Michael holding up a discarded plastic bag against the sky' },
    ],
  },
];

const RunnerCarousel = ({ images, name }: { images: Runner['images']; name: string }) => {
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(images.length - 1, i));
    setIndex(clamped);
    const el = scrollerRef.current;
    const child = el?.children[clamped] as HTMLElement | undefined;
    if (el && child) {
      el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = el.scrollWidth / images.length;
      const i = Math.round(el.scrollLeft / w);
      setIndex(Math.max(0, Math.min(images.length - 1, i)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [images.length]);

  return (
    <div className="relative group">
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl md:rounded-3xl bg-earth-900/5 scrollbar-hide aspect-[4/5] md:aspect-[16/10]"
      >
        {images.map((img, i) => (
          <div key={i} className="snap-center flex-shrink-0 w-full h-full">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Desktop arrows */}
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label={`Previous photo of ${name}`}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-cream/90 text-earth-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hover:bg-cream"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === images.length - 1}
            aria-label={`Next photo of ${name}`}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-cream/90 text-earth-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 hover:bg-cream"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-cream' : 'w-1.5 bg-cream/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const RunnerProfile = ({ runner, index }: { runner: Runner; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-3xl mx-auto"
      aria-labelledby={`runner-${runner.id}-name`}
    >
      <RunnerCarousel images={runner.images} name={runner.name} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="mt-8 md:mt-10"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Runner 0{index + 1}
        </p>
        <h3
          id={`runner-${runner.id}-name`}
          className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-3"
        >
          {runner.name}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground mb-6">
          Age {runner.age} · {runner.location}
        </p>
        <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl">
          {runner.bio}
        </p>
      </motion.div>
    </motion.article>
  );
};

const RunnersSection = () => {
  return (
    <section id="runners" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20 md:mb-28"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">
            Meet the Runners
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight">
            Three runners. 80 marathons. One mission.
          </h2>
        </motion.div>

        {/* Vertical stack of runner profiles */}
        <div className="space-y-24 md:space-y-40">
          {runners.map((runner, i) => (
            <RunnerProfile key={runner.id} runner={runner} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default RunnersSection;
