import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import missionVideo from '@/assets/mission-walk.mp4.asset.json';
const MissionSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((p) => !p);
  };

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
          }} className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark rounded-full mb-4 font-semibold font-serif text-4xl">
              ​The Mission 
            </motion.span>
            <h2 className="md:text-5xl text-foreground mb-4 font-serif font-normal text-5xl"> Combine long distance running with environmental action, in response to the plastic pollution crisis.</h2>
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
        }} className="bg-card p-8 md:p-12 shadow-card shadow-sm rounded-3xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-center text-black bg-white">
                Papershoes is an environmental awareness campaign running 80 marathons in 80 consecutive days across India to raise awareness about plastic waste and pollution. Using the marathon as a symbol of endurance and long-term responsibility, the campaign delivers a clear message: protecting our planet is a marathon, not a sprint. 

Through school visits, community runs, clean-ups, and storytelling, papershoes transforms physical challenge into shared purpose, inspiring awareness, behaviour change, and collective responsibility for the planet.<strong className="text-foreground"></strong> ​
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">​</p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 text-center">
                ​​​​
              </p>

              <div className="mt-8 relative left-1/2 -translate-x-1/2 w-screen">
                <video
                  ref={videoRef}
                  src={missionVideo.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto block bg-black"
                />
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm transition"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted((m) => !m)}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 backdrop-blur-sm transition"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-foreground font-medium italic text-center text-3xl font-sans">
                  "We run not to escape the world but to stay connected to it.."
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 20
            }} transition={{
              duration: 0.8,
              delay: 0.5
            }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                    <Heart size={18} />
                    Donate
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#framework">Learn More</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default MissionSection;