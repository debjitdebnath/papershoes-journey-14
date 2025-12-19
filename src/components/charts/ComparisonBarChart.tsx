import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface ComparisonData {
  country: string;
  absolute: number;
  perCapita: number;
}

interface ComparisonBarChartProps {
  data: ComparisonData[];
}

const ComparisonBarChart = ({ data }: ComparisonBarChartProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showPerCapita, setShowPerCapita] = useState(false);

  const values = showPerCapita ? data.map(d => d.perCapita) : data.map(d => d.absolute);
  const maxValue = Math.max(...values);

  return (
    <div ref={ref} className="w-full">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setShowPerCapita(false)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            !showPerCapita 
              ? 'bg-sage text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Absolute (Million tonnes)
        </button>
        <button
          onClick={() => setShowPerCapita(true)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
            showPerCapita 
              ? 'bg-sage text-primary-foreground' 
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          Per Capita (kg)
        </button>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => {
          const value = showPerCapita ? item.perCapita : item.absolute;
          const width = (value / maxValue) * 100;
          return (
            <div key={item.country} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-foreground">{item.country}</span>
                <span className="text-muted-foreground">
                  {value.toLocaleString()}{showPerCapita ? ' kg' : 'M tonnes'}
                </span>
              </div>
              <div className="h-8 bg-muted rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${width}%` } : { width: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-sage to-sage-dark rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComparisonBarChart;
