export type RouteStop = {
  seq: number;
  city: string;
  state: string;
  dates: string;
  marathons: number;
  zone: string;
  route: string;
  stage: 1 | 2;
};

export const routeStops: RouteStop[] = [
  // STAGE 1 — Gujarat → Rajasthan → Delhi → Uttarakhand → Sikkim → Assam → West Bengal → Andhra Pradesh
  { seq: 1,  city: 'Ahmedabad (Start)', state: 'Gujarat',        dates: 'Oct 1–4',     marathons: 4, zone: 'West • Riverfront',     route: 'Sabarmati Riverfront promenade loops',           stage: 1 },
  { seq: 2,  city: 'Jaipur',            state: 'Rajasthan',      dates: 'Oct 5–7',     marathons: 3, zone: 'North • Heritage',      route: 'Jawahar Circle – JLN Marg loop',                 stage: 1 },
  { seq: 3,  city: 'New Delhi',         state: 'Delhi',          dates: 'Oct 8–13',    marathons: 6, zone: 'North • Capital',       route: 'India Gate – Rajpath – Central Vista loops',     stage: 1 },
  { seq: 4,  city: 'Dehradun',          state: 'Uttarakhand',    dates: 'Oct 14–16',   marathons: 2, zone: 'North • Foothills',     route: 'Rajpur Road – Forest Research Inst. loop',       stage: 1 },
  { seq: 5,  city: 'Haridwar',          state: 'Uttarakhand',    dates: 'Oct 17',      marathons: 1, zone: 'North • Riverine',      route: 'Ganga ghat morning circuit',                     stage: 1 },
  { seq: 6,  city: 'Rishikesh',         state: 'Uttarakhand',    dates: 'Oct 18',      marathons: 1, zone: 'North • Riverine',      route: 'Laxman Jhula – riverfront loop',                 stage: 1 },
  { seq: 7,  city: 'Gangtok',           state: 'Sikkim',         dates: 'Oct 19–21',   marathons: 3, zone: 'Northeast • Mountain',  route: 'MG Marg – city ridge roads',                     stage: 1 },
  { seq: 8,  city: 'Darjeeling',        state: 'West Bengal',    dates: 'Oct 22–23',   marathons: 2, zone: 'East • Hills',          route: 'Chowrasta – Mall Road loop',                     stage: 1 },
  { seq: 9,  city: 'Guwahati',          state: 'Assam',          dates: 'Oct 24–27',   marathons: 4, zone: 'Northeast • Riverine',  route: 'Brahmaputra riverfront circuits',                stage: 1 },
  { seq: 10, city: 'Kolkata',           state: 'West Bengal',    dates: 'Oct 28–Nov 2',marathons: 6, zone: 'East • Metro',          route: 'Maidan + Hooghly riverfront',                    stage: 1 },
  { seq: 11, city: 'Kalyani',           state: 'West Bengal',    dates: 'Nov 3',       marathons: 1, zone: 'East • Township',       route: 'University township loop',                       stage: 1 },
  { seq: 12, city: 'Nabadwip',          state: 'West Bengal',    dates: 'Nov 4',       marathons: 1, zone: 'East • Heritage',       route: 'Town & ghat loop',                               stage: 1 },
  { seq: 13, city: 'IIT Kharagpur',     state: 'West Bengal',    dates: 'Nov 5',       marathons: 1, zone: 'East • Campus',         route: 'Campus perimeter loop',                          stage: 1 },
  { seq: 14, city: 'Visakhapatnam',     state: 'Andhra Pradesh', dates: 'Nov 6–9',     marathons: 4, zone: 'East Coast',            route: 'RK Beach promenade',                             stage: 1 },

  // STAGE 2 — Telangana → Tamil Nadu → Puducherry → Kerala → Karnataka → Goa → Maharashtra
  { seq: 15, city: 'Hyderabad',         state: 'Telangana',      dates: 'Nov 10–12',   marathons: 3, zone: 'South • Metro',         route: 'Necklace Road – Hussain Sagar',                  stage: 2 },
  { seq: 16, city: 'Chennai',           state: 'Tamil Nadu',     dates: 'Nov 13–15',   marathons: 3, zone: 'South • Coast',         route: 'Marina – Besant Nagar loops',                    stage: 2 },
  { seq: 17, city: 'Puducherry',        state: 'Puducherry (UT)',dates: 'Nov 16',      marathons: 1, zone: 'South • Coast',         route: 'Promenade Beach',                                stage: 2 },
  { seq: 18, city: 'Coimbatore',        state: 'Tamil Nadu',     dates: 'Nov 17–18',   marathons: 2, zone: 'South • Industrial',    route: 'VOC Park – Avinashi Rd loop',                    stage: 2 },
  { seq: 19, city: 'Ooty',              state: 'Tamil Nadu',     dates: 'Nov 19',      marathons: 1, zone: 'South • Hills',         route: 'Ooty Lake outer road loop',                      stage: 2 },
  { seq: 20, city: 'Thiruvananthapuram',state: 'Kerala',         dates: 'Nov 20–21',   marathons: 2, zone: 'South • Coast',         route: 'Shankumugham – Marine Drive',                    stage: 2 },
  { seq: 21, city: 'Kochi',             state: 'Kerala',         dates: 'Nov 22–23',   marathons: 3, zone: 'South • Coast',         route: 'Marine Drive – Fort Kochi',                      stage: 2 },
  { seq: 22, city: 'Varkala',           state: 'Kerala',         dates: 'Nov 24',      marathons: 1, zone: 'South • Coast',         route: 'Cliff & beach circuit',                          stage: 2 },
  { seq: 23, city: 'Bangalore',         state: 'Karnataka',      dates: 'Nov 25–28',   marathons: 4, zone: 'South • Metro',         route: 'Cubbon Park – CBD loops',                        stage: 2 },
  { seq: 24, city: 'Mysore',            state: 'Karnataka',      dates: 'Nov 29',      marathons: 1, zone: 'South • Heritage',      route: 'Mysore Palace – KR Circle loop',                 stage: 2 },
  { seq: 25, city: 'Chikmagalur',       state: 'Karnataka',      dates: 'Nov 30–Dec 1',marathons: 2, zone: 'South • Estates',       route: 'Town-to-coffee estate scenic loops',             stage: 2 },
  { seq: 26, city: 'Coorg',             state: 'Karnataka',      dates: 'Dec 2–3',     marathons: 2, zone: 'South • Forest',        route: 'Raja’s Seat – Abbey Falls road stretch',         stage: 2 },
  { seq: 27, city: 'Udupi',             state: 'Karnataka',      dates: 'Dec 4',       marathons: 1, zone: 'West Coast',            route: 'Udupi town – Malpe road loop',                   stage: 2 },
  { seq: 28, city: 'Gokarna',           state: 'Karnataka',      dates: 'Dec 5',       marathons: 1, zone: 'West Coast',            route: 'Beach-side internal road circuit',               stage: 2 },
  { seq: 29, city: 'Goa',               state: 'Goa',            dates: 'Dec 6–9',     marathons: 4, zone: 'West Coast',            route: 'Miramar – Dona Paula',                           stage: 2 },
  { seq: 30, city: 'Mahabaleshwar',     state: 'Maharashtra',    dates: 'Dec 10–11',   marathons: 2, zone: 'West • Plateau',        route: 'Panchgani – Mahabaleshwar plateau roads',        stage: 2 },
  { seq: 31, city: 'Pune',              state: 'Maharashtra',    dates: 'Dec 12–14',   marathons: 3, zone: 'West • Metro',          route: 'Savitribai Phule Pune University loop',          stage: 2 },
  { seq: 32, city: 'Mumbai (Finish)',   state: 'Maharashtra',    dates: 'Dec 15–20',   marathons: 5, zone: 'West • Metro',          route: 'Official city marathon route',                   stage: 2 },
];
