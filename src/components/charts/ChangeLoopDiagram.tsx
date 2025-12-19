import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const loopSteps = [
  'Symbolic Run',
  'Attention',
  'Data',
  'Media',
  'Civic Pressure',
  'Municipal Action',
  'Community Pride',
  'Behaviour Change',
];

const ChangeLoopDiagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Circle path */}
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Animated arrow circle */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(var(--sage))"
          strokeWidth="4"
          strokeDasharray="20 10"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Labels positioned around the circle */}
      {loopSteps.map((step, index) => {
        const angle = (index * 360) / loopSteps.length - 90; // Start from top
        const radius = 48; // percentage from center
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="bg-card border border-border rounded-xl px-3 py-2 shadow-soft text-center min-w-[90px]">
              <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                {step}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Center text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <p className="text-lg font-bold text-sage">Systems</p>
        <p className="text-lg font-bold text-sage">Change</p>
      </motion.div>
    </div>
  );
};

export default ChangeLoopDiagram;
