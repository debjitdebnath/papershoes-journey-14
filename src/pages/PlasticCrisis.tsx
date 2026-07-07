import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Droplets, Recycle, Clock, ExternalLink, Heart, BookOpen, Users, Leaf, Building2, Palette, Newspaper, FileText, Lightbulb, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import AnimatedCounter from '@/components/charts/AnimatedCounter';
import StackedBarChart from '@/components/charts/StackedBarChart';
import ComparisonBarChart from '@/components/charts/ComparisonBarChart';
import LifecycleDiagram from '@/components/charts/LifecycleDiagram';
import ChangeLoopDiagram from '@/components/charts/ChangeLoopDiagram';
import IndiaMapSVG from '@/components/charts/IndiaMapSVG';

// Section wrapper with intersection observer
const Section = ({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Stat Card Component
const StatCard = ({ value, label, icon: Icon, suffix = '' }: { value: number | string; label: string; icon: React.ElementType; suffix?: string }) => (
  <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-shadow">
    <div className="w-12 h-12 bg-sage-light rounded-xl flex items-center justify-center mx-auto mb-4">
      <Icon className="w-6 h-6 text-sage" />
    </div>
    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
      {typeof value === 'number' ? <AnimatedCounter end={value} suffix={suffix} /> : value}
    </div>
    <p className="text-sm text-muted-foreground">{label}</p>
  </div>
);

// Resource Card
const ResourceCard = ({ title, source, category, link }: { title: string; source: string; category: string; link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block bg-card border border-border rounded-xl p-5 hover:shadow-card hover:border-sage transition-all group"
  >
    <span className="inline-block px-2 py-1 bg-sage-light text-sage-dark text-xs font-medium rounded-md mb-3">
      {category}
    </span>
    <h4 className="font-semibold text-foreground mb-2 group-hover:text-sage transition-colors">{title}</h4>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span>{source}</span>
      <ExternalLink className="w-3 h-3" />
    </div>
  </a>
);

const PlasticCrisis = () => {
  const plasticUsageData = [
    { label: 'Packaging', value: 40, color: 'hsl(var(--sage))' },
    { label: 'FMCG', value: 22, color: 'hsl(var(--terracotta))' },
    { label: 'Textiles', value: 15, color: 'hsl(var(--brown))' },
    { label: 'Construction', value: 12, color: 'hsl(var(--sage-dark))' },
    { label: 'Others', value: 11, color: 'hsl(var(--muted-foreground))' },
  ];

  const comparisonData = [
    { country: 'China', absolute: 60, perCapita: 42 },
    { country: 'USA', absolute: 38, perCapita: 115 },
    { country: 'India', absolute: 26, perCapita: 19 },
    { country: 'European Union', absolute: 30, perCapita: 67 },
  ];

  const resources = [
    { title: 'Global Plastics Outlook', source: 'OECD', category: 'Global', link: 'https://www.oecd.org/environment/plastics/' },
    { title: 'India Plastic Waste Report', source: 'CPCB', category: 'India', link: 'https://cpcb.nic.in/' },
    { title: 'Single-Use Plastics Guidelines', source: 'MoEFCC', category: 'Policy', link: 'https://moef.gov.in/' },
    { title: 'Breaking the Plastic Wave', source: 'Pew Research', category: 'Solutions', link: 'https://www.pewtrusts.org/' },
    { title: 'Youth Climate Action Toolkit', source: 'UNEP', category: 'Youth', link: 'https://www.unep.org/' },
    { title: 'Circular Economy for Plastics', source: 'Ellen MacArthur', category: 'Solutions', link: 'https://ellenmacarthurfoundation.org/' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-20">
        {/* SECTION 1 — GLOBAL OVERVIEW (DATA HERO) */}
        <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,93,58,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(74,168,120,0.12),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 text-white text-sm font-medium rounded-full mb-5 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" /> Live Data Dashboard
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-5 tracking-tight"
              >
                The Plastic Crisis,<br /><span className="bg-gradient-to-r from-orange to-terracotta bg-clip-text text-transparent">Visualised</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-white/70 max-w-2xl mx-auto"
              >
                Understanding the scale of the problem is the first step toward solving it.
              </motion.p>
            </div>

            {/* Live Counters */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-orange/40 transition-colors">
                <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">Plastic produced this year</p>
                <div className="text-4xl md:text-5xl font-bold text-orange">
                  <AnimatedCounter end={380} suffix="M" /> <span className="text-xl text-white/80">tonnes</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-terracotta/40 transition-colors">
                <p className="text-sm text-white/60 mb-2 uppercase tracking-wider">Plastic entering oceans this year</p>
                <div className="text-4xl md:text-5xl font-bold text-terracotta">
                  <AnimatedCounter end={11} suffix="M" /> <span className="text-xl text-white/80">tonnes</span>
                </div>
              </div>
            </motion.div>

            {/* Headline Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
            >
              {[
                { icon: Globe, value: '400M+', label: 'tonnes/year' },
                { icon: Recycle, value: '9%', label: 'recycled' },
                { icon: Droplets, value: '11M', label: 'tonnes to oceans' },
                { icon: Clock, value: '∞', label: 'natural degradation' },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-colors">
                  <s.icon className="w-7 h-7 mx-auto mb-2 text-orange" />
                  <div className="text-2xl md:text-3xl font-bold">{s.value}</div>
                  <p className="text-xs text-white/60 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — SOURCES OF PLASTIC POLLUTION */}
        <Section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2 text-center">
                Where Does Plastic Come From?
              </h2>
              <p className="text-center text-muted-foreground mb-10">
                Most plastic is designed for minutes of use — and centuries of impact.
              </p>
              <StackedBarChart data={plasticUsageData} height={48} />
            </div>
          </div>
        </Section>

        {/* SECTION 3 — INDIA IN FOCUS */}
        <Section className="py-16 md:py-24 bg-beige">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              India in Focus
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Big Number Cards */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StatCard value={3.5} label="Million tonnes/year" icon={Leaf} suffix="M" />
                  <StatCard value={40} label="% Mismanaged" icon={Recycle} suffix="%" />
                  <StatCard value="2x" label="Waste doubled in a decade" icon={Globe} />
                </div>
                
                {/* River info */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-4">River Pollution Flow</h3>
                  <div className="space-y-3">
                    {['Ganga', 'Yamuna', 'Brahmaputra'].map((river, i) => (
                      <div key={river} className="flex items-center gap-3">
                        <div className="w-24 text-sm font-medium text-foreground">{river}</div>
                        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${80 - i * 15}%` }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="h-full bg-gradient-to-r from-sage to-terracotta rounded-full"
                          />
                        </div>
                        <Droplets className="w-4 h-4 text-sage" />
                        <span className="text-xs text-muted-foreground">Ocean</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Comparison Chart */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-6">Global Comparison</h3>
                <ComparisonBarChart data={comparisonData} />
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 4 — PLASTIC FLOW SYSTEM */}
        <Section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
              The Plastic Lifecycle
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Hover over each stage to understand the impact at every step.
            </p>
            <LifecycleDiagram />
          </div>
        </Section>

        {/* SECTION 5 — WHY CLEANUPS FAIL */}
        <Section className="py-16 md:py-24 bg-beige">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Cleanups Alone Fail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Myth */}
              <div className="bg-card border border-destructive/30 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-destructive mb-6">The Myth</h3>
                <ul className="space-y-4">
                  {['More bins solve the problem', 'One-day cleanups work', 'Awareness posters change behaviour'].map((myth) => (
                    <li key={myth} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-destructive mt-2" />
                      <span className="text-muted-foreground">{myth}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reality */}
              <div className="bg-card border border-sage/50 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-sage mb-6">The Reality</h3>
                <ul className="space-y-4">
                  {[
                    'Segregation at source',
                    'Data visibility & tracking',
                    'Accountability systems',
                    'Youth engagement & education',
                    'Municipal partnerships'
                  ].map((reality) => (
                    <li key={reality} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sage mt-2" />
                      <span className="text-foreground">{reality}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prevention vs Cleanup bar */}
            <div className="max-w-md mx-auto mt-12">
              <p className="text-sm text-muted-foreground text-center mb-3">Effectiveness Comparison</p>
              <div className="flex gap-2 items-center">
                <span className="text-xs w-20 text-right">Cleanup</span>
                <div className="flex-1 h-6 bg-muted rounded-lg overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '25%' }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-destructive/50 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <span className="text-xs w-20 text-right">Prevention</span>
                <div className="flex-1 h-6 bg-muted rounded-lg overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-sage rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 6 — PAPER SHOES INTERVENTION MAP */}
        <Section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Paper Shoes Route Map
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Every city we visit becomes a data point and an action point.
            </p>
            <IndiaMapSVG />
          </div>
        </Section>

        {/* SECTION 7 — CHANGE LOOP (SYSTEMS DIAGRAM) */}
        <Section className="py-16 md:py-24 bg-beige">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
              The Change Loop
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Systems change happens through continuous cycles of awareness, data, and action.
            </p>
            <ChangeLoopDiagram />

            {/* Animated counters below */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
              {[
                { value: 150, label: 'Hotspots Mapped', suffix: '+' },
                { value: 40, label: 'Cities Activated', suffix: '+' },
                { value: 25000, label: 'Youth Engaged', suffix: '+' },
                { value: 80, label: 'Actions Triggered', suffix: '+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sage">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 8 — IMPACT DASHBOARD SNAPSHOT */}
        <Section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
              Impact Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Leaf, label: 'Environmental', stats: ['3.5T waste documented', '12 rivers mapped', '50+ hotspots flagged'] },
                { icon: Building2, label: 'Civic', stats: ['8 municipal MoUs', '15 policy recommendations', '3 pilot programs'] },
                { icon: Palette, label: 'Cultural', stats: ['200+ art installations', '50 school programs', '10 community murals'] },
                { icon: Newspaper, label: 'Narrative', stats: ['500+ media mentions', '2M social reach', '50 documentary hours'] },
              ].map((card) => (
                <div key={card.label} className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange/40 transition-colors">
                  <card.icon className="w-8 h-8 text-orange mb-4" />
                  <h3 className="font-bold mb-3">{card.label}</h3>
                  <ul className="space-y-2">
                    {card.stats.map((stat) => (
                      <li key={stat} className="text-sm text-white/70">{stat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SECTION 9 — FROM DATA TO ACTION */}
        <Section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
              From Data to Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-terracotta-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-terracotta" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Support the Run</h3>
                <p className="text-sm text-muted-foreground mb-6">Power 80 marathons in 80 days with your contribution.</p>
                <Button variant="hero" asChild>
                  <a href="https://gofund.me/62b8c3961" target="_blank" rel="noopener noreferrer">Donate Now</a>
                </Button>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-sage" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Learn More</h3>
                <p className="text-sm text-muted-foreground mb-6">Dive deeper into the research and methodology.</p>
                <Button variant="outline" asChild>
                  <Link to="/#mission">Our Mission</Link>
                </Button>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-orange-light rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-orange" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Join the Movement</h3>
                <p className="text-sm text-muted-foreground mb-6">Volunteer, organize, or host a local activation.</p>
                <Button variant="outline" asChild>
                  <Link to="/#join">Get Involved</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* SECTION 10 — RESOURCE VAULT */}
        <Section className="py-16 md:py-24 bg-beige">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Resource Vault
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Credible sources and further reading for researchers, journalists, and changemakers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {resources.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
        </Section>

        {/* FOOTER STATEMENT */}
        <section className="py-16 bg-sage text-primary-foreground">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              Paper Shoes believes data without action is noise —<br />
              and action without understanding is waste.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlasticCrisis;
