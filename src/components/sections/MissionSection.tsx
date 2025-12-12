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
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-justify">No one would attempt a marathon in shoes made of paper — we instinctively know they would tear apart, offer no support, and leave us injured. 

We protect our feet with advanced materials because we understand their vulnerability. Yet when it comes to nature — equally delicate, equally finite — we behave as though it can endure anything. 

We extract, burn, pollute, discard, and assume it will somehow recover. We forget that what we damage is the very system that sustains us.

PaperShoes is not meant to be taken literally. It is a metaphor — a mirror held up to our choices. It asks a stark question: If we wouldn’t run on something as fragile as paper, why do we run our lives across a planet we refuse to safeguard?

Three foreign-born runners — long-time residents who proudly call India home — are setting out on a world-first challenge to bring this truth to the surface: 

80 marathons in 80 days across India. 80 invitations to pause. 

80 reminders that the health of our planet and the health of our lives are inseparable. 

Their endurance is not a pursuit of records. It is an offering — an act of devotion to the land they love. 

Their journey is a call to responsibility, to awareness, and to reawakening India’s sacred relationship with nature. 

PaperShoes symbolizes fragility, but it also symbolizes choice. Fragile things endure only when we protect them. Our ecosystems — rivers, forests, coasts, and wildlife — are under immense and increasing strain. 

This campaign is not about athletic triumph. It is about moral clarity. About three individuals willing to push their limits to show that what is fragile must be defended, that courage means stepping forward even when the path is uncertain, and that responsibility is a daily practice — not an abstract idea.<strong className="text-foreground">PaperShoes</strong> ​                 
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">​</p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">​​<strong className="text-sage">symbolic action</strong>​
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