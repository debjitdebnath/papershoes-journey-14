export type RouteStop = {
  seq: number;
  slug: string;
  city: string;
  state: string;
  dates: string;
  /** ISO start / end of the stay */
  start: string;
  end: string;
  days: number;
  marathons: number;
  theme: string;
  /** narrative chapter this stop belongs to */
  chapter: string;
  /** position on the simplified India map (viewBox 0 0 100 120) */
  x: number;
  y: number;
  /** short environmental story shown on the timeline card */
  story: string;
  /** local impact focus */
  impact: string;
  route: string;
  /** long-form content for the city story page */
  why: string;
  challenges: string[];
  significance: string;
  partners: string[];
  events: string[];
  schools: string;
  volunteer: string;
  journal: string;
  media: string;
  metrics: { label: string; value: string }[];
};

export const MARATHON_KM = 42.195;
export const TOTAL_MARATHONS = 80;
export const TOTAL_DAYS = 80;
/** 80 × 42.195 km ≈ 3,376 km */
export const TOTAL_DISTANCE_KM = Math.round(TOTAL_MARATHONS * MARATHON_KM);

export const routeStops: RouteStop[] = [
  {
    seq: 1,
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    dates: '1–2 October',
    start: '2026-10-01',
    end: '2026-10-02',
    days: 2,
    marathons: 2,
    theme: 'Launching the Movement',
    chapter: 'Launching the Movement',
    x: 26,
    y: 52,
    story:
      'The journey begins where plastic begins — inland, in a city of makers. Ahmedabad sets the tone: waste is not an ocean problem, it is a street problem first.',
    impact: 'Launch rally, riverfront cleanup and the first public plastic audit of the campaign.',
    route: 'Sabarmati Riverfront promenade loops',
    why: 'Ahmedabad is India’s first UNESCO World Heritage City and a textile and manufacturing hub — a place where single-use plastic enters daily life at scale. Starting here anchors the campaign in the source of the problem rather than its destination.',
    challenges: [
      'High volume of packaging and textile-industry plastic waste',
      'Informal waste picking with limited safety and segregation support',
      'Plastic entering the Sabarmati through storm drains',
    ],
    significance:
      'The Sabarmati is the first river the campaign meets. What escapes here travels downstream toward the Gulf of Khambhat and into the Arabian Sea.',
    partners: ['Local waste-picker cooperatives', 'Riverfront civic groups', 'City running clubs'],
    events: ['Campaign launch run', 'Riverfront cleanup drive', 'Open community talk'],
    schools: 'Assembly talks and a plastic-audit workshop for senior classes.',
    volunteer: 'Route marshals, cleanup crews and social media documenters.',
    journal: 'Day 1–2 journal entries will be published from the road.',
    media: 'Regional press and campaign channels cover the launch.',
    metrics: [
      { label: 'Marathons', value: '2' },
      { label: 'Days', value: '2' },
      { label: 'Distance', value: '84 km' },
    ],
  },
  {
    seq: 2,
    slug: 'dehradun',
    city: 'Dehradun',
    state: 'Uttarakhand',
    dates: '3–4 October',
    start: '2026-10-03',
    end: '2026-10-04',
    days: 2,
    marathons: 2,
    theme: 'Running for Change',
    chapter: 'Rivers of India',
    x: 40,
    y: 26,
    story:
      'From the plains to the foothills. Dehradun shows how quickly mountain towns absorb plastic they were never built to handle.',
    impact: 'Youth running meet-ups and a foothills trail cleanup.',
    route: 'Rajpur Road – Forest Research Institute loop',
    why: 'A fast-growing valley city surrounded by forest, Dehradun demonstrates how tourism and urban growth push plastic into fragile Himalayan catchments.',
    challenges: [
      'Tourism-driven single-use packaging',
      'Limited landfill capacity in the valley',
      'Waste dumped into seasonal streams',
    ],
    significance: 'Every stream here feeds the Ganga system that the next three stops follow.',
    partners: ['Local trail and running collectives', 'Forest conservation volunteers'],
    events: ['Community run', 'Trail cleanup'],
    schools: 'Interactive session on mountain waste with school eco-clubs.',
    volunteer: 'Trail cleanup crews and hydration support.',
    journal: 'Notes from the first climb into the hills.',
    media: 'Local coverage of the Himalayan leg.',
    metrics: [
      { label: 'Marathons', value: '2' },
      { label: 'Days', value: '2' },
      { label: 'Distance', value: '84 km' },
    ],
  },
  {
    seq: 3,
    slug: 'rishikesh',
    city: 'Rishikesh',
    state: 'Uttarakhand',
    dates: '5–8 October',
    start: '2026-10-05',
    end: '2026-10-08',
    days: 4,
    marathons: 4,
    theme: 'Rivers & Nature',
    chapter: 'Rivers of India',
    x: 41,
    y: 24,
    story:
      'Where the Ganga leaves the mountains. Bottles, wrappers and rafting waste begin a 2,500 km ride to the sea from these banks.',
    impact: 'Riverbank cleanups with rafting operators and ashram communities.',
    route: 'Laxman Jhula – riverfront loop',
    why: 'Rishikesh receives millions of visitors a year. It is the clearest example of plastic entering a river at its source.',
    challenges: [
      'Adventure-tourism packaging waste',
      'Riverbank littering at ghats and camps',
      'Seasonal surges that overwhelm collection',
    ],
    significance: 'Plastic released here is measurable downstream for thousands of kilometres.',
    partners: ['Rafting operators', 'Ashram and ghat committees', 'River cleanup groups'],
    events: ['Ghat cleanup', 'Riverside awareness run'],
    schools: 'River-literacy workshop linking waste to water quality.',
    volunteer: 'Riverbank cleanup, waste sorting and data recording.',
    journal: 'Daily riverside reflections.',
    media: 'Coverage of the Ganga source-to-sea narrative.',
    metrics: [
      { label: 'Marathons', value: '4' },
      { label: 'Days', value: '4' },
      { label: 'Distance', value: '169 km' },
    ],
  },
  {
    seq: 4,
    slug: 'haridwar',
    city: 'Haridwar',
    state: 'Uttarakhand',
    dates: '9–12 October',
    start: '2026-10-09',
    end: '2026-10-12',
    days: 4,
    marathons: 4,
    theme: 'Protecting Sacred Rivers',
    chapter: 'Rivers of India',
    x: 42,
    y: 26,
    story:
      'A sacred river carries what we hand it. Haridwar asks a simple question: can devotion and disposable plastic share the same bank?',
    impact: 'Ghat-level plastic-free pledges with pilgrim communities.',
    route: 'Ganga ghat morning circuit',
    why: 'Haridwar hosts enormous pilgrim footfall, and ritual offerings are increasingly wrapped in plastic that ends up in the river.',
    challenges: [
      'Ritual and offering packaging',
      'Very high seasonal footfall',
      'Difficult retrieval of waste already in the current',
    ],
    significance: 'One of the most culturally significant river points in India — and a decisive plastic gateway.',
    partners: ['Ghat committees', 'Pilgrim welfare groups', 'Municipal sanitation teams'],
    events: ['Plastic-free ghat pledge', 'Morning cleanup run'],
    schools: 'Sessions on sacred rivers and modern waste.',
    volunteer: 'Ghat cleanups and pledge desks.',
    journal: 'Stories from the ghats.',
    media: 'Faith-and-environment features.',
    metrics: [
      { label: 'Marathons', value: '4' },
      { label: 'Days', value: '4' },
      { label: 'Distance', value: '169 km' },
    ],
  },
  {
    seq: 5,
    slug: 'delhi',
    city: 'Delhi',
    state: 'Delhi (NCT)',
    dates: '13–20 October',
    start: '2026-10-13',
    end: '2026-10-20',
    days: 8,
    marathons: 8,
    theme: 'Policy & National Awareness',
    chapter: 'Cities That Can Change',
    x: 40,
    y: 32,
    story:
      'The capital is where rules are written. Eight days of running to move plastic from a personal habit to a national policy conversation.',
    impact: 'Policy roundtables, university talks and a national media push.',
    route: 'India Gate – Kartavya Path – Central Vista loops',
    why: 'Delhi concentrates decision-makers, media and one of the country’s largest urban waste streams in a single place.',
    challenges: [
      'Landfill overflow at legacy dumpsites',
      'Extended producer responsibility gaps',
      'Plastic reaching the Yamuna through drains',
    ],
    significance: 'The Yamuna leg completes the river story before the campaign turns south.',
    partners: ['Policy and research institutions', 'University eco-clubs', 'City running groups'],
    events: ['Policy roundtable', 'Campus runs', 'Public awareness march'],
    schools: 'Multi-school programme across the eight-day stay.',
    volunteer: 'Event support, campus outreach and documentation.',
    journal: 'A week of conversations with policymakers.',
    media: 'National press and broadcast coverage.',
    metrics: [
      { label: 'Marathons', value: '8' },
      { label: 'Days', value: '8' },
      { label: 'Distance', value: '338 km' },
    ],
  },
  {
    seq: 6,
    slug: 'indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    dates: '21–25 October',
    start: '2026-10-21',
    end: '2026-10-25',
    days: 5,
    marathons: 5,
    theme: 'Waste Management Success',
    chapter: 'Cities That Can Change',
    x: 33,
    y: 50,
    story:
      'Proof that it works. India’s cleanest city shows what segregation, collection and civic pride can do at scale.',
    impact: 'Learning exchange documenting a replicable municipal model.',
    route: 'Rajwada – Regional Park city loop',
    why: 'Indore has repeatedly ranked India’s cleanest city. The campaign studies and broadcasts how it got there.',
    challenges: [
      'Sustaining segregation as the city grows',
      'Managing multi-layer plastic that has no easy recycling route',
    ],
    significance: 'The optimistic chapter of the route — a model other cities can copy.',
    partners: ['Municipal corporation teams', 'Sanitation worker collectives', 'Local citizen groups'],
    events: ['Model-city learning walk', 'Community run'],
    schools: 'Case-study workshop on how Indore changed behaviour.',
    volunteer: 'Documentation and interview support.',
    journal: 'What a working system actually looks like.',
    media: 'Feature coverage on replicating the Indore model.',
    metrics: [
      { label: 'Marathons', value: '5' },
      { label: 'Days', value: '5' },
      { label: 'Distance', value: '211 km' },
    ],
  },
  {
    seq: 7,
    slug: 'hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    dates: '26 October – 12 November',
    start: '2026-10-26',
    end: '2026-11-12',
    days: 18,
    marathons: 18,
    theme: 'Innovation & Scale',
    chapter: 'Innovation at Scale',
    x: 39,
    y: 74,
    story:
      'The longest stop of the campaign. Eighteen days to connect research labs, start-ups and recyclers building the alternatives to plastic.',
    impact: 'Innovation showcase, corporate CSR partnerships and a large volunteer network.',
    route: 'Necklace Road – Hussain Sagar loops',
    why: 'Hyderabad combines research capacity, industry and civic energy — the best place to show solutions rather than only problems.',
    challenges: [
      'Industrial and packaging plastic volume',
      'Lake pollution around Hussain Sagar and connected water bodies',
      'Scaling pilot innovations beyond demonstrations',
    ],
    significance: 'The campaign’s hub for solutions, technology and partnerships.',
    partners: ['Material-science researchers', 'Recycling start-ups', 'Corporate CSR teams'],
    events: ['Innovation showcase', 'Lake cleanup', 'Corporate run days'],
    schools: 'Extended schools programme across all 18 days.',
    volunteer: 'Largest volunteer intake of the campaign.',
    journal: 'Eighteen days, eighteen entries.',
    media: 'Technology and sustainability press.',
    metrics: [
      { label: 'Marathons', value: '18' },
      { label: 'Days', value: '18' },
      { label: 'Distance', value: '760 km' },
    ],
  },
  {
    seq: 8,
    slug: 'nashik',
    city: 'Nashik',
    state: 'Maharashtra',
    dates: '13–18 November',
    start: '2026-11-13',
    end: '2026-11-18',
    days: 6,
    marathons: 6,
    theme: 'Rivers & Sustainable Agriculture',
    chapter: 'Following the River',
    x: 28,
    y: 68,
    story:
      'On the banks of the Godavari, farm plastic and river plastic meet. Mulch film, packaging and irrigation waste all drain the same way.',
    impact: 'Farm-plastic collection pilot with grower groups.',
    route: 'Godavari ghats – vineyard road loop',
    why: 'Nashik links agriculture to the river system, a plastic pathway that is rarely counted in city-focused campaigns.',
    challenges: [
      'Agricultural mulch and packaging film',
      'Riverbank dumping along the Godavari',
      'Seasonal pilgrimage footfall',
    ],
    significance: 'The last major river stop before the route reaches the coast.',
    partners: ['Farmer producer groups', 'Vineyard estates', 'River conservation volunteers'],
    events: ['Godavari ghat cleanup', 'Farm-plastic collection drive'],
    schools: 'Rural school sessions on farm waste.',
    volunteer: 'Collection drives and sorting.',
    journal: 'Where farming and rivers meet.',
    media: 'Agricultural and regional press.',
    metrics: [
      { label: 'Marathons', value: '6' },
      { label: 'Days', value: '6' },
      { label: 'Distance', value: '253 km' },
    ],
  },
  {
    seq: 9,
    slug: 'goa',
    city: 'Goa',
    state: 'Goa',
    dates: '19–28 November',
    start: '2026-11-19',
    end: '2026-11-28',
    days: 10,
    marathons: 10,
    theme: 'Ocean Plastic',
    chapter: 'From River to Ocean',
    x: 26,
    y: 82,
    story:
      'The sea returns what we sent it. Ten days on Goa’s shoreline measuring what the rivers finally deliver to the Arabian Sea.',
    impact: 'Beach cleanups with brand audits of recovered plastic.',
    route: 'Miramar – Dona Paula coastal loop',
    why: 'Goa is where the inland story becomes visible on the sand: the same packaging seen in Delhi and Indore washes up here.',
    challenges: [
      'Tourism-driven single-use plastic',
      'Monsoon deposition of riverine plastic on beaches',
      'Micro-plastic in coastal sediment',
    ],
    significance: 'The campaign’s first true ocean chapter.',
    partners: ['Beach shack associations', 'Coastal cleanup NGOs', 'Dive and surf communities'],
    events: ['Beach cleanup series', 'Brand audit of collected waste', 'Sunrise coastal run'],
    schools: 'Coastal ecology sessions with local schools.',
    volunteer: 'Beach cleanups and waste characterisation.',
    journal: 'Ten days on the shoreline.',
    media: 'National coverage of ocean plastic.',
    metrics: [
      { label: 'Marathons', value: '10' },
      { label: 'Days', value: '10' },
      { label: 'Distance', value: '422 km' },
    ],
  },
  {
    seq: 10,
    slug: 'velas',
    city: 'Velas',
    state: 'Maharashtra',
    dates: '29 November – 3 December',
    start: '2026-11-29',
    end: '2026-12-03',
    days: 5,
    marathons: 5,
    theme: 'Marine Biodiversity',
    chapter: 'Protecting Marine Life',
    x: 26,
    y: 76,
    story:
      'A turtle nesting village where plastic is not an abstraction — hatchlings cross it on their way to the sea.',
    impact: 'Nesting-beach protection and community conservation support.',
    route: 'Velas beach – Bankot coastal stretch',
    why: 'Velas is a community-led Olive Ridley turtle conservation success story, and a direct demonstration of plastic’s effect on marine life.',
    challenges: [
      'Plastic debris on nesting beaches',
      'Ghost fishing gear washing ashore',
      'Limited local waste infrastructure',
    ],
    significance: 'Biodiversity is the clearest argument for stopping plastic upstream.',
    partners: ['Turtle conservation collectives', 'Homestay community network'],
    events: ['Nesting beach cleanup', 'Conservation talk'],
    schools: 'Village school sessions on marine life.',
    volunteer: 'Beach patrol and cleanup support.',
    journal: 'Notes from a turtle village.',
    media: 'Wildlife and conservation features.',
    metrics: [
      { label: 'Marathons', value: '5' },
      { label: 'Days', value: '5' },
      { label: 'Distance', value: '211 km' },
    ],
  },
  {
    seq: 11,
    slug: 'alibaug',
    city: 'Alibaug',
    state: 'Maharashtra',
    dates: '4–10 December',
    start: '2026-12-04',
    end: '2026-12-10',
    days: 7,
    marathons: 7,
    theme: 'Coastal Stewardship',
    chapter: 'Protecting Marine Life',
    x: 26,
    y: 72,
    story:
      'Weekend coastline, weekday consequence. Alibaug is about who takes responsibility for a shore that everyone visits.',
    impact: 'Coastal stewardship pledges with villages, resorts and visitors.',
    route: 'Alibaug – Kihim beach coastal loop',
    why: 'Alibaug absorbs heavy visitor traffic from Mumbai, making shared stewardship the only workable model.',
    challenges: [
      'Weekend tourism waste peaks',
      'Mangrove and creek litter',
      'Fragmented collection across villages',
    ],
    significance: 'The last coastal stretch before the finish, and the campaign’s stewardship pledge.',
    partners: ['Village panchayats', 'Resort and hospitality operators', 'Mangrove conservation groups'],
    events: ['Coastal stewardship pledge', 'Mangrove cleanup'],
    schools: 'Coastal responsibility workshops.',
    volunteer: 'Cleanups, pledge drives and logistics.',
    journal: 'Seven days of shared responsibility.',
    media: 'Regional and lifestyle press.',
    metrics: [
      { label: 'Marathons', value: '7' },
      { label: 'Days', value: '7' },
      { label: 'Distance', value: '295 km' },
    ],
  },
  {
    seq: 12,
    slug: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    dates: '11–19 December',
    start: '2026-12-11',
    end: '2026-12-19',
    days: 9,
    marathons: 9,
    theme: 'National Legacy & Finale',
    chapter: 'The National Finish',
    x: 26,
    y: 70,
    story:
      'Source to sea, completed. Nine final marathons in the city where India’s plastic story is loudest — and where the legacy begins.',
    impact: 'Finale run, national pledge and handover of campaign findings.',
    route: 'Marine Drive – Bandra – official city marathon route',
    why: 'Mumbai is the end of the water’s journey and the start of the campaign’s afterlife: policy asks, partnerships and published data.',
    challenges: [
      'Massive daily plastic generation',
      'Mithi river and creek pollution',
      'Monsoon plastic return on beaches',
    ],
    significance: 'The finish line of 80 marathons and the launch of the campaign’s legacy programme.',
    partners: ['City marathon community', 'Corporate partners', 'Coastal cleanup movements'],
    events: ['Finale marathon', 'National pledge event', 'Findings handover'],
    schools: 'City-wide schools finale programme.',
    volunteer: 'Finish-line crew, cleanups and events.',
    journal: 'The final nine days.',
    media: 'National finale coverage.',
    metrics: [
      { label: 'Marathons', value: '9' },
      { label: 'Days', value: '9' },
      { label: 'Distance', value: '380 km' },
    ],
  },
];

export const chapters = [
  { title: 'Launching the Movement', cities: 'Ahmedabad', blurb: 'Where the journey — and the plastic — begins.' },
  { title: 'Rivers of India', cities: 'Dehradun, Rishikesh, Haridwar', blurb: 'Following plastic into the Ganga system.' },
  { title: 'Cities That Can Change', cities: 'Delhi & Indore', blurb: 'Policy in the capital, proof in the cleanest city.' },
  { title: 'Innovation at Scale', cities: 'Hyderabad', blurb: 'Eighteen days with the people building alternatives.' },
  { title: 'Following the River', cities: 'Nashik', blurb: 'Farm plastic, the Godavari and the road to the coast.' },
  { title: 'From River to Ocean', cities: 'Goa', blurb: 'What the rivers finally deliver to the sea.' },
  { title: 'Protecting Marine Life', cities: 'Velas & Alibaug', blurb: 'Turtles, mangroves and coastal stewardship.' },
  { title: 'The National Finish', cities: 'Mumbai', blurb: 'Source to sea, completed.' },
];

export const journeyStats = [
  { value: 80, suffix: '', label: 'Days' },
  { value: 80, suffix: '', label: 'Marathons' },
  { value: 12, suffix: '', label: 'Cities' },
  { value: 8, suffix: '+', label: 'States & UTs' },
  { value: 3, suffix: '', label: 'Runners' },
  { value: TOTAL_DISTANCE_KM, suffix: ' km', label: 'Total distance' },
];

export const CAMPAIGN_START = new Date('2026-10-01T00:00:00+05:30');
export const CAMPAIGN_END = new Date('2026-12-19T23:59:59+05:30');

export type StopStatus = 'completed' | 'current' | 'upcoming';

export const getStopStatus = (stop: RouteStop, now: Date = new Date()): StopStatus => {
  const end = new Date(`${stop.end}T23:59:59+05:30`);
  const start = new Date(`${stop.start}T00:00:00+05:30`);
  if (now > end) return 'completed';
  if (now >= start) return 'current';
  return 'upcoming';
};

export const getCampaignProgress = (now: Date = new Date()) => {
  const msPerDay = 86_400_000;
  const rawDay = Math.floor((now.getTime() - CAMPAIGN_START.getTime()) / msPerDay) + 1;
  const dayNumber = Math.min(Math.max(rawDay, 0), TOTAL_DAYS);
  const started = now >= CAMPAIGN_START;
  const finished = now > CAMPAIGN_END;

  const currentStop =
    routeStops.find(s => getStopStatus(s, now) === 'current') ??
    (finished ? routeStops[routeStops.length - 1] : routeStops[0]);

  const marathonsDone = started ? dayNumber : 0;
  const distanceCovered = Math.round(marathonsDone * MARATHON_KM);
  const distanceRemaining = Math.max(TOTAL_DISTANCE_KM - distanceCovered, 0);

  const statesVisited = new Set(
    routeStops.filter(s => getStopStatus(s, now) !== 'upcoming').map(s => s.state),
  ).size;

  const nextStop = routeStops.find(s => getStopStatus(s, now) === 'upcoming') ?? null;

  return {
    started,
    finished,
    dayNumber,
    marathonsDone,
    currentStop,
    nextStop,
    distanceCovered,
    distanceRemaining,
    statesVisited,
    percent: Math.round((marathonsDone / TOTAL_MARATHONS) * 100),
  };
};

export const getStopBySlug = (slug?: string) => routeStops.find(s => s.slug === slug);
