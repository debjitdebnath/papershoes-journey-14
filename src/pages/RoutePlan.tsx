import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Route as RouteIcon, Flag, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { routeStops } from '@/data/routePlan';

const stageMeta = {
  1: {
    title: 'Stage 1',
    subtitle: 'Gujarat → Rajasthan → Delhi → Uttarakhand → Sikkim → Assam → West Bengal → Andhra Pradesh',
    window: '1 Oct – ~5 Nov',
  },
  2: {
    title: 'Stage 2',
    subtitle: 'Telangana → Tamil Nadu → Puducherry → Kerala → Karnataka → Goa → Maharashtra',
    window: '~6 Nov – 20 Dec',
  },
} as const;

const RoutePlan = () => {
  const [activeStage, setActiveStage] = useState<1 | 2>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Final Route Plan • 80 Marathons in 80 Days | PaperShoes';
  }, []);

  const stops = useMemo(() => routeStops.filter(s => s.stage === activeStage), [activeStage]);
  const totalMarathons = routeStops.reduce((sum, s) => sum + s.marathons, 0);
  const stageMarathons = stops.reduce((sum, s) => sum + s.marathons, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-sage-light/40 to-background">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
              Final Route Plan
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              80 Marathons. <span className="text-sage">80 Days.</span> One India.
            </h1>
            <p className="text-lg text-muted-foreground">
              From the Sabarmati Riverfront to the Mumbai coastline — every stop on the journey,
              every route, every zone we run through to make plastic visible.
            </p>
          </motion.div>

          {/* Summary tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
            {[
              { icon: RouteIcon, label: 'Total marathons', value: totalMarathons },
              { icon: MapPin, label: 'Stops', value: routeStops.length },
              { icon: Calendar, label: 'Days', value: 80 },
              { icon: Flag, label: 'Stages', value: 2 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="bg-card rounded-2xl p-5 shadow-card border border-border/50"
              >
                <stat.icon className="w-5 h-5 text-sage mb-2" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage tabs */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {([1, 2] as const).map(stage => (
              <button
                key={stage}
                onClick={() => setActiveStage(stage)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  activeStage === stage
                    ? 'bg-sage text-primary-foreground border-sage shadow-md'
                    : 'bg-card text-foreground border-border hover:border-sage/60'
                }`}
              >
                {stageMeta[stage].title} • {stageMeta[stage].window}
              </button>
            ))}
          </div>

          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {stageMeta[activeStage].title}
            </h2>
            <p className="text-muted-foreground">{stageMeta[activeStage].subtitle}</p>
            <p className="text-sm text-sage-dark mt-2 font-medium">
              {stops.length} stops · {stageMarathons} marathons · {stageMeta[activeStage].window}
            </p>
          </motion.div>

          {/* Timeline of stops */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-sage/30 -translate-x-1/2" aria-hidden />

            <div className="space-y-6">
              {stops.map((stop, idx) => {
                const isFinish = /Finish/i.test(stop.city);
                const isStart = /Start/i.test(stop.city);
                const side = idx % 2 === 0 ? 'md:pr-12 md:text-right md:items-end md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto';

                return (
                  <motion.div
                    key={stop.seq}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: (idx % 4) * 0.05 }}
                    className="relative pl-14 md:pl-0 md:w-1/2 md:flex md:flex-col"
                  >
                    {/* node */}
                    <div className="absolute left-5 md:left-1/2 top-6 w-4 h-4 rounded-full bg-sage border-4 border-background -translate-x-1/2 z-10" />

                    <div className={`bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-sage/60 hover:shadow-lg transition-all ${side}`}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                          {isStart ? (
                            <Flag className="w-5 h-5 text-sage-dark" />
                          ) : isFinish ? (
                            <Trophy className="w-5 h-5 text-sage-dark" />
                          ) : (
                            <span className="text-sage-dark font-bold">{stop.seq}</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <h3 className="text-lg font-bold text-foreground leading-tight">
                            {stop.city}
                          </h3>
                          <p className="text-sm text-muted-foreground">{stop.state}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold whitespace-nowrap">
                          {stop.marathons} {stop.marathons === 1 ? 'run' : 'runs'}
                        </span>
                      </div>

                      <div className="text-left space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                          <span className="text-foreground font-medium">{stop.dates}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{stop.zone}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <RouteIcon className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{stop.route}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-12 italic">
            This route plan is largely final and may see minor refinements as logistics and local conditions are confirmed.
          </p>

          <div className="flex justify-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                Support the Journey
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoutePlan;
