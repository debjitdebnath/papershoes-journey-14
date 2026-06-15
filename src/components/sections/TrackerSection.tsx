import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Users, Trash2, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const TrackerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  // Sample data - would be dynamic in production
  const todayData = {
    date: 'Day 23 • December 9, 2025',
    city: 'Pune, Maharashtra',
    school: 'Delhi Public School, Pune',
    plasticCollected: '142',
    volunteers: '87',
    marathonNumber: 23
  };
  return <section id="tracker" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
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
        duration: 0.6
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Live Updates
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Follow the Run
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track our runners across India in real-time and witness the impact unfold.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Route Animation Video */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -30
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-card rounded-2xl overflow-hidden shadow-card">
            <div className="aspect-square md:aspect-[4/3] bg-black flex items-center justify-center relative">
              <video
                src="/__l5e/assets-v1/a2746c6d-657c-4f6a-905b-354a84f12231/follow-the-run.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                aria-label="Route animation showing the 80 marathon journey across India"
              />
            </div>
          </motion.div>

          {/* Daily Summary Card */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 30
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">
                  {todayData.marathonNumber}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Today's Marathon(e.g.)</h3>
                <p className="text-muted-foreground">{todayData.date}</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-beige rounded-xl">
                <MapPin className="w-5 h-5 text-sage" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">{todayData.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-beige rounded-xl">
                <School className="w-5 h-5 text-sage" />
                <div>
                  <p className="text-sm text-muted-foreground">Partner School</p>
                  <p className="font-semibold text-foreground">{todayData.school}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-beige rounded-xl">
                  <Trash2 className="w-5 h-5 text-sage" />
                  <div>
                    <p className="text-sm text-muted-foreground">Plastic Collected</p>
                    <p className="font-semibold text-foreground">{todayData.plasticCollected} kg</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-beige rounded-xl">
                  <Users className="w-5 h-5 text-sage" />
                  <div>
                    <p className="text-sm text-muted-foreground">Volunteers</p>
                    <p className="font-semibold text-foreground">{todayData.volunteers}</p>
                  </div>
                </div>
              </div>
            </div>

            <Button variant="hero" className="w-full" size="lg" asChild>
              <Link to="/tracker" onClick={() => window.scrollTo(0, 0)}>
                <Calendar className="w-5 h-5" />
                View Today's Marathon
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default TrackerSection;