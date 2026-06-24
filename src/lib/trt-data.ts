export type Franchise = {
  slug: string;
  city: string;
  name: string;
  tag: string;
  color: string;
  mission: string;
  gm: string;
  venue: string;
  founded: string;
  community: string;
  // GTA map approximate coords (svg viewBox 1000x600)
  map: { x: number; y: number };
};

export const FRANCHISES: Franchise[] = [
  {
    slug: "downtown-toronto",
    city: "Downtown Toronto",
    name: "Downtown Royals",
    tag: "The Capital",
    color: "oklch(0.55 0.24 27)",
    mission: "Defend the core. Carry the crown.",
    gm: "TBA",
    venue: "Downtown Arena District",
    founded: "Founding Franchise",
    community: "Reinvesting in the courts where Toronto basketball was born.",
    map: { x: 500, y: 360 },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    name: "Scarborough East",
    tag: "The East",
    color: "oklch(0.6 0.2 27)",
    mission: "From Malvern to Morningside — the East rises.",
    gm: "TBA",
    venue: "Scarborough Civic Centre",
    founded: "Founding Franchise",
    community: "Youth clinics across Scarborough's 6 priority neighbourhoods.",
    map: { x: 720, y: 320 },
  },
  {
    slug: "brampton",
    city: "Brampton",
    name: "Brampton Kings",
    tag: "The Crown",
    color: "oklch(0.58 0.22 27)",
    mission: "Canada's basketball factory. Now with a crown.",
    gm: "TBA",
    venue: "CAA Centre",
    founded: "Founding Franchise",
    community: "Partnered with Peel high school programs.",
    map: { x: 260, y: 310 },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    name: "Vaughan Heights",
    tag: "The North",
    color: "oklch(0.6 0.2 27)",
    mission: "Built on ambition. Built for height.",
    gm: "TBA",
    venue: "Vaughan Performance Centre",
    founded: "Founding Franchise",
    community: "York Region development pipeline.",
    map: { x: 410, y: 220 },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    name: "Mississauga Tide",
    tag: "The Waterfront",
    color: "oklch(0.55 0.24 27)",
    mission: "The wave. The work. The west.",
    gm: "TBA",
    venue: "Paramount Fine Foods Centre",
    founded: "Founding Franchise",
    community: "Cross-border outreach with Halton & Peel.",
    map: { x: 290, y: 410 },
  },
  {
    slug: "durham",
    city: "Durham",
    name: "Durham Storm",
    tag: "The Surge",
    color: "oklch(0.6 0.22 27)",
    mission: "Quiet region. Loud league.",
    gm: "TBA",
    venue: "Tribute Communities Centre",
    founded: "Founding Franchise",
    community: "Oshawa, Pickering, Ajax youth pipelines.",
    map: { x: 830, y: 380 },
  },
];

export type FounderTier = {
  range: [number, number];
  price: number;
};
export const TIERS: FounderTier[] = [
  { range: [1, 4], price: 5000 },
  { range: [5, 12], price: 7500 },
  { range: [13, 20], price: 10000 },
  { range: [21, 24], price: 15000 },
];

export function priceForFounder(n: number): number {
  const t = TIERS.find((t) => n >= t.range[0] && n <= t.range[1]);
  return t?.price ?? 0;
}
