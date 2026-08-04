import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Route as RouteIcon, Flag, Trophy, Waves, ArrowRight, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/charts/AnimatedCounter';
import RouteMapSVG from '@/components/charts/RouteMapSVG';
import {
  routeStops,
  chapters,
  journeyStats,
  getStopStatus,
  getCampaignProgress,
  TOTAL_DISTANCE_KM,
} from '@/data/routePlan';

const statusStyles = {
  completed: 'bg-sage-light text-sage-dark',
  current: 'bg-terracotta/15 text-terracotta',
  upcoming: 'bg-muted text-muted-foreground',
} as const;

const statusLabel = {
  completed: 'Completed',
  current: 'Running now',
  upcoming: 'Upcoming',
} as const;

const RoutePlan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'From Source to Sea • The 80-Day Route | PaperShoes';
  }, []);

  const progress = getCampaignProgress();

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
              The Route
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              From Source <span className="text-sage">to Sea.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              80 marathons in 80 days, following plastic on its own journey — from the inland cities
              where it is made and discarded, down India’s great rivers, and out to the coastline
              where the ocean hands it back.
            </p>
            <p className="text-base text-muted-foreground mt-3">
              Ahmedabad → Dehradun → Rishikesh → Haridwar → Delhi → Indore → Hyderabad → Nashik →
              Goa → Velas → Alibaug → Mumbai
            </p>
          </motion.div>

          {/* Journey stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {journeyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className="bg-card rounded-2xl p-5 shadow-card border border-border/50"
              >
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live progress tracker */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-3xl border border-border/50 shadow-card p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Journey progress</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {progress.finished
                    ? 'The 80-day journey is complete.'
                    : progress.started
                      ? `Day ${progress.dayNumber} of 80 · currently in ${progress.currentStop.city}`
                      : `Starting 1 October in ${routeStops[0].city}`}
                </p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-terracotta/15 text-terracotta text-sm font-semibold">
                {progress.percent}% complete
              </span>
            </div>

            <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-sage"
                initial={{ width: 0 }}
                animate={{ width: `${progress.percent}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { icon: RouteIcon, label: 'Marathons completed', value: `${progress.marathonsDone} / 80` },
                { icon: Waves, label: 'Distance covered', value: `${progress.distanceCovered.toLocaleString()} km` },
                { icon: MapPin, label: 'Distance remaining', value: `${progress.distanceRemaining.toLocaleString()} km` },
                { icon: Flag, label: 'Next stop', value: progress.nextStop ? progress.nextStop.city : 'Finish line' },
              ].map(item => (
                <div key={item.label} className="rounded-2xl bg-secondary/40 p-4">
                  <item.icon className="w-4 h-4 text-sage mb-2" />
                  <div className="text-lg font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive map */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">The route, drawn</h2>
            <p className="text-muted-foreground">
              Hover or tap a stop to see its dates, theme and story. The line follows the water —
              from the Sabarmati and the Ganga, down the Godavari, and out to the Arabian Sea.
            </p>
          </div>
          <div className="bg-card rounded-3xl border border-border/50 shadow-card p-4 md:p-8">
            <RouteMapSVG />
          </div>
        </div>
      </section>

      {/* Narrative chapters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">The documentary storyline</h2>
            <p className="text-muted-foreground">
              Eight chapters, filmed along the route, tracing plastic from the place it is dropped
              to the place it comes back.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {chapters.map((chapter, i) => (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="bg-card rounded-2xl p-5 border border-border/50 shadow-card"
              >
                <div className="text-xs font-semibold text-terracotta mb-2">Chapter {i + 1}</div>
                <h3 className="text-base font-bold text-foreground leading-snug">{chapter.title}</h3>
                <p className="text-xs text-sage-dark mt-1">{chapter.cities}</p>
                <p className="text-sm text-muted-foreground mt-2">{chapter.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of stops */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-2">Every stop on the journey</h2>
            <p className="text-muted-foreground">
              Twelve cities. Each one a different chapter of India’s plastic story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-sage/30 -translate-x-1/2" aria-hidden />

            <div className="space-y-6">
              {routeStops.map((stop, idx) => {
                const isFinish = stop.seq === routeStops.length;
                const isStart = stop.seq === 1;
                const status = getStopStatus(stop);
                const side = idx % 2 === 0 ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto';

                return (
                  <motion.div
                    key={stop.seq}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: (idx % 4) * 0.05 }}
                    className="relative pl-14 md:pl-0 md:w-1/2 md:flex md:flex-col"
                  >
                    <div
                      className={`absolute left-5 md:left-1/2 top-6 w-4 h-4 rounded-full border-4 border-background -translate-x-1/2 z-10 ${
                        status === 'upcoming' ? 'bg-muted-foreground/50' : status === 'current' ? 'bg-terracotta' : 'bg-sage'
                      }`}
                    />

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
                          <h3 className="text-lg font-bold text-foreground leading-tight">{stop.city}</h3>
                          <p className="text-sm text-muted-foreground">{stop.state}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusStyles[status]}`}>
                          {statusLabel[status]}
                        </span>
                      </div>

                      <span className="inline-block px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold mb-3">
                        {stop.theme}
                      </span>

                      <div className="text-left space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                          <span className="text-foreground font-medium">
                            {stop.dates} · {stop.days} days · {stop.marathons} marathons
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <RouteIcon className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{stop.route}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{stop.impact}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{stop.story}</p>

                      <Link
                        to={`/route-plan/${stop.slug}`}
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-terracotta hover:gap-2.5 transition-all"
                      >
                        Read the {stop.city} story
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-12 italic">
            {TOTAL_DISTANCE_KM.toLocaleString()} km on foot. Dates may see minor refinements as
            logistics and local conditions are confirmed.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button variant="hero" size="lg" asChild>
              <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/five-pillars">See the Five Pillars</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoutePlan;
