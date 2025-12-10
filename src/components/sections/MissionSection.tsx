import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="mission" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 40
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.span initial={{
            opacity: 0
          }} animate={isInView ? {
            opacity: 1
          } : {
            opacity: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
              Our Purpose
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              The Mission: Fragility, Courage & Responsibility
            </h2>
          </div>

          {/* Mission Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">No one would ever attempt to run a marathon wearing shoes made of paper — we know instinctively that they would tear, collapse, and injure us.
We protect our feet with advanced materials, cushioning, and technology because we understand their fragility.

Yet when it comes to nature — which is just as delicate, just as vulnerable — we behave as though it can absorb endless pressure.
We extract, burn, pollute, discard, and move on… forgetting that what we harm is what sustains us.

PaperShoes is not a literal idea.
It is a metaphor — a mirror we hold up to ourselves.

It asks a simple, confronting question:
If we would never run on something as fragile as paper, why do we run our lives across a planet we refuse to protect?

Three foreign runners — long-time residents who call India home — are setting out on a world-first challenge to bring this truth to the forefront:

**80 marathons in 80 days across India.

80 opportunities to awaken awareness.
80 chances to remind us that we are inseparable from the nature we harm.**

Their endurance is an act of devotion.
Their journey is a call to responsibility.
Their mission is to help India rediscover the sacred connection between human life and the natural world.<strong className="text-foreground">PaperShoes</strong> is a metaphor. Paper is fragile. It tears easily, it falls apart in water, it cannot withstand force. And yet, three runners are attempting to run 80 marathons in 80 days — wearing that fragility as their symbol.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">Why? Because India's natural ecosystems are just as fragile. Our rivers, forests, coastlines, and wildlife are under immense pressure.</p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                This campaign isn't about athletic achievement. It's about <strong className="text-sage">symbolic action</strong>. It's about three people willing to push their bodies to the limit to show that fragility requires protection, that courage means moving even when the odds are stacked against you, and that responsibility is a choice we make every single day.
              </p>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-lg text-foreground font-medium italic text-center">"Nature is fragile.
We are a part of it.
And protecting it begins with changing ourselves.."</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default MissionSection;