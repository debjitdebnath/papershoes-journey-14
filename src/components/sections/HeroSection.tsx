import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-globe.jpg';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hand holding globe reaching toward another hand" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-10 text-sage/20" animate={{
        y: [0, -20, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <Leaf size={120} />
        </motion.div>
        <motion.div className="absolute bottom-32 right-16 text-sage/15" animate={{
        y: [0, 15, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}>
          <Leaf size={80} />
        </motion.div>
        <motion.div className="absolute top-1/3 right-1/4 text-brown/10" animate={{
        y: [0, -10, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}>
          <Leaf size={60} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          

          {/* Main Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            <span className="block">80 Marathons</span>
            <span className="block text-sage">80 Days</span>
            <span className="block">3 Runners</span>
            <span className="block text-brown">One Mission</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">



A world-first movement to protect India's fragile natural future.</motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#donate">
                <Heart size={18} />
                Donate Now
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-background" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;