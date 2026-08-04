import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const routePoints = [
  { id: 1, x: 72, y: 20, city: 'Ahmedabad', waste: 'High', plastic: 'PET, packaging', action: 'Launch & riverfront cleanup' },
  { id: 2, x: 77, y: 11, city: 'Dehradun', waste: 'Medium', plastic: 'LDPE, PP', action: 'Foothills trail cleanup' },
  { id: 3, x: 78, y: 10, city: 'Rishikesh', waste: 'Critical', plastic: 'Mixed', action: 'Ganga riverbank patrol' },
  { id: 4, x: 78, y: 12, city: 'Haridwar', waste: 'Critical', plastic: 'Mixed', action: 'Plastic-free ghat pledge' },
  { id: 5, x: 77, y: 14, city: 'Delhi', waste: 'Critical', plastic: 'All types', action: 'Policy advocacy' },
  { id: 6, x: 75, y: 19, city: 'Indore', waste: 'Low', plastic: 'Multi-layer', action: 'Model-city exchange' },
  { id: 7, x: 78, y: 25, city: 'Hyderabad', waste: 'High', plastic: 'Industrial, PET', action: 'Innovation showcase' },
  { id: 8, x: 73, y: 23, city: 'Nashik', waste: 'Medium', plastic: 'Agri film', action: 'Farm-plastic drive' },
  { id: 9, x: 72, y: 28, city: 'Goa', waste: 'High', plastic: 'Ocean debris', action: 'Beach cleanup & brand audit' },
  { id: 10, x: 72, y: 26, city: 'Velas', waste: 'Medium', plastic: 'Ghost gear', action: 'Turtle nesting protection' },
  { id: 11, x: 72, y: 24, city: 'Alibaug', waste: 'Medium', plastic: 'Tourism waste', action: 'Coastal stewardship' },
  { id: 12, x: 72, y: 22, city: 'Mumbai', waste: 'Critical', plastic: 'All types', action: 'Finale & national pledge' },
];

const IndiaMapSVG = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto">
      <svg viewBox="60 5 40 35" className="w-full h-auto">
        {/* Simplified India outline */}
        <motion.path
          d="M77 8 L82 8 L85 10 L88 12 L90 15 L91 18 L90 22 L88 25 L85 27 L82 28 L80 30 L78 32 L75 33 L73 32 L71 30 L70 27 L69 24 L68 21 L69 18 L70 15 L72 12 L74 10 L77 8 Z"
          fill="hsl(var(--sage-light))"
          stroke="hsl(var(--sage))"
          strokeWidth="0.3"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={isInView ? { pathLength: 1, fillOpacity: 1 } : { pathLength: 0, fillOpacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Route path */}
        <motion.path
          d="M72 20 L77 11 L78 10 L78 12 L77 14 L75 19 L78 25 L73 23 L72 28 L72 26 L72 24 L72 22"
          fill="none"
          stroke="hsl(var(--terracotta))"
          strokeWidth="0.4"
          strokeDasharray="1 0.5"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />

        {/* Route points */}
        {routePoints.map((point, index) => (
          <motion.g
            key={point.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
          >
            <circle
              cx={point.x}
              cy={point.y}
              r="1"
              fill="hsl(var(--terracotta))"
              className="cursor-pointer"
              onMouseEnter={() => setActivePoint(point.id)}
              onMouseLeave={() => setActivePoint(null)}
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill="none"
              stroke="hsl(var(--terracotta))"
              strokeWidth="0.2"
              opacity="0.5"
            />
          </motion.g>
        ))}
      </svg>

      {/* Tooltip */}
      {activePoint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl p-4 shadow-elevated w-64"
        >
          {routePoints.filter(p => p.id === activePoint).map(point => (
            <div key={point.id}>
              <h4 className="font-bold text-foreground mb-2">{point.city}</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Waste Level:</span> <span className="text-foreground">{point.waste}</span></p>
                <p><span className="text-muted-foreground">Plastic Types:</span> <span className="text-foreground">{point.plastic}</span></p>
                <p><span className="text-muted-foreground">Action:</span> <span className="text-foreground">{point.action}</span></p>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Overlay Labels */}
      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        {['Awareness', 'Data', 'Pressure', 'Action'].map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 2 + i * 0.1 }}
            className="px-3 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-full"
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default IndiaMapSVG;
