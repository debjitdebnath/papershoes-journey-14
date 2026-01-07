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
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-center">Papershoes is an environmental awareness campaign running 80 marathons in 80 consecutive days across India to raise awareness about plastic waste and pollution. Using the marathon as a symbol of endurance and long-term responsibility, the campaign delivers a clear message: protecting our planet is a marathon, not a sprint. As the journey moves through cities, coastlines, and communities, the ultimate aim of Papershoes is to turn miles into impact by combining action, education, and advocacy. ​<strong className="text-foreground">PaperShoes</strong> ​                 
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">​</p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">​​​<strong className="text-sage">symbolic action</strong>​
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