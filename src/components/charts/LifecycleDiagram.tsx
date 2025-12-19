import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Factory, ShoppingBag, Trash2, Users, Flame, Droplets, User } from 'lucide-react';

const stages = [
  { 
    icon: Factory, 
    label: 'Production',
    tooltip: 'Fossil fuels extracted to create virgin plastic. High carbon emissions and resource depletion.'
  },
  { 
    icon: ShoppingBag, 
    label: 'Consumption',
    tooltip: 'Average plastic use: 5-10 minutes. 40% is single-use packaging.'
  },
  { 
    icon: Trash2, 
    label: 'No Segregation',
    tooltip: 'Mixed waste prevents recycling. Only 9% of all plastic ever made has been recycled.'
  },
  { 
    icon: Users, 
    label: 'Informal Handling',
    tooltip: 'Waste pickers handle 20% of India\'s waste. Health risks, low wages, no protection.'
  },
  { 
    icon: Flame, 
    label: 'Dumping/Burning',
    tooltip: 'Open burning releases dioxins and toxins. Landfills leach chemicals into groundwater.'
  },
  { 
    icon: Droplets, 
    label: 'Rivers/Air/Soil',
    tooltip: 'Microplastics found in 90% of water bodies. Enters food chain through fish and crops.'
  },
  { 
    icon: User, 
    label: 'Humans',
    tooltip: 'We ingest ~5g of plastic weekly (a credit card). Health effects still being studied.'
  },
];

const LifecycleDiagram = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-4">
      <div className="flex items-center justify-between min-w-[800px] px-4">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setActiveTooltip(index)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center cursor-pointer hover:shadow-card hover:border-sage transition-all">
                <stage.icon className="w-7 h-7 md:w-8 md:h-8 text-sage" />
              </div>
              <p className="text-xs md:text-sm font-medium text-center mt-2 text-foreground max-w-[80px]">
                {stage.label}
              </p>
              
              {/* Tooltip */}
              {activeTooltip === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-3 bg-earth text-primary-foreground text-xs rounded-lg shadow-elevated z-10"
                >
                  {stage.tooltip}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-earth" />
                </motion.div>
              )}
            </motion.div>

            {/* Arrow */}
            {index < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="w-8 md:w-12 h-0.5 bg-border mx-2 origin-left"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifecycleDiagram;
