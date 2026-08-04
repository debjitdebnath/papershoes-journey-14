import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { routeStops, getStopStatus, type StopStatus } from '@/data/routePlan';

const statusColor: Record<StopStatus, string> = {
  completed: 'hsl(var(--sage))',
  current: 'hsl(var(--terracotta))',
  upcoming: 'hsl(var(--muted-foreground))',
};

const RouteMapSVG = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [active, setActive] = useState<number | null>(null);

  const path = routeStops.map((s, i) => `${i === 0 ? 'M' : 'L'}${s.x} ${s.y}`).join(' ');
  const activeStop = routeStops.find(s => s.seq === active) ?? null;

  return (
    <div ref={ref} className="relative w-full">
      <svg
        viewBox="0 0 60 110"
        className="w-full h-auto max-h-[560px] mx-auto"
        role="img"
        aria-label="Animated map of the PaperShoes route from Ahmedabad to Mumbai"
      >
        <defs>
          <marker id="routeArrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="hsl(var(--terracotta))" opacity="0.8" />
          </marker>
        </defs>

        {/* faded full path */}
        <path d={path} fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" opacity="0.18" />

        {/* animated route drawing with direction arrows */}
        <motion.path
          d={path}
          fill="none"
          stroke="hsl(var(--terracotta))"
          strokeWidth="0.7"
          strokeLinecap="round"
          markerMid="url(#routeArrow)"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />

        {routeStops.map((stop, i) => {
          const status = getStopStatus(stop);
          const color = statusColor[status];
          return (
            <motion.g
              key={stop.seq}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: status === 'upcoming' ? 0.65 : 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.12 }}
              style={{ transformOrigin: `${stop.x}px ${stop.y}px`, cursor: 'pointer' }}
              onMouseEnter={() => setActive(stop.seq)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(stop.seq)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              aria-label={`${stop.city}, ${stop.dates}, ${stop.theme}`}
            >
              {status === 'current' && (
                <circle cx={stop.x} cy={stop.y} r="4" fill={color} opacity="0.25">
                  <animate attributeName="r" values="2.6;5;2.6" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <circle cx={stop.x} cy={stop.y} r="2.4" fill={color} />
              <text
                x={stop.x}
                y={stop.y + 0.9}
                textAnchor="middle"
                fontSize="2.4"
                fontWeight="700"
                fill="hsl(var(--background))"
                pointerEvents="none"
              >
                {stop.seq}
              </text>
              <text
                x={stop.x + 3.6}
                y={stop.y + 1}
                fontSize="2.6"
                fill="hsl(var(--foreground))"
                pointerEvents="none"
              >
                {stop.city}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {activeStop && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[min(300px,90%)] bg-card border border-border rounded-2xl p-4 shadow-lg z-10"
        >
          <div className="text-sm font-bold text-foreground">
            {activeStop.seq}. {activeStop.city}
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">{activeStop.dates}</div>
          <div className="text-xs text-muted-foreground">{activeStop.days} days on the ground</div>
          <span className="inline-block mt-2 px-2.5 py-1 rounded-full bg-sage-light text-sage-dark text-[11px] font-medium">
            {activeStop.theme}
          </span>
          <div className="mt-3">
            <Link
              to={`/route-plan/${activeStop.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs font-semibold text-terracotta hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </motion.div>
      )}

      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-sage inline-block" /> Completed</span>
        <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-terracotta inline-block" /> Current</span>
        <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-full bg-muted-foreground/60 inline-block" /> Upcoming</span>
      </div>
    </div>
  );
};

export default RouteMapSVG;
