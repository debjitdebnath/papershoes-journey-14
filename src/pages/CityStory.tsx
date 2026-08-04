import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Route as RouteIcon,
  Users,
  Handshake,
  GraduationCap,
  Camera,
  Newspaper,
  AlertTriangle,
  Droplets,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { routeStops, getStopBySlug, getStopStatus } from '@/data/routePlan';

const statusLabel = {
  completed: 'Completed',
  current: 'Running now',
  upcoming: 'Upcoming',
} as const;

const CityStory = () => {
  const { slug } = useParams();
  const stop = getStopBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (stop) {
      document.title = `${stop.city} • ${stop.theme} | PaperShoes 80`;
    }
  }, [stop]);

  if (!stop) return <Navigate to="/route-plan" replace />;

  const index = routeStops.findIndex(s => s.slug === stop.slug);
  const prev = routeStops[index - 1];
  const next = routeStops[index + 1];
  const status = getStopStatus(stop);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 bg-gradient-to-b from-sage-light/40 to-background">
        <div className="container mx-auto px-6">
          <Link
            to="/route-plan"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to the route
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full">
                Stop {stop.seq} of {routeStops.length}
              </span>
              <span className="px-4 py-1.5 bg-terracotta/10 text-terracotta text-sm font-medium rounded-full">
                {statusLabel[status]}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-3 leading-tight">
              {stop.city}
            </h1>
            <p className="text-lg text-sage font-medium">{stop.theme}</p>
            <p className="text-lg text-muted-foreground mt-3">{stop.story}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl">
            {[
              { icon: Calendar, label: 'Dates', value: stop.dates },
              { icon: MapPin, label: 'State', value: stop.state },
              { icon: RouteIcon, label: 'Marathons', value: `${stop.marathons}` },
              { icon: Droplets, label: 'Days on ground', value: `${stop.days}` },
            ].map(item => (
              <div key={item.label} className="bg-card rounded-2xl p-5 shadow-card border border-border/50">
                <item.icon className="w-5 h-5 text-sage mb-2" />
                <div className="text-lg font-bold text-foreground leading-snug">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <article className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-3">Why this city matters</h2>
              <p className="text-muted-foreground leading-relaxed">{stop.why}</p>
              <div className="mt-6 p-5 rounded-2xl bg-secondary/40">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-sage" />
                  <h3 className="text-sm font-bold text-foreground">Environmental significance</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stop.significance}</p>
              </div>
            </article>

            <article className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-terracotta" />
                <h2 className="text-2xl font-bold text-foreground">Local plastic challenges</h2>
              </div>
              <ul className="space-y-3">
                {stop.challenges.map(c => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-card">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-sage" />
                <h2 className="text-2xl font-bold text-foreground">Community impact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{stop.impact}</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="p-5 rounded-2xl bg-secondary/40">
                  <h3 className="text-sm font-bold text-foreground mb-2">Planned events</h3>
                  <ul className="space-y-1.5">
                    {stop.events.map(e => (
                      <li key={e} className="text-sm text-muted-foreground">• {e}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-secondary/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Handshake className="w-4 h-4 text-sage" />
                    <h3 className="text-sm font-bold text-foreground">Local partners</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {stop.partners.map(p => (
                      <li key={p} className="text-sm text-muted-foreground">• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-5 h-5 text-sage" />
                <h2 className="text-2xl font-bold text-foreground">From the road</h2>
              </div>
              <p className="text-sm text-muted-foreground">{stop.journal}</p>
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl bg-secondary/60 border border-border/50 flex items-center justify-center"
                  >
                    <Camera className="w-5 h-5 text-muted-foreground/50" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                Photos and journal entries publish live as the runners arrive.
              </p>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-card">
              <h3 className="text-sm font-bold text-foreground mb-3">Route details</h3>
              <p className="text-sm text-muted-foreground">{stop.route}</p>
              <div className="mt-4 space-y-2">
                {stop.metrics.map(m => (
                  <div key={m.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{m.label}</span>
                    <span className="font-semibold text-foreground">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-sage" />
                <h3 className="text-sm font-bold text-foreground">Schools programme</h3>
              </div>
              <p className="text-sm text-muted-foreground">{stop.schools}</p>
            </div>

            <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-card">
              <h3 className="text-sm font-bold text-foreground mb-2">Volunteer here</h3>
              <p className="text-sm text-muted-foreground mb-4">{stop.volunteer}</p>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/#join">Join this stop</Link>
              </Button>
            </div>

            <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="w-4 h-4 text-sage" />
                <h3 className="text-sm font-bold text-foreground">Media</h3>
              </div>
              <p className="text-sm text-muted-foreground">{stop.media}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Prev / next */}
      <section className="pb-16">
        <div className="container mx-auto px-6 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/route-plan/${prev.slug}`}
              className="group bg-card rounded-2xl p-5 border border-border/50 shadow-card hover:border-sage/60 transition-all"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous stop
              </div>
              <div className="text-lg font-bold text-foreground">{prev.city}</div>
              <div className="text-sm text-muted-foreground">{prev.theme}</div>
            </Link>
          ) : <div />}
          {next && (
            <Link
              to={`/route-plan/${next.slug}`}
              className="group bg-card rounded-2xl p-5 border border-border/50 shadow-card hover:border-sage/60 transition-all sm:text-right"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1 sm:justify-end">
                Next stop <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-lg font-bold text-foreground">{next.city}</div>
              <div className="text-sm text-muted-foreground">{next.theme}</div>
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityStory;
