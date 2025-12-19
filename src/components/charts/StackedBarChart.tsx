import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface BarData {
  label: string;
  value: number;
  color: string;
}

interface StackedBarChartProps {
  data: BarData[];
  height?: number;
}

const StackedBarChart = ({ data, height = 40 }: StackedBarChartProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div ref={ref} className="w-full">
      <div 
        className="w-full rounded-lg overflow-hidden flex"
        style={{ height: `${height}px` }}
      >
        {data.map((item, index) => {
          const width = (item.value / total) * 100;
          return (
            <motion.div
              key={item.label}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${width}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="h-full flex items-center justify-center text-xs font-bold text-primary-foreground"
              style={{ backgroundColor: item.color }}
            >
              {width >= 10 && `${item.value}%`}
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-sm" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">
              {item.label} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedBarChart;
